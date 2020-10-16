import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import { useSelector, useDispatch } from 'react-redux';
import { aroundActions } from 'store/modules/around';
import { AROUND_NOW} from 'utils/constants';
import useComponentWillMount from 'hooks/useComponentWillMount';
import LatestNewsItem from './LatestNewsItem';
import Preloader from 'components/Common/Preloader';

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
      items: 3,
    },
  },
};

//class LatestNews extends React.Component {
//    render(){
const LatestNews = ()=> {
  const { aroundSuccess, result } = useSelector((state) => state.around);
  const loadingState = useSelector((state) => state.loading);
  const isLoading = loadingState[aroundActions.TYPE];
  const dispatch = useDispatch();

  useComponentWillMount(() => {
    dispatch(aroundActions.request({ TYPE: AROUND_NOW }));
  });

  return !isLoading ? (
    <section id='nowplaying' className='blog-area uk-dark uk-blog uk-section'>
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          {/* <span>현재 상영중 영화 목록</span> */}
          <h2>Now Playing</h2>
          <div className='bar'></div>
        </div>

        <OwlCarousel
          className='blog-slides owl-carousel owl-theme'
          {...options}
        >
          {aroundSuccess
            ? result.map((movie) => <LatestNewsItem key={movie.id} movie={movie} />)
            : null}
        </OwlCarousel>
      </div>
    </section>
  ) : (
    <Preloader />
  );
}

export default LatestNews;
