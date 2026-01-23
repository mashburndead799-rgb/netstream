import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onOpenModal: (movie: Movie) => void;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies, onOpenModal }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // Check scroll position to hide right arrow if at end
  const handleScroll = () => {
      if (rowRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
          setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
          setIsMoved(scrollLeft > 0);
      }
  };

  useEffect(() => {
      const ref = rowRef.current;
      if (ref) {
          ref.addEventListener('scroll', handleScroll);
          // Initial check
          handleScroll();
      }
      return () => {
          if (ref) ref.removeEventListener('scroll', handleScroll);
      };
  }, [movies]);

  return (
    <div className="space-y-0.5 md:space-y-2 px-4 md:px-12 my-6 md:my-10 animate-in fade-in duration-700">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl mb-2 md:mb-4">
        {title}
      </h2>
      
      <div className="group relative md:-ml-2">
        {/* Flèche Gauche */}
        <div 
            className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-full w-12 md:w-16 cursor-pointer opacity-0 transition duration-300 hover:bg-black/50 group-hover:opacity-100 flex items-center justify-center ${!isMoved && 'hidden'}`}
            onClick={() => handleClick('left')}
        >
            <ChevronLeft className="h-8 w-8 md:h-12 md:w-12 text-white transition-transform duration-200 hover:scale-125" />
        </div>

        {/* Conteneur des films */}
        <div 
          ref={rowRef}
          className="flex items-center space-x-2.5 overflow-x-scroll scrollbar-hide md:space-x-3.5 md:p-2 no-scrollbar scroll-smooth"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpenModal={onOpenModal} />
          ))}
        </div>

        {/* Flèche Droite */}
        <div 
            className={`absolute top-0 bottom-0 right-0 z-40 m-auto h-full w-12 md:w-16 cursor-pointer opacity-0 transition duration-300 hover:bg-black/50 group-hover:opacity-100 flex items-center justify-center ${!showRightArrow && 'hidden'}`}
            onClick={() => handleClick('right')}
        >
            <ChevronRight className="h-8 w-8 md:h-12 md:w-12 text-white transition-transform duration-200 hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default MovieRow;