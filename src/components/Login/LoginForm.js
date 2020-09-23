import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/account/actions';
import { Redirect } from 'react-router-dom';
//import { Account } from '../../redux/account/reducers';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const LoginForm = () => {
  const refID = useRef(null);
  const refPWD = useRef(null);
  const [member, setMember] = useState({ username: '', password: '' });
  const location = useLocation();
  const history = useHistory();

  const isLogin = false; // 일단 막아둠

  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: '/' },
  };

  const onMemberChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (member.username.length == 0) {
      alert('아이디를 입력해주세요');
      refID.current.fous();
      return false;
    }
    if (member.password.length == 0) {
      alert('비밀번호를 입력해주세요');
      refPWD.current.fous();
      return false;
    }

    const apiUrl = 'http://localhost:8000/api/get_token/';

    axios
      .post(apiUrl, member)
      .then((response) => {
        console.log('호출결과:', response.data);
        const token = response.data.token;

        let cookies = new Cookies();
        cookies.set('usertoken', token, { path: '/' });
        alert('인증되었습니다.');
        history.push(loginRedirectUrl);
        // window.location = '/';
      })
      .catch((response) => {
        console.error(response);
      });
  };

  //console.log('LoginForm:  location.state ', location.state);
  //const { from } = location.state || { from: { pathname: '/' } };
  const { from } = { from: { pathname: '/' } };
  if (isLogin) return <Redirect to={from} />;

  return (
    <>
      <section id='login' className='contact-area uk-contact uk-section'>
        <div className='uk-container'>
          <div className='uk-section-title section-title'>
            <h2>Sign In</h2>
          </div>

          <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-1@s uk-flex-center'>
            <div className='item'>
              <form id='contactForm'>
                <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-1@s'>
                  <div className='item uk-margin'>
                    <label>ID *</label>

                    <input
                      type='text'
                      name='username'
                      className='uk-input'
                      value={member.username}
                      placeholder='아이디를 입력해 주세요'
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
                      <AnchorLink href='#register' offset={() => 40}>
                        Sign Up(회원가입)
                      </AnchorLink>
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
        </div>
      </section>
    </>
  );
};

export default LoginForm;
