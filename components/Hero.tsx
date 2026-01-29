import React, { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onOpenModal: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onOpenModal }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  // Simuler le démarrage de la vidéo après quelques secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [movie]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleReplay = (e: React.MouseEvent) => {
      e.stopPropagation();
      setVideoEnded(false);
      setShowVideo(false);
      setTimeout(() => setShowVideo(true), 100);
  };

  return (
    // Changed height logic for windowed mode
    <div className="relative aspect-video w-full object-cover group">
      {/* Background Image / Video Container */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {showVideo && movie.trailer_url && !videoEnded ? (
             <iframe 
                src={`${movie.trailer_url}${movie.trailer_url.includes('?') ? '&' : '?'}autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&loop=1&playlist=${movie.id}`}
                className="w-full h-full object-cover scale-125 pointer-events-none"
                allow="autoplay; encrypted-media"
                title="Hero Video"
             />
        ) : (
            <img 
            src={movie.backdrop} 
            alt={movie.title} 
            className="w-full h-full object-cover"
            />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute top-[20%] md:top-[30%] left-4 md:left-12 max-w-xl space-y-2 md:space-y-4 z-10">
        {movie.tagline && (
             <div className="flex items-center gap-2 animate-in slide-in-from-left duration-700">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png" className="w-3 h-6 md:w-4 md:h-8 object-contain" alt="N" />
                <div className="text-gray-200 font-bold uppercase tracking-[0.2em] text-xs md:text-base">
                    {movie.category === 'Série' ? 'SÉRIE' : 'FILM'}
                </div>
             </div>
        )}
        
        <h1 className="text-3xl md:text-6xl font-black text-white drop-shadow-2xl leading-[0.9] tracking-tighter animate-in fade-in zoom-in duration-1000 origin-left">
          {movie.title}
        </h1>
        
        <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-gray-300">
            <span className="text-green-400">98% recommandé</span>
            <span>{movie.year}</span>
            <span className="border border-gray-500 px-1 rounded text-[10px] md:text-xs">{movie.maturityRating}</span>
            <span className="flex items-center gap-1"><span className="bg-red-600 text-white text-[10px] px-1 rounded">Ultra HD 4K</span></span>
            <span className="hidden md:inline">Dolby Vision</span>
        </div>

        <p className="text-white text-sm md:text-base drop-shadow-md line-clamp-3 md:line-clamp-none max-w-lg font-medium text-shadow-sm animate-in slide-in-from-bottom-4 duration-700 delay-200">
          {movie.description}
        </p>

        <div className="flex items-center space-x-3 pt-2 md:pt-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
          <button 
            onClick={() => onOpenModal(movie)}
            className="flex items-center px-4 md:px-8 py-1.5 md:py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition text-sm md:text-xl transform hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 md:w-7 md:h-7 mr-2 fill-black" />
            Lecture
          </button>
          
          <button 
            onClick={() => onOpenModal(movie)}
            className="flex items-center px-4 md:px-8 py-1.5 md:py-3 bg-gray-500/70 text-white font-bold rounded backdrop-blur-md transition text-sm md:text-xl hover:bg-gray-500/50 transform hover:scale-105 active:scale-95"
          >
            <Info className="w-4 h-4 md:w-7 md:h-7 mr-2" />
            Plus d'infos
          </button>
        </div>
      </div>

      {/* Mute / Replay Control - Right Side */}
      <div className="absolute right-0 top-[60%] md:top-[70%] flex items-center gap-3 pr-4 md:pr-12 z-20">
          <button 
            onClick={toggleMute}
            className="border border-white/50 rounded-full p-2 bg-black/30 hover:bg-white/10 text-white transition backdrop-blur-sm"
          >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div className="w-24 h-1 bg-gray-600/50 rounded overflow-hidden hidden md:block">
              <div className="h-full bg-white animate-pulse" style={{width: '60%'}}></div>
          </div>
          <span className="bg-gray-800/60 text-white px-3 py-1 border-l-2 border-white text-xs font-bold uppercase tracking-widest hidden md:block">
              {movie.maturityRating}
          </span>
      </div>
    </div>
  );
};

export default Hero;