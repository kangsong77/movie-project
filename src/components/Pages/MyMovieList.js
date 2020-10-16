import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';

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
 
const MyMovieList = ()=> {
  return (
    <section id="mymovielist" className="project-area uk-project uk-section">
        <div className="uk-container">
            <div className='uk-section-title section-title'>
              <h2>MyMovieList</h2>
              <div className='bar'></div>
            </div>
            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                <div className="single-project">
                    <Link to="#" className="project-img">
                        <img src={require("../../assets/images/project1.jpg")} alt="project" />
                    </Link>

                    <div className="project-content">
                        <h3><Link to="#">Development</Link></h3>
                        <ul>
                            <li><Link to="#">자세히보기</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="single-project">
                    <Link to="#" className="project-img">
                        <img src={require("../../assets/images/project2.jpg")} alt="project" />
                    </Link>

                    <div className="project-content">
                        <h3><Link to="#">Architecture</Link></h3>
                        <ul>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Bridge</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="single-project">
                    <Link to="#" className="project-img">
                        <img src={require("../../assets/images/project3.jpg")} alt="project" />
                    </Link>

                    <div className="project-content">
                        <h3><Link to="#">UX/UI Design</Link></h3>
                        <ul>
                            <li><Link to="#">Web</Link></li>
                            <li><Link to="#">Mobile</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="single-project">
                    <Link to="#" className="project-img">
                        <img src={require("../../assets/images/project1.jpg")} alt="project" />
                    </Link>

                    <div className="project-content">
                        <h3><Link to="#">Development</Link></h3>
                        <ul>
                            <li><Link to="#">Web</Link></li>
                            <li><Link to="#">Mobile</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="single-project">
                    <Link to="#" className="project-img">
                        <img src={require("../../assets/images/project3.jpg")} alt="project" />
                    </Link>

                    <div className="project-content">
                        <h3><Link to="#">UX/UI Design</Link></h3>
                        <ul>
                            <li><Link to="#">Web</Link></li>
                            <li><Link to="#">Mobile</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="single-project">
                    <Link to="#" className="project-img">
                        <img src={require("../../assets/images/project2.jpg")} alt="project" />
                    </Link>

                    <div className="project-content">
                        <h3><Link to="#">Architecture</Link></h3>
                        <ul>
                            <li><Link to="#">Home</Link></li>
                            <li><Link to="#">Bridge</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pagination-area">
                <ul className="uk-pagination uk-flex-center">
                    <li><Link to="#"><span className="flaticon-back"></span></Link></li>
                    <li><Link to="#">1</Link></li>
                    <li><Link to="#">2</Link></li>
                    <li className="uk-active"><Link to="#">3</Link></li>
                    <li><Link to="#">4</Link></li>
                    <li><Link to="#"><span className="flaticon-right"></span></Link></li>
                </ul>
            </div>
        </div>
    </section>
);
    }
 
export default MyMovieList;