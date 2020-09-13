import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import { useSelector, useDispatch } from 'react-redux';
import { introActions } from 'store/modules/intro';
// import Loader from '../../components/Loader/Loader';
import useComponentWillMount from 'hooks/useComponentWillMount';
import Preloader from '../../components/Common/Preloader';

  
function HomeIntro() {
  const { result } = useSelector(state => state.intro);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[introActions.TYPE];
  const dispatch = useDispatch();

  useComponentWillMount(() => {
    dispatch(introActions.request());
  });
  

    return !isLoading ? (
        <div id='home' className='uk-banner uk-dark main-banner banner-with-form'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='uk-container'>
                <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                  <div className="item">
                      <div className='main-banner-content'>
                        <h3>
                          오늘의 추천 영화 
                        </h3>
                        <h1>{result.title}</h1>
                        <p>
                          {result.overview}
                        </p>
                        <Link to='#' className='uk-button uk-button-default'>
                          자세히 보기
                        </Link>
                      </div>
                  </div>   
                  <div className="item">   
                    <div className="main-banner-content">
                          <Link to='#'>
                            <img src={result.backdropPath} alt={result.title} />
                          </Link>
                    </div>  
                  </div>            
                </div>
              </div>
            </div>
          </div>
        </div>
    ): (<Preloader />);
}

export default HomeIntro;
