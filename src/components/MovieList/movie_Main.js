import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import MovieItem from './movieItem';

const MovieList = (rankDate) => {
  //const [value, setvalue] = useState('');
  const [date, setDate] = useState(rankDate.children);
  const [movies, setMovie] = useState(null);
  //const focus = useRef(null);

  const [loading, setLoading] = useState(false);

  //안쓰는 함수라 막아둠
  /* const onChange = useCallback((e) => {
    setvalue(e.target.value);
  }, []);
  //안쓰는 함수라 막아둠
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
  ); */
  //console.log(date1)

  // 아래 함수로 대체
  /*  useEffect(() => {
    const query = rankDate.children;
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=013b5800501fbc9d95e5f9d0629987d4&targetDt=${query}`
      )
      .then((res) => setMovie(res.data.boxOfficeResult.dailyBoxOfficeList))
      .catch((e) => console.log(e));
  }, [date]); */

  // async await 로 비동기 data 입력. useEffect내에서 한번더 함수로 감싸줘야함
  useEffect(() => {
    //kobis에서는 이미지를 어떻게 얻어올지 생각해봐야함..
    // http://kobis.or.kr/kobis/business/mast/mvie/searchMovieList.do?dtTp=movie&dtCd=20192522
    // http://kobis.or.kr/common/mast/movie/2020/07/9a2bf0ae565d4ad386e84bcbef4217a8.jpg
    // http://kobis.or.kr/kobis/business/mast/mvie/popupImg.do?imgURL=/common/mast/movie/2020/07/9a2bf0ae565d4ad386e84bcbef4217a8.jpg
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=013b5800501fbc9d95e5f9d0629987d4&targetDt=${date}`
        );
        setMovie(res.data.boxOfficeResult.dailyBoxOfficeList);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [date]);

  if (loading) return <div>대기중...</div>;

  if (!movies) {
    return null;
  }

  //movie값이 유효할때만 렌더링
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
