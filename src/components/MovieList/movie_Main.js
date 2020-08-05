import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import MovieItem from './movieItem';

const MovieList = (rankDate) => {
  const [value, setvalue] = useState('');
  const [date, setDate] = useState('');
  const [movies, setMovie] = useState(null);
  const focus = useRef(null);

  const onChange = useCallback((e) => {
    setvalue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const num = parseInt(value);
      if (!value || !num || value.length !== 8) return;

      setDate(value);
      setvalue('');
      focus.current.focus();
    },
    [value]
  );
  //console.log(date1)

  useEffect(() => {
    const query = rankDate.children;
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=013b5800501fbc9d95e5f9d0629987d4&targetDt=${query}`
      )
      .then((res) => setMovie(res.data.boxOfficeResult.dailyBoxOfficeList))
      .catch((e) => console.log(e));
  }, [date]);

  if (!movies) {
    return null;
  }
  //  console.log(movies[0].rank)
  return (
    <div>
      <div className='fdiv' style={{ color: 'white' }}>
        영화순위
      </div>
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
