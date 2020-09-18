import React, { useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/account/actions';
import { Redirect } from 'react-router-dom';
//import { Account } from '../../redux/account/reducers';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const LoginForm = () => {
  const inputE1 = useRef(null);

  const isLogin = false; // 일단 막아둠
  const [email, setEmail] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const dispatch = useDispatch();
  const onLogin = useCallback((email, pwd) => dispatch(loginUser(email, pwd)), [
    dispatch,
  ]);

  //컴포넌트가 처음 렌더링 될때만 함수 생성
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    inputE1.current.focus();
  };

  const onChangePassword = (e) => {
    setUserPwd(e.target.value);
  };

  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      try {
        onLogin(email, userPwd);
      } catch (e) {
        alert('e-mail 또는 비밀번호가 틀렸습니다. \n다시 입력해 주세요~');
        setEmail('');
        setUserPwd('');
      }
      console.log('---onSubmitHandler호출');
    },
    [email, userPwd]
  ); //email,pwd가 바뀌었을때만 함수 생성

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
                    <label>Email *</label>

                    <input
                      type='text'
                      className='uk-input'
                      value={email}
                      placeholder='Ex: billg@microsoft.com'
                      onChange={onChangeEmail}
                      ref={inputE1}
                    />
                  </div>

                  <div className='item uk-margin'>
                    <label>Password *</label>
                    <input
                      type='password'
                      className='uk-input'
                      placeholder='Ex: p4ssw0rd'
                      value={userPwd}
                      onChange={onChangePassword}
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
