import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import 'assets/css/mystyle.css';

const LatestNewsItem = ({ movie }) => {
  return (
    <div className='single-blog-post'>
      <div className='blog-post-image'>
        <Link to={`/detail/${movie.id}`}>
          <img src={movie.backdropPath} alt={movie.title} />
        </Link>
      </div>

      <div className='blog-post-content'>
        <span className='date'>{movie.date}</span>
        <StarRatings
          className='uk-input'
          rating={movie.rating / 2}
          starRatedColor='#ff4800'
          numberOfStars={5}
          starDimension='25px'
          starSpacing='2px'
        />
        <h3>
          <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
        </h3>
        <Link to={`/detail/${movie.id}`}  className='read-more'>
          상세 보기
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsItem;
