import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
// import blogOne from '../../assets/images/blog1.jpg';
// import blogTwo from '../../assets/images/blog2.jpg';
// import blogThree from '../../assets/images/blog3.jpg';
// import MoviePoster from './MoviePoster';

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
function LatestNews() {
  return (
    <section id='blog' className='blog-area uk-dark uk-blog uk-section'>
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          <span>Our Company Blog</span>
          <h2>Latest News</h2>
          <div className='bar'></div>

          <Link to='#' className='uk-button uk-button-default'>
            View All
          </Link>
        </div>

        <OwlCarousel
          className='blog-slides owl-carousel owl-theme'
          {...options}
        >
          <div className='single-blog-post'>
            <div className='blog-post-image'>
              <Link to='#'>
                <img
                  src={
                    'https://yts.mx/assets/images/movies/The_Shawshank_Redemption_1994/medium-cover.jpg'
                  }
                  alt='news'
                />
              </Link>
            </div>

            <div className='blog-post-content'>
              <span className='date'>25 April</span>
              <h3>
                <Link to='/blog-details'>
                  The 13 Best Time Tracking Apps of 2019
                </Link>
              </h3>
              <Link to='#' className='read-more'>
                Read More
              </Link>
            </div>
          </div>

          <div className='single-blog-post'>
            <div className='blog-post-image'>
              <Link to='#'>
                <img
                  src={
                    'https://img.yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg'
                  }
                  alt='news'
                />
              </Link>
            </div>

            <div className='blog-post-content'>
              <span className='date'>26 April</span>
              <h3>
                <Link to='/blog-details'>
                  11 Tools to Help You Easily Create Proposals
                </Link>
              </h3>
              <Link to='#' className='read-more'>
                Read More
              </Link>
            </div>
          </div>

          <div className='single-blog-post'>
            <div className='blog-post-image'>
              <Link to='#'>
                <img
                  src={
                    'https://img.yts.mx/assets/images/movies/The_Dark_Knight_2008/medium-cover.jpg'
                  }
                  alt='news'
                />
              </Link>
            </div>

            <div className='blog-post-content'>
              <span className='date'>27 April</span>
              <h3>
                <Link to='/blog-details'>
                  The Outlook for Digital Agencies in 4 Charts
                </Link>
              </h3>
              <Link to='#' className='read-more'>
                Read More
              </Link>
            </div>
          </div>

          <div className='single-blog-post'>
            <div className='blog-post-image'>
              <Link to='#'>
                <img
                  src={
                    'https://img.yts.mx/assets/images/movies/The_Godfather_1972/medium-cover.jpg'
                  }
                  alt='news'
                />
              </Link>
            </div>

            <div className='blog-post-content'>
              <span className='date'>25 April</span>
              <h3>
                <Link to='/blog-details'>
                  The 13 Best Time Tracking Apps of 2019
                </Link>
              </h3>
              <Link to='#' className='read-more'>
                Read More
              </Link>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}

export default LatestNews;
