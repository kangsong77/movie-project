import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';

import { useSelector, useDispatch } from 'react-redux';
import { mymovieActions } from 'store/modules/mymovie';
import { useEffect } from 'react';
import Preloader from 'components/Common/Preloader';
import { AROUND_MYMOVIE } from 'utils/constants';
import MyMovieListItem from './MyMovieListItem';

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    786: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
};

const MyMovieList = () => {
  const { mymovieSuccess, result } = useSelector((state) => state.mymovie);
  const loadingState = useSelector((state) => state.loading);
  const isLoading = loadingState[mymovieActions.TYPE];
  const dispatch = useDispatch();

  // useComponentWillMount(() => {
  //   dispatch(introActions.request());
  // });

  useEffect(() => {
    dispatch(mymovieActions.request({ TYPE: AROUND_MYMOVIE }));
  }, []);

  return !isLoading ? (
    <section id='mymovielist' className='project-area uk-project uk-section'>
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          <h2>MyMovieList</h2>
          <div className='bar'></div>
        </div>

        <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s'>
          {mymovieSuccess
            ? result.map((movie) => (
                <MyMovieListItem key={movie.tm_id} movie={movie} />
              ))
            : null}
        </div>
        {/* 
        <div className='pagination-area'>
          <ul className='uk-pagination uk-flex-center'>
            <li>
              <Link to='#'>
                <span className='flaticon-back'></span>
              </Link>
            </li>
            <li>
              <Link to='#'>1</Link>
            </li>
            <li>
              <Link to='#'>2</Link>
            </li>
            <li className='uk-active'>
              <Link to='#'>3</Link>
            </li>
            <li>
              <Link to='#'>4</Link>
            </li>
            <li>
              <Link to='#'>
                <span className='flaticon-right'></span>
              </Link>
            </li>
          </ul>
        </div>
       */}
      </div>
    </section>
  ) : (
    <Preloader />
  );
};

export default MyMovieList;
