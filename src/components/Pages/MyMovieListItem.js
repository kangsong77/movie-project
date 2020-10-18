import React from 'react';
import { Link } from 'react-router-dom';

const MyMovieListItem = ({ movie }) => {
  return (
    <div className='single-project'>
      <Link to={`/detail/${movie.tm_id}`} className='project-img'>
        <img src={movie.backdrop_path} alt='project' />
      </Link>

      <div className='project-content'>
        <h3>
          <Link to='#'>{movie.title}</Link>
        </h3>
        <ul>
          <li>
            <Link to={`/detail/${movie.tm_id}`}>자세히보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyMovieListItem;
