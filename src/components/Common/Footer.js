import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import footerShapeOne from '../../assets/images/footer-shape1.png';
import footerShapeTwo from '../../assets/images/footer-shape2.png';
import GoTop from './GoTop';

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer-area uk-dark uk-footer'>
        <div className='uk-container'>
          <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s'>
            <div className='item'>
              <div className='single-footer-widget'>
                <div className='logo'>
                  <Link to='index.html'>
                    <img src={logo} alt='logo' />
                  </Link>
                </div>

                <p>
                  THE MOVIE DB API의 인기영화, 현재상중 영화, 출연진 정보, 포스등등의 영화 상제정보를 DJango를 이용하여 
                  DB를 구축하고 이를 클라이언트 화면인 리액트 웹사이트를 통하여 정보를 제공해 주고있습니다. 
                </p>
              </div>
            </div>

            <div className='item'>
              <div className='single-footer-widget'>
                <h3>Contact</h3>
                <div className='bar'></div>

                <ul className='contact-info'>
                  <li>
                    <Link to='#'>서울특별시 금천구 독산로50길23 남부여성발전센터</Link>
                  </li>
                  <li>
                    <Link to='#'>클라우드 웹개발팀 담당자: kangsong77@gmail.com</Link>
                  </li>
                  <li>
                    <Link to='#'>전화+82 010 2248 0000</Link>
                  </li>
                  <li>
                    <Link to='#'>팩스: 02 891 4017</Link>
                  </li>
                </ul>
                <ul className='social'>
                  <li>
                    <Link to='#'>
                      <i className='flaticon-logo'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='flaticon-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='flaticon-linkedin'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <i className='flaticon-logo-1'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s'>
              <div className='item'>
                <p>© ksong. All Rights Reserved, 2020</p>
              </div>

              <div className='item'>
                <ul>
                  <li>
                    <Link to='#'>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to='#'>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <GoTop scrollStepInPx='50' delayInMs='16.66' />
          </div>
        </div>

        <div className='br-line'></div>
        <div className='footer-shape1'>
          <img src={footerShapeOne} alt='shape' />
        </div>
        <div className='footer-shape2'>
          <img src={footerShapeTwo} alt='shape' />
        </div>
      </footer>
    );
  }
}

export default Footer;
