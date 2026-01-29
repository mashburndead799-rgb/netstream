import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Play, Plus, Check, ThumbsUp, ArrowLeft, ChevronDown, MonitorPlay, Share2, Download, Flag, Volume2, VolumeX, Settings, FastForward, SkipForward, Maximize, Minimize, Layers, Clock } from 'lucide-react';
import { Movie, Episode } from '../types';
import MovieCard from './MovieCard';

interface ModalProps {
  movie: Movie | null;
  onClose: () => void;
  isInList: boolean;
  onToggleList: (movie: Movie) => void;
  isLiked: boolean;
  onToggleLike: (movie: Movie) => void;
  allMovies?: Movie[]; 
}

const Modal: React.FC<ModalProps> = ({ movie, onClose, isInList, onToggleList, isLiked, onToggleLike, allMovies = [] }) => {
  // --- States Globaux ---
  const [isWatchMode, setIsWatchMode] = useState(false);
  const [watchType, setWatchType] = useState<'movie' | 'trailer'>('movie'); 
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [activeTab, setActiveTab] = useState<'episodes' | 'more_like_this' | 'details'>('episodes');
  
  // --- States UI & Social ---
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'downloaded'>('idle');
  const [copySuccess, setCopySuccess] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // --- Initialisation ---
  useEffect(() => {
    if (movie) {
      setIsWatchMode(false);
      setWatchType('movie');
      setSelectedSeasonIndex(0);
      setCurrentEpisode(null);
      setActiveTab(movie.seasons ? 'episodes' : 'more_like_this');
      setDownloadState('idle');
      const modalContainer = document.querySelector('.custom-scrollbar');
      if (modalContainer) modalContainer.scrollTop = 0;
    }
  }, [movie]);

  // --- Logic : Recommendations ---
  const similarMovies = useMemo(() => {
      if (!allMovies.length || !movie) return [];
      return allMovies.filter(m => 
          m.id !== movie.id && 
          (m.genre.some(g => movie.genre.includes(g)) || m.category === movie.category)
      ).slice(0, 9);
  }, [movie, allMovies]);

  // --- Logic : Clavier & Raccourcis ---
  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          if (!movie) return;

          if (isWatchMode) {
              if (e.key === 'Escape') handleExitWatchMode();
          } else {
              if (e.key === 'Escape') onClose();
          }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isWatchMode, onClose, movie]);

  if (!movie) return null;

  // --- Helpers ---
  const getEmbedUrl = (url: string | undefined, autoplay: boolean = false, mute: boolean = false) => {
    if (!url) return "";
    let embedUrl = url;
    if (url.includes('youtube.com/watch')) embedUrl = `https://www.youtube.com/embed/${url.split('v=')[1]?.split('&')[0]}`;
    else if (url.includes('youtu.be/')) embedUrl = `https://www.youtube.com/embed/${url.split('.be/')[1]?.split('?')[0]}`;
    else if (url.includes('drive.google.com')) {
        const idMatch = url.match(/id=([^&]+)/) || url.match(/\/d\/([^/]+)/);
        if (idMatch && idMatch[1]) embedUrl = `https://drive.google.com/file/d/${idMatch[1]}/preview`;
    }

    const params = [];
    if (embedUrl.includes('youtube.com')) {
        if (autoplay) params.push('autoplay=1');
        if (mute) params.push('mute=1');
        // Activation des contrôles natifs
        params.push('controls=1', 'modestbranding=1', 'rel=0', 'showinfo=0', 'iv_load_policy=3');
    } else {
        if (autoplay) params.push('autoplay=1');
    }
    const separator = embedUrl.includes('?') ? '&' : '?';
    return params.length > 0 ? `${embedUrl}${separator}${params.join('&')}` : embedUrl;
  };

  const handleEnterWatchMode = (episode?: Episode, mode: 'movie' | 'trailer' = 'movie') => {
      if (episode) setCurrentEpisode(episode);
      setWatchType(mode);
      setIsWatchMode(true);
  };

  const handleExitWatchMode = () => {
      setIsWatchMode(false);
      // Removed fullscreen toggle as it conflicts with windowed mode often
  };

  const handleShare = () => {
      navigator.clipboard.writeText(`${window.location.origin}?movie=${movie.id}`);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
      if (downloadState === 'downloaded') return;
      setDownloadState('downloading');
      setTimeout(() => setDownloadState('downloaded'), 2500);
  };

  const isSeries = movie.seasons && movie.seasons.length > 0;
  
  const playbackUrl = () => {
      if (watchType === 'trailer') return movie.trailer_url || movie.video_url;
      if (currentEpisode) return currentEpisode.video_url;
      return movie.video_url || movie.trailer_url;
  };
  
  const backgroundPreviewUrl = movie.trailer_url || movie.video_url;

  // --- RENDER : LECTEUR VIDÉO (SIMPLIFIÉ) ---
  if (isWatchMode) {
      const urlToPlay = playbackUrl();
      const titleToPlay = watchType === 'trailer' ? `Bande-annonce : ${movie.title}` : (currentEpisode ? `${movie.title} - ${currentEpisode.title}` : movie.title);

      return (
          // Changed to absolute to fit inside window
          <div className="absolute inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden animate-in fade-in duration-300">
              <button onClick={handleExitWatchMode} className="absolute top-6 left-6 z-50 bg-black/50 hover:bg-white hover:text-black text-white p-2 rounded-full transition-all backdrop-blur-sm">
                  <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="w-full h-full">
                 {urlToPlay ? (
                     <iframe 
                        src={getEmbedUrl(urlToPlay, true, false)} 
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen; encrypted-media" 
                        allowFullScreen
                        title={titleToPlay}
                     />
                 ) : (
                    <div className="flex flex-col items-center justify-center h-full text-white">
                        <p className="text-2xl font-bold mb-2">Source vidéo indisponible</p>
                        <button onClick={handleExitWatchMode} className="mt-6 px-6 py-2 bg-white text-black rounded font-bold hover:bg-gray-200">Retour</button>
                    </div>
                 )}
              </div>
          </div>
      );
  }

  // --- RENDER : MODAL DÉTAILS ---
  return (
    // Changed fixed to absolute inset-0
    <div className="absolute inset-0 z-[60] overflow-y-auto custom-scrollbar">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity" onClick={onClose}/>
      <div className="flex min-h-full items-center justify-center p-2 md:p-6 text-center">
        <div className="relative w-full max-w-5xl bg-[#181818] rounded-lg shadow-2xl overflow-hidden transform transition-all text-left animate-in zoom-in-95 duration-200 ring-1 ring-white/10" style={{ minHeight: '800px' }}>
          
          <button onClick={onClose} className="absolute top-4 right-4 z-50 rounded-full bg-[#181818]/80 p-2 hover:bg-[#333] transition focus:outline-none ring-1 ring-white/20 group">
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="relative w-full pt-[56.25%] bg-black group">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
               {backgroundPreviewUrl ? (
                   <iframe src={getEmbedUrl(backgroundPreviewUrl, true, isMuted)} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-[1.35] pointer-events-none" title="preview" tabIndex={-1}/>
               ) : (
                   <img src={movie.backdrop} alt={movie.title} className="w-full h-full object-cover"/>
               )}
               <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute bottom-[5%] left-6 md:left-12 max-w-2xl z-20">
               <div className="flex items-center gap-2 mb-2">
                   {movie.featured && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png" className="h-4 w-auto" alt="Logo" />}
                   <span className="text-gray-200 font-bold tracking-widest text-xs uppercase">{movie.category === 'Série' ? 'SÉRIE' : 'FILM'}</span>
               </div>
               <h3 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg tracking-tighter leading-none">{movie.title}</h3>
               
               <div className="flex gap-3 mb-6 flex-wrap">
                    <button onClick={() => handleEnterWatchMode(isSeries && !currentEpisode ? movie.seasons![0].episodes[0] : undefined, 'movie')} className="flex items-center justify-center px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition text-lg gap-2 hover:scale-105 active:scale-95">
                        <Play className="w-6 h-6 fill-black" /> Lecture
                    </button>
                    <button onClick={() => onToggleList(movie)} className="p-3 border-2 border-gray-500 rounded-full hover:border-white bg-[#2a2a2a]/60 hover:bg-[#2a2a2a] transition group relative">
                        {isInList ? <Check className="w-6 h-6 text-green-500" /> : <Plus className="w-6 h-6 text-white" />}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none font-bold">Ma Liste</span>
                    </button>
                    <button onClick={() => onToggleLike(movie)} className={`p-3 border-2 rounded-full hover:border-white bg-[#2a2a2a]/60 transition group relative ${isLiked ? 'border-white' : 'border-gray-500'}`}>
                        <ThumbsUp className={`w-6 h-6 ${isLiked ? 'text-white fill-white' : 'text-white'}`} />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none font-bold">J'aime</span>
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)} className="p-3 border-2 border-gray-500 rounded-full hover:border-white bg-[#2a2a2a]/60 transition ml-auto md:ml-2">
                        {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
                    </button>
               </div>
            </div>
          </div>

          <div className="px-6 md:px-12 pb-12 relative z-20 flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3 space-y-6">
                  <div className="flex items-center flex-wrap gap-3 text-sm font-semibold">
                      <span className="text-green-500 font-bold">98% recommandé</span>
                      <span className="text-gray-400">{movie.year}</span>
                      <span className="border border-gray-500 px-1.5 py-0.5 rounded text-xs text-gray-300">{movie.maturityRating}</span>
                      <span>{movie.duration}</span>
                      <span className="border border-gray-500 px-1.5 py-0.5 rounded text-[10px] text-xs text-gray-300">HD</span>
                      <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">TOP 10</span>
                  </div>
                  
                  {currentEpisode && (
                      <div className="bg-[#2a2a2a] p-4 rounded border-l-4 border-red-600 mb-4">
                          <p className="text-gray-400 text-xs uppercase font-bold mb-1">Actuellement :</p>
                          <p className="text-white font-bold text-lg">S{movie.seasons![selectedSeasonIndex].seasonNumber}:E{movie.seasons![selectedSeasonIndex].episodes.indexOf(currentEpisode)+1} "{currentEpisode.title}"</p>
                      </div>
                  )}

                  <p className="text-white text-lg leading-relaxed text-gray-200 font-light">{movie.description}</p>
                  
                  <div className="flex gap-8 py-6 border-t border-gray-800/50">
                      <div className="flex flex-col items-center cursor-pointer group hover:scale-105 transition" onClick={() => onToggleList(movie)}>
                          <Plus className="w-6 h-6 text-gray-400 group-hover:text-white mb-2" />
                          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold group-hover:text-white">Liste</span>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group hover:scale-105 transition" onClick={handleDownload}>
                          {downloadState === 'downloaded' ? <Check className="w-6 h-6 text-blue-500 mb-2" /> : <Download className={`w-6 h-6 text-gray-400 group-hover:text-white mb-2 ${downloadState === 'downloading' ? 'animate-bounce' : ''}`} />}
                          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold group-hover:text-white">{downloadState === 'downloaded' ? 'Terminé' : (downloadState === 'downloading' ? '...' : 'Télécharger')}</span>
                      </div>
                      <div className="flex flex-col items-center cursor-pointer group hover:scale-105 transition" onClick={handleShare}>
                          {copySuccess ? <Check className="w-6 h-6 text-green-500 mb-2" /> : <Share2 className="w-6 h-6 text-gray-400 group-hover:text-white mb-2" />}
                          <span className="text-xs text-gray-500 uppercase tracking-widest font-bold group-hover:text-white">{copySuccess ? 'Copié !' : 'Partager'}</span>
                      </div>
                  </div>
              </div>

              <div className="md:w-1/3 space-y-5 text-sm">
                  <div>
                      <span className="text-gray-500 block mb-1">Distribution :</span> 
                      <span className="text-gray-200 text-xs leading-relaxed cursor-pointer hover:underline">
                          {movie.cast?.map(c => c.name).slice(0,4).join(', ')}
                          {movie.cast && movie.cast.length > 4 && <span className="text-gray-500 italic"> +{movie.cast.length - 4} autres</span>}
                      </span>
                  </div>
                  <div>
                      <span className="text-gray-500 block mb-1">Genres :</span> 
                      <div className="flex flex-wrap gap-2">
                          {movie.genre.map((g, i) => (
                              <span key={i} className="text-gray-300 text-xs border border-gray-700 px-2 py-1 rounded-full hover:bg-gray-700 cursor-pointer transition">{g}</span>
                          ))}
                      </div>
                  </div>
              </div>
          </div>

          <div className="px-6 md:px-12 mt-4 bg-[#141414] pt-4 min-h-[400px]">
              <div className="flex gap-8 border-b-2 border-gray-800 mb-8 sticky top-0 bg-[#141414] z-30 pt-2">
                  {isSeries && (
                      <button onClick={() => setActiveTab('episodes')} className={`text-sm md:text-lg font-bold uppercase tracking-wide border-b-4 pb-2 -mb-0.5 transition ${activeTab === 'episodes' ? 'border-red-600 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}>
                          Épisodes
                      </button>
                  )}
                  <button onClick={() => setActiveTab('more_like_this')} className={`text-sm md:text-lg font-bold uppercase tracking-wide border-b-4 pb-2 -mb-0.5 transition ${activeTab === 'more_like_this' ? 'border-red-600 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}>
                      Plus comme ceci
                  </button>
                  <button onClick={() => setActiveTab('details')} className={`text-sm md:text-lg font-bold uppercase tracking-wide border-b-4 pb-2 -mb-0.5 transition ${activeTab === 'details' ? 'border-red-600 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}>
                      Détails
                  </button>
              </div>

              <div className="pb-12">
                  {activeTab === 'episodes' && isSeries && movie.seasons && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                          <div className="flex justify-between items-center mb-4">
                              <h3 className="text-xl font-bold">{movie.seasons[selectedSeasonIndex].title}</h3>
                              <select value={selectedSeasonIndex} onChange={(e) => setSelectedSeasonIndex(Number(e.target.value))} className="bg-[#2a2a2a] border border-gray-700 text-white py-1 px-3 rounded focus:outline-none">
                                  {movie.seasons.map((s, i) => <option key={i} value={i}>{s.title || `Saison ${s.seasonNumber}`}</option>)}
                              </select>
                          </div>
                          {movie.seasons[selectedSeasonIndex].episodes.map((ep, idx) => (
                              <div key={ep.id} className="flex gap-4 p-4 hover:bg-[#2a2a2a] rounded cursor-pointer group items-center border-b border-gray-800 last:border-0" onClick={() => handleEnterWatchMode(ep)}>
                                  <span className="text-2xl text-gray-500 font-bold w-8">{idx + 1}</span>
                                  <div className="relative w-32 aspect-video bg-gray-800 rounded overflow-hidden flex-shrink-0">
                                      <img src={ep.thumbnail || movie.backdrop} className="w-full h-full object-cover group-hover:scale-105 transition" alt={ep.title} />
                                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                                          <Play className="w-8 h-8 text-white fill-white" />
                                      </div>
                                  </div>
                                  <div className="flex-1 text-left">
                                      <div className="flex justify-between font-bold mb-1 text-white"><span>{ep.title}</span><span className="text-xs text-gray-400 font-normal">{ep.duration}</span></div>
                                      <p className="text-gray-400 text-xs line-clamp-2">{ep.description}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  )}

                  {activeTab === 'more_like_this' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4">
                          {similarMovies.length > 0 ? similarMovies.map(m => (
                             <div key={`rec-${m.id}`} className="bg-[#2f2f2f] rounded overflow-hidden cursor-pointer hover:bg-[#404040] transition group relative">
                                <div className="relative aspect-video">
                                    <img src={m.backdrop} className="w-full h-full object-cover" alt={m.title} />
                                    <div className="absolute top-2 right-2 font-bold text-[10px] bg-black/60 px-1.5 py-0.5 rounded text-white">{m.duration}</div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
                                        <Play className="w-10 h-10 text-white fill-white bg-black/50 rounded-full p-2" />
                                    </div>
                                </div>
                                <div className="p-3 text-left">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-gray-200 text-sm line-clamp-1">{m.title}</h4>
                                        <button className="text-gray-400 hover:text-white" onClick={(e) => { e.stopPropagation(); onToggleList(m); }}>
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">{m.description}</p>
                                </div>
                             </div>
                          )) : <p className="text-gray-500 p-8 text-center w-full col-span-3">Aucune recommandation disponible.</p>}
                      </div>
                  )}

                  {activeTab === 'details' && (
                      <div className="animate-in fade-in slide-in-from-bottom-4 space-y-8 text-left">
                          <div>
                              <h4 className="text-gray-500 mb-2 font-bold uppercase text-xs">Réalisation & Production</h4>
                              <p className="text-white text-sm">{movie.director || "Information non disponible"}</p>
                          </div>
                          <div>
                              <h4 className="text-gray-500 mb-4 font-bold uppercase text-xs">Casting Complet</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  {movie.cast?.map((c, i) => (
                                      <div key={i} className="flex items-center gap-3 bg-[#222] p-2 rounded">
                                          <img src={c.photo} className="w-10 h-10 rounded-full object-cover" alt={c.name} />
                                          <div className="overflow-hidden">
                                              <p className="text-sm font-bold text-white truncate">{c.name}</p>
                                              <p className="text-xs text-gray-400 truncate">{c.role}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                          <div>
                              <h4 className="text-gray-500 mb-2 font-bold uppercase text-xs">Classification</h4>
                              <div className="flex items-center gap-3">
                                  <span className="border border-white px-2 py-1 font-bold text-sm bg-black/20">{movie.maturityRating}</span>
                                  <span className="text-sm text-gray-400">Recommandé pour ce public</span>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;