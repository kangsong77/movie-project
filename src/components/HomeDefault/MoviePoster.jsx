import React, { useState, useEffect } from 'react';
import Moive from './MovieFunction';
import axios from 'axios';

const MoviePoster = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`
        );
        setMovie(res.data.data.movies);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>데이터를 가져오고 있는 중입니다...</div>;

  if (!movies) {
    return null;
  }

  return (
    <section className='container'>
      <div className='movies'>
        {movies.map((movie) => (
          <Moive //Movie Copmnenet
            key={movie.id} // APU JSON Data Props
            id={movie.id}
            year={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />
        ))}
      </div>
    </section>
  );
};

export default MoviePoster;
