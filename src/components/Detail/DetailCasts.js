import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import { useSelector } from 'react-redux';

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  margin: 15,
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
      items: 5,
    },
  },
};

const DetailCasts = () => {
  const { result } = useSelector((state) => state.detail);

  return (
    <section
      id='team'
      className='project-details-area uk-project-details uk-section'
    >
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          <h3>주요 출연진</h3>
          <div className='bar'></div>
        </div>
      </div>
      <div className='uk-container'>
        <OwlCarousel
          className='team-slides owl-carousel owl-theme'
          {...options}
        >
          {result.casts.map((cast) => (
            <div className='single-team' key={cast.cast_name + cast.cast_role}>
              <img src={cast.cast_image} alt='프로필' />

              <div className='team-content'>
                <h3>{cast.cast_name}</h3>
                <span>{cast.cast_role} 역</span>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default DetailCasts;
