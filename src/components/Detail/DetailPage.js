import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
                    <div className="project-details-img uk-width-expand">
                        <img src={result.posterPath} alt="포스터" />
                    </div>

                    <div className="item uk-width-1-5">
                        <div className="project-details-info">
                            <ul>
                                <li><span>Customer Name:</span> Steven John</li>
                                <li><span>Category:</span> Art & Design</li>
                                <li><span>Date:</span> 04/11/2019</li>
                                <li><span>Status:</span> In Process</li>
                                <li><span>Demo Link:</span> <Link to="#">www.gunter.com</Link></li>
                                <li><span>Tags:</span> <Link to="#">Art</Link>, <Link to="#">Design</Link></li>
                                <li>
                                    <span>Share:</span>
                                    
                                    <ul>
                                        <li><Link to="#"><i className="flaticon-logo"></i></Link></li>
                                        <li><Link to="#"><i className="flaticon-twitter"></i></Link></li>
                                        <li><Link to="#"><i className="flaticon-logo-1"></i></Link></li>
                                        <li><Link to="#"><i className="flaticon-linkedin"></i></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
          </section>

    </div>
  );
};

export default DetailPage;