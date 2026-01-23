import React from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onOpenModal: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onOpenModal }) => {
  return (
    <div 
      className="group relative h-28 min-w-[160px] md:h-36 md:min-w-[240px] cursor-pointer transition-transform duration-200 ease-out md:hover:scale-105"
      onClick={() => onOpenModal(movie)}
    >
      <img
        src={movie.thumbnail || movie.backdrop}
        alt={movie.title}
        className="rounded-sm object-cover w-full h-full"
      />
      
      {/* Title Overlay on Hover */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-sm">
         <p className="text-white text-center font-semibold text-sm p-2">{movie.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;