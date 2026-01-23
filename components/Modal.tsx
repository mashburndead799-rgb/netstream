import React, { useState, useEffect } from 'react';
import { X, Play, Plus, Check, ThumbsUp, ArrowLeft, ChevronDown, MonitorPlay } from 'lucide-react';
import { Movie, Episode } from '../types';

interface ModalProps {
  movie: Movie | null;
  onClose: () => void;
  isInList: boolean;
  onToggleList: (movie: Movie) => void;
  isLiked: boolean;
  onToggleLike: (movie: Movie) => void;
}

const Modal: React.FC<ModalProps> = ({ movie, onClose, isInList, onToggleList, isLiked, onToggleLike }) => {
  const [isWatchMode, setIsWatchMode] = useState(false);
  const [watchType, setWatchType] = useState<'movie' | 'trailer'>('movie'); // Pour savoir si on regarde le film ou le trailer
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);

  // Reset state when opening a new movie
  useEffect(() => {
    if (movie) {
      setIsWatchMode(false);
      setWatchType('movie');
      setSelectedSeasonIndex(0);
      setCurrentEpisode(null);
    }
  }, [movie]);

  if (!movie) return null;

  // --- Fonction intelligente pour convertir les liens en format Embed ---
  const getEmbedUrl = (url: string | undefined, autoplay: boolean = false, mute: boolean = false) => {
    if (!url) return "";
    let embedUrl = url;

    // 1. Gestion YouTube (Format long et court)
    if (url.includes('youtube.com/watch')) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('youtu.be/')) {
        const videoId = url.split('.be/')[1]?.split('?')[0];
        if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    // 2. Gestion Google Drive
    if (url.includes('drive.google.com')) {
        const idMatch = url.match(/id=([^&]+)/) || url.match(/\/d\/([^/]+)/);
        if (idMatch && idMatch[1]) {
            embedUrl = `https://drive.google.com/file/d/${idMatch[1]}/preview`;
        }
    }

    // 3. Construction des paramètres
    const params = [];
    // Pour YouTube, la syntaxe est spécifique
    if (embedUrl.includes('youtube.com')) {
        if (autoplay) params.push('autoplay=1');
        if (mute) params.push('mute=1');
        params.push('controls=0', 'modestbranding=1', 'rel=0', 'showinfo=0', 'iv_load_policy=3');
    } else {
        // Pour les autres lecteurs (Drive, Stream tiers)
        if (autoplay) params.push('autoplay=1');
        // Note: Drive et certains lecteurs ignorent souvent mute via URL
    }

    const separator = embedUrl.includes('?') ? '&' : '?';
    return params.length > 0 ? `${embedUrl}${separator}${params.join('&')}` : embedUrl;
  };

  const handleEnterWatchMode = (episode?: Episode, mode: 'movie' | 'trailer' = 'movie') => {
      if (episode) {
          setCurrentEpisode(episode);
      }
      setWatchType(mode);
      setIsWatchMode(true);
  };

  const handleExitWatchMode = () => {
      setIsWatchMode(false);
      // On garde currentEpisode pour savoir où on en était
  };

  // Is this a series with seasons data?
  const isSeries = movie.seasons && movie.seasons.length > 0;

  // --- Logique de sélection des vidéos ---
  
  // 1. Vidéo à jouer en PLEIN ÉCRAN (Le film, l'épisode ou le trailer si demandé explicitement)
  const playbackUrl = () => {
      if (watchType === 'trailer') return movie.trailer_url || movie.video_url;
      if (currentEpisode) return currentEpisode.video_url;
      return movie.video_url || movie.trailer_url; // Fallback sur trailer si pas de film
  };

  // 2. Vidéo d'ARRIÈRE-PLAN dans le modal (Priorité au Trailer, sinon le film)
  // On ne joue pas les épisodes en background, c'est bizarre.
  const backgroundPreviewUrl = movie.trailer_url || movie.video_url;


  // --- Rendu : Mode Lecture Plein Écran ---
  if (isWatchMode) {
      const urlToPlay = playbackUrl();
      const titleToPlay = watchType === 'trailer' 
        ? `Bande-annonce : ${movie.title}` 
        : (currentEpisode ? `${movie.title} - ${currentEpisode.title}` : movie.title);

      return (
          <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden animate-in fade-in duration-300">
              <button 
                onClick={handleExitWatchMode}
                className="absolute top-6 left-6 z-50 bg-black/50 hover:bg-red-600 text-white p-3 rounded-full transition-all backdrop-blur-sm group"
              >
                  <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="w-full h-full">
                 {urlToPlay ? (
                     <iframe
                        src={getEmbedUrl(urlToPlay, true, false)} // Autoplay ON, Mute OFF
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"
                        allowFullScreen
                        title={titleToPlay}
                     ></iframe>
                 ) : (
                    <div className="flex flex-col items-center justify-center h-full text-white">
                        <p className="text-2xl font-bold mb-2">Vidéo indisponible</p>
                        <p className="text-gray-400">Aucune source vidéo n'a été trouvée pour ce titre.</p>
                        <button onClick={handleExitWatchMode} className="mt-6 px-6 py-2 bg-white text-black rounded font-bold">Retour</button>
                    </div>
                 )}
              </div>
          </div>
      );
  }

  // --- Rendu : Modal Détails ---
  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      {/* Backdrop sombre fixe */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-2 md:p-6 text-center">
        <div 
          className="relative w-full max-w-5xl bg-[#181818] rounded-lg shadow-2xl overflow-hidden transform transition-all text-left animate-in zoom-in-95 duration-200"
          style={{ minHeight: '600px' }}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 rounded-full bg-[#181818]/80 p-2 hover:bg-[#2a2a2a] transition focus:outline-none"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full pt-[56.25%] bg-black group">
            {/* Background Preview Video (Trailer) */}
            {backgroundPreviewUrl ? (
               <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                   <iframe 
                      src={getEmbedUrl(backgroundPreviewUrl, true, true)} // Autoplay ON, Mute ON
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none scale-125" // Scale pour cacher les bords noirs éventuels
                      title="preview"
                      tabIndex={-1}
                   />
                   
                   {/* Bouton Play Central (Lance le film/premier épisode) */}
                   <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                       <button 
                          className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-full p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100"
                       >
                           {/* Ce bouton est visuel, le clic est géré par la div parente ou les boutons en bas */}
                           <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
                       </button>
                   </div>
                   
                   <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent"></div>
               </div>
            ) : (
              <img 
                src={movie.backdrop} 
                alt={movie.title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            )}
          </div>

          <div className="px-6 md:px-12 pb-12 -mt-10 relative z-20">
            <div className="flex flex-col md:flex-row gap-x-10 gap-y-6">
              
              {/* Colonne Gauche : Infos & Actions */}
              <div className="md:w-2/3 space-y-4">
                
                {/* Ajout du Thumbnail au-dessus du titre */}
                <div className="mb-2">
                   <img 
                      src={movie.thumbnail} 
                      alt={movie.title} 
                      className="h-24 md:h-40 w-auto object-cover rounded shadow-lg border border-white/10" 
                   />
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{movie.title}</h3>
                
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 font-medium">
                  <span className="text-green-500 font-bold">{Number(movie.rating) * 20}% Recommandé</span>
                  <span>{movie.year}</span>
                  <span className="border border-gray-500 px-1.5 py-0.5 rounded text-xs text-gray-200">{movie.maturityRating}</span>
                  <span>{movie.duration}</span>
                  <span className="border border-white/40 px-1.5 py-0.5 rounded text-[10px] text-white/80">HD</span>
                </div>

                {/* Barre de Contrôles Principale */}
                <div className="flex flex-wrap gap-3 py-4">
                    <button 
                      onClick={() => handleEnterWatchMode(isSeries && !currentEpisode ? movie.seasons![0].episodes[0] : undefined, 'movie')}
                      className="flex items-center justify-center px-8 py-2.5 bg-white text-black font-bold rounded hover:bg-gray-200 transition text-lg gap-2"
                    >
                        <Play className="w-6 h-6 fill-black" />
                        Lecture
                    </button>

                    {/* Bouton Bande-annonce (Si dispo et différent du film) */}
                    {movie.trailer_url && movie.trailer_url !== movie.video_url && (
                      <button 
                          onClick={() => handleEnterWatchMode(undefined, 'trailer')}
                          className="flex items-center justify-center px-6 py-2.5 bg-gray-600/60 text-white font-bold rounded hover:bg-gray-600/80 transition gap-2"
                      >
                          <MonitorPlay className="w-5 h-5" />
                          Bande-annonce
                      </button>
                    )}

                    <div className="flex gap-3 ml-auto md:ml-0">
                        <button 
                          onClick={() => onToggleList(movie)}
                          className="p-2.5 border-2 border-gray-500 rounded-full hover:border-white bg-[#2a2a2a]/60 hover:bg-[#2a2a2a] transition tooltip group relative"
                        >
                            {isInList ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <Plus className="w-5 h-5 text-white" />
                            )}
                             <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-200 text-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                                  {isInList ? "Retirer de ma liste" : "Ajouter à ma liste"}
                             </span>
                        </button>

                        <button 
                           onClick={() => onToggleLike(movie)}
                           className={`p-2.5 border-2 rounded-full hover:border-white bg-[#2a2a2a]/60 hover:bg-[#2a2a2a] transition group relative ${isLiked ? 'border-white' : 'border-gray-500'}`}
                        >
                            <ThumbsUp className={`w-5 h-5 ${isLiked ? 'text-white fill-white' : 'text-white'}`} />
                             <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-200 text-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
                                  {isLiked ? "Je n'aime plus" : "J'aime"}
                             </span>
                        </button>
                    </div>
                </div>

                <p className="text-white text-base leading-relaxed font-light text-gray-300">
                  {movie.description}
                </p>
              </div>

              {/* Colonne Droite : Métadonnées */}
              <div className="md:w-1/3 text-sm space-y-5 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 font-semibold">Distribution :</span>
                  <div className="flex flex-wrap gap-1">
                      {movie.cast ? movie.cast.slice(0, 4).map((c, i) => (
                          <span key={i} className="text-gray-200 hover:underline cursor-pointer text-xs leading-5">
                              {c.name}{i < (movie.cast?.length && i < 3 ? movie.cast.length - 1 : 2) ? "," : ""}
                          </span>
                      )) : <span className="text-gray-400">Non disponible</span>}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500 font-semibold">Genres :</span>
                  <div className="flex flex-wrap gap-1">
                      {movie.genre.map((g, i) => (
                          <span key={i} className="text-gray-200 hover:underline cursor-pointer text-xs">
                              {g}{i < movie.genre.length - 1 ? "," : ""}
                          </span>
                      ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                   <span className="text-gray-500 font-semibold">Mots-clés :</span>
                   <p className="text-xs text-gray-300 italic">{movie.tagline || movie.title}</p>
                </div>
              </div>
            </div>

            {/* Section Épisodes (Seulement si c'est une série) */}
            {isSeries && movie.seasons && (
              <div className="mt-10">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">Épisodes</h3>
                      <div className="relative">
                          <select 
                              value={selectedSeasonIndex}
                              onChange={(e) => setSelectedSeasonIndex(Number(e.target.value))}
                              className="appearance-none bg-[#242424] border border-gray-700 text-white py-1.5 pl-4 pr-10 rounded font-bold cursor-pointer focus:outline-none hover:bg-[#333] text-sm"
                          >
                              {movie.seasons.map((season, idx) => (
                                  <option key={idx} value={idx}>
                                      {season.title || `Saison ${season.seasonNumber}`}
                                  </option>
                              ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
                      </div>
                  </div>

                  <div className="space-y-1">
                      {movie.seasons[selectedSeasonIndex].episodes.map((episode, idx) => (
                          <div 
                              key={episode.id} 
                              className="group flex flex-col md:flex-row items-center gap-4 p-4 hover:bg-[#333] rounded transition cursor-pointer border border-transparent hover:border-gray-700"
                              onClick={() => handleEnterWatchMode(episode, 'movie')}
                          >
                              <div className="text-gray-400 font-bold text-xl md:w-6 text-center">{idx + 1}</div>
                              <div className="relative w-full md:w-32 aspect-video flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                                  <img 
                                      src={episode.thumbnail || movie.backdrop} 
                                      alt={episode.title} 
                                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                      <Play className="w-8 h-8 fill-white text-white drop-shadow-lg" />
                                  </div>
                                  {/* Progress bar simulée */}
                                  <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-1/3 transition-all duration-1000"></div>
                              </div>
                              <div className="flex-1 min-w-0">
                                  <div className="flex justify-between items-start mb-1">
                                      <h4 className="text-white font-bold text-sm md:text-base truncate pr-2">{episode.title}</h4>
                                      <span className="text-gray-400 text-xs whitespace-nowrap">{episode.duration}</span>
                                  </div>
                                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{episode.description}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
            )}
            
            {/* Section Cast Grid (Plus bas) */}
            {movie.cast && (
              <div className="pt-10 mt-6 border-t border-gray-800">
                  <h4 className="text-xl font-bold text-white mb-5">Distribution principale</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {movie.cast.map((actor, idx) => (
                          <div key={idx} className="bg-[#1a1a1a] rounded p-2 flex flex-col hover:bg-[#252525] transition cursor-pointer group/actor">
                              <div className="w-full aspect-[3/4] mb-2 overflow-hidden rounded">
                                  <img 
                                      src={actor.photo || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} 
                                      alt={actor.name} 
                                      className="w-full h-full object-cover group-hover/actor:scale-105 transition duration-500 saturate-50 group-hover/actor:saturate-100" 
                                  />
                              </div>
                              <p className="font-bold text-sm text-gray-200 mb-0.5 truncate">{actor.name}</p>
                              <p className="text-xs text-gray-500 truncate">{actor.role}</p>
                          </div>
                      ))}
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;