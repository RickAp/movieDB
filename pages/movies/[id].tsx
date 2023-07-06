import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
}

const MovieDetailsPage: React.FC = () => {
  const router = useRouter();
  const apiKey = '4f298a53e552283bee957836a529baec';
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Header />
        <div className='bg-black mt-10'>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full max-w-md mx-auto bg-black"
                style={{ opacity: 0.5 }}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className='flex mr-[800px] mt-[100px] ml-[100px]'>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className='w-[300px] h-[450px] rounded-[10px]'
                    />
                    <h3 className="text-white font-[900] ml-10 text-[40px]">{movie.title}</h3>
                    <p className='text-white absolute top-[370px] ml-[340px] mr-[150px]'>{movie.overview}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default MovieDetailsPage;