import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

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
          items: 1
      },
      576: {
          items: 2
      },
      786: {
          items: 2
      },
      1200: {
          items: 4
      }
  }
}

const DetailSimilars = () => {
  const { result } = useSelector(state => state.detail);

  return (
    <section id="team" className="project-details-area uk-project-details uk-section">
      <div className="uk-container">
          <div className="uk-section-title section-title">
              <h3>이런 영화는 어때요? </h3>
              <div className="bar"></div>
          </div>
      </div>
      <div className="uk-container">
      <OwlCarousel 
                    className="project-slides owl-carousel owl-theme"
                    {...options}
                >
                    { result.similars && result.similars.map(similar=>(
                        <div className="single-project" key={similar.id}>
                            <Link to={`/detail/${similar.id}`} className="project-img">
                              <img src={similar.posterPath} alt="Project" />
                              <h4>{similar.title}</h4>
                            </Link>
                        </div>
                     ))}
        
      </OwlCarousel>
      </div>
  </section>

  );
};

export default DetailSimilars;