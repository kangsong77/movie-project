import React from 'react';

const MovieItem = ({ movie }) => {
  const { rank, audiAcc, movieNm } = movie;

  return (
    <div>
      <div style={{ color: 'white' }} className='rank'>
        {rank}위 {movieNm} 누적관객:{audiAcc}
      </div>
    </div>
  );
};

export default MovieItem;
