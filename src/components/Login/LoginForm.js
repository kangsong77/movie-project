import React, { useState, useRef } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import 'assets/css/mystyle.css';
import { SERVER_URL } from 'utils/constants';
import { isUserAuthenticated } from 'utils/authUtils';
import useLocalStorage from 'utils/useLocalStorage';

const LoginForm = () => {
  const refID = useRef();
  const refPWD = useRef();
  const [member, setMember] = useState({ email: '', password: '' });
  const location = useLocation();
  const history = useHistory();
  const [jwtToekn, setjwtToken] = useLocalStorage('usertoken', '');
  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: '/' },
  };

  const onMemberChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (member.email.length == 0) {
      alert('이메일을 입력해주세요');
      refID.current.focus();
      return false;
    }
    if (member.password.length == 0) {
      alert('비밀번호를 입력해주세요');
      refPWD.current.focus();
      return false;
    }
    //'http://localhost:8000/api/get_token/';
    // const path = 'api/get_token/';
    const path = 'accounts/login/';
    const apiUrl = `${SERVER_URL}${path}`;

    axios
      .post(apiUrl, member)
      .then((response) => {
        console.log('호출결과:', response.data);
        const token = response.data.token;
        setjwtToken(token);
        // let cookies = new Cookies();
        // cookies.set('usertoken', token, { path: '/' });
        alert('인증되었습니다.');
        // history.push(loginRedirectUrl);
        // 메뉴 리로딩을 위해 일단 Home 위치로 가기
        window.location = '/';
        // return <Redirect to={loginRedirectUrl} />
      })
      .catch((response) => {
        console.error(response);
      });
  };

  // if (isUserAuthenticated()) return <Redirect to={loginRedirectUrl} />

  return (
    <section id='login' className='contact-area uk-contact uk-section'>
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          <h2>Sign In</h2>
        </div>

        <div className='item'>
          <form id='contactForm'>
            <div className='uk-grid uk-grid-match uk-grid-small uk-child-width-1-1@s'>
              <div className='item uk-margin'>
                <label>E-mail *</label>

                <input
                  type='text'
                  name='email'
                  className='uk-input'
                  value={member.email}
                  placeholder='이메일을 입력해 주세요'
                  onChange={onMemberChange}
                  ref={refID}
                />
              </div>

              <div className='item uk-margin'>
                <label>Password *</label>
                <input
                  type='password'
                  name='password'
                  className='uk-input'
                  placeholder='비밀번호를 입력해 주세요'
                  value={member.password}
                  onChange={onMemberChange}
                  ref={refPWD}
                />
              </div>
            </div>
            <div className='uk-grid uk-grid-match uk-grid-small uk-child-width-1-2@s '>
              <div className='item uk-margin'>
                <span className=' uk-button-link uk-text-justify'>
                  <Link to='/Regist'>Sign Up(회원가입)</Link>
                </span>
              </div>
              <div className='item uk-margin'>
                <button
                  type='submit'
                  className='uk-button uk-button-default'
                  onClick={onSubmitHandler}
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
