import React, { useState } from 'react';
import { Movie } from '../types';
import { Play, Plus, ThumbsUp, Check, ChevronDown } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onOpenModal: (movie: Movie) => void;
  progress?: number; // 0 à 100
  isCompact?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onOpenModal, progress, isCompact = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calcul d'un "Match Score" aléatoire mais constant basé sur l'ID pour le réalisme
  const matchScore = React.useMemo(() => {
    const base = 80;
    const variant = parseInt(movie.id.replace(/\D/g, '') || '0') % 20;
    return base + variant;
  }, [movie.id]);

  const isNew = movie.year >= 2024;

  return (
    <div 
      className={`group relative transition-all duration-300 ease-in-out z-10 ${isCompact ? 'h-24 min-w-[140px]' : 'h-28 min-w-[160px] md:h-36 md:min-w-[240px]'} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(movie)}
    >
      {/* Image statique */}
      <img
        src={movie.thumbnail || movie.backdrop}
        alt={movie.title}
        className={`rounded-md object-cover w-full h-full transition-all duration-300 ${isHovered ? 'rounded-b-none delay-300' : ''}`}
        loading="lazy"
      />

      {/* Barre de progression si entamé */}
      {progress !== undefined && progress > 0 && progress < 100 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-md overflow-hidden z-20">
          <div 
            className="h-full bg-red-600" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Badge NOUVEAU */}
      {isNew && !progress && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm shadow-md">
          NOUVEAU
        </div>
      )}

      {/* Mini-Modal au survol (Simulation Netflix) */}
      <div 
        className={`absolute top-0 left-0 w-full bg-[#181818] shadow-xl rounded-md overflow-hidden transition-all duration-300 ease-in-out origin-center scale-100 opacity-0 pointer-events-none group-hover:scale-125 group-hover:opacity-100 group-hover:z-50 group-hover:pointer-events-auto group-hover:-translate-y-6 delay-300`}
        style={{ height: 'auto', minHeight: '100%' }}
      >
        <div className="relative aspect-video w-full">
           <img
            src={movie.backdrop || movie.thumbnail}
            alt={movie.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#181818] to-transparent"></div>
        </div>

        <div className="p-3 space-y-2">
           <div className="flex items-center justify-between">
              <div className="flex gap-2">
                 <button className="bg-white rounded-full p-1 hover:bg-gray-200 transition">
                    <Play className="w-3 h-3 fill-black text-black" />
                 </button>
                 <button className="border border-gray-500 rounded-full p-1 hover:border-white hover:bg-white/10 transition text-gray-300 hover:text-white">
                    <Plus className="w-3 h-3" />
                 </button>
                 <button className="border border-gray-500 rounded-full p-1 hover:border-white hover:bg-white/10 transition text-gray-300 hover:text-white">
                    <ThumbsUp className="w-3 h-3" />
                 </button>
              </div>
              <button className="border border-gray-500 rounded-full p-1 hover:border-white hover:bg-white/10 transition ml-auto text-gray-300 hover:text-white">
                  <ChevronDown className="w-3 h-3" />
              </button>
           </div>

           <div className="space-y-1">
              <div className="flex items-center gap-2">
                 <span className="text-green-500 text-[10px] font-bold">{matchScore}% recommandé</span>
                 <span className="border border-gray-500 text-[9px] px-1 text-gray-400 rounded-sm">{movie.maturityRating}</span>
                 <span className="text-[10px] text-gray-400">{movie.duration}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 text-[9px] text-gray-400">
                 {movie.genre.slice(0, 3).map((g, i) => (
                    <span key={i} className="after:content-['•'] after:mx-1 last:after:content-['']">{g}</span>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;