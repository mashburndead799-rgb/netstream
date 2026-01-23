import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieGridProps {
  title: string;
  movies: Movie[];
  onOpenModal: (movie: Movie) => void;
  emptyMessage?: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ title, movies, onOpenModal, emptyMessage }) => {
  return (
    <div className="px-4 md:px-12 py-8 mt-16 animate-in fade-in duration-500">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
      
      {movies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-y-8">
          {movies.map((movie) => (
            <div key={movie.id} className="w-full h-28 md:h-40 relative">
               <MovieCard movie={movie} onOpenModal={onOpenModal} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-64 text-center">
            <p className="text-gray-400 text-lg mb-4">{emptyMessage || "Aucun titre trouvé."}</p>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;