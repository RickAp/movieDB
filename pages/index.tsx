import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import MovieList from '../components/MovieList/MovieList';
import Header from '../components/Header/Header';
import Filters from '../components/Filters/Filters';
import Footer from '../components/Footer/Footer';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface HomePageProps {
  movies: Movie[];
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const apiKey = '4f298a53e552283bee957836a529baec';
  const baseUrl = 'https://api.themoviedb.org/3';
  const { query } = context;
  const filter = query.filter || 'popular';

  let url;
  if (filter === 'upcoming') {
    url = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
  } else if (filter === 'top-rated') {
    url = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;
  } else {
    url = `${baseUrl}/movie/popular?api_key=${apiKey}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      movies: data.results,
    },
  };
};

const HomePage: NextPage<HomePageProps> = ({ movies }) => {

  return (
    <div>
      <Header />
      <h1 className='text-[23px] font-medium ml-20 mt-9 mb-7'>Movie List</h1>
      <div className='flex'>
        <Filters />
        <MovieList movies={movies} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;