import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';

interface HeroProps {
  movie: Movie;
  onOpenModal: (movie: Movie) => void;
}

const Hero: React.FC<HeroProps> = ({ movie, onOpenModal }) => {
  return (
    <div className="relative h-[56.25vw] max-h-[85vh] w-full object-cover">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src={movie.backdrop} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute top-[30%] md:top-[35%] left-4 md:left-12 max-w-xl space-y-4 md:space-y-6">
        {movie.tagline && (
             <div className="text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2">
                N ° 1 EN FRANCE AUJOURD'HUI
             </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
          {movie.title}
        </h1>
        
        <p className="text-white text-base md:text-lg drop-shadow-md line-clamp-3 md:line-clamp-none max-w-lg">
          {movie.description}
        </p>

        <div className="flex items-center space-x-3 pt-4">
          <button 
            onClick={() => onOpenModal(movie)}
            className="flex items-center px-4 md:px-8 py-2 md:py-3 bg-white text-black font-bold rounded hover:bg-opacity-80 transition md:text-xl"
          >
            <Play className="w-5 h-5 md:w-7 md:h-7 mr-2 fill-black" />
            Lecture
          </button>
          
          <button 
            onClick={() => onOpenModal(movie)}
            className="flex items-center px-4 md:px-8 py-2 md:py-3 bg-white/30 text-white font-bold rounded backdrop-blur-md transition md:text-xl border border-transparent hover:border-white/50 hover:bg-white/40"
          >
            <Info className="w-5 h-5 md:w-7 md:h-7 mr-2" />
            Plus d'infos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;