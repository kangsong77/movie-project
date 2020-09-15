import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailCasts from './DetailCasts';
import DetailPhotos from './DetailPhotos';
import DetailVideos from './DetailVideos';
import DetailSimilars from './DetailSimilars';

import 'assets/css/mystyle.css';

const DetailPage = () => {
  const { result } = useSelector(state => state.detail);
  return (
    <div>
      <section className="page-title-area uk-page-title" style ={ { backgroundImage: "url("+result.backdropPath+")" }}>
            <div className="uk-container">
                <h1>{result.title}</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>영화 상세보기</li>
                </ul>
            </div>
      </section>  
     
      <section className="project-details-area uk-project-details uk-section">
            <div className="uk-container">
                <div className="uk-grid uk-flex project-details">
                    <div className="uk-flex detailposter-image " >
                    {/* <div className="uk-flex uk-width-1-5 " > */}
                        <img src={result.posterPath} alt="포스터" />
                    </div>

                    <div className="item uk-width-1-5">
                        <div className="project-details-info">
                            <h2>{result.title}<span> ({result.releaseYear})</span></h2><br></br>
                           
                            <ul>
                                <li>관람객 평점 : <span> ★ {result.rating}</span></li>
                                <li>개봉 : <span> {result.releaseDate}</span></li>
                                <li>장르 : <span> {result.genres}</span></li>
                                <li>러닝타임 : <span> {result.runtime}</span></li>
                                <li># : <span> {result.tagline}</span></li>
                            </ul>
                            <button className="uk-button uk-button-default">좋아요</button>
                        </div>
                    </div>
                </div>

                <div className="project-details-desc">
                    <div className="uk-section-title section-title">
                        <h3>줄거리</h3>
                        <div className="bar"></div>
                    </div>    
                    <p>{result.overview}</p>
                </div>

            </div>
      </section>
    
      <DetailCasts />
      <DetailPhotos />
      {/* <DetailVideos /> */}
      <DetailSimilars />
    </div>
  );
};

export default DetailPage;