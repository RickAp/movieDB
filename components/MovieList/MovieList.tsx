import React from 'react';
import Link from 'next/link';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mr-20">
      {movies.map((movie: Movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div key={movie.id} className="border border-solid border-[1px] border-gray-300 rounded-[8px] shadow-md">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="h-300 w-150 rounded-tl-lg rounded-tr-lg"/>
            <p className="ml-3 font-medium">{movie.vote_average}</p>
            <h3 className="ml-3 text-black font-medium hover:text-[rgba(1,180,228)] cursor-pointer">{movie.title}</h3>
            <p className="ml-3 text-[rgba(0,0,0,.6)]">{movie.release_date}</p>
          </div>
        </Link>
        
      ))}
    </div>
  );
};

export default MovieList;