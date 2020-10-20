import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import 'assets/css/mystyle.css';
import axios from 'axios';
import { SERVER_URL } from 'utils/constants';

const Regist = () => {
  const refEmail = useRef();
  const refName = useRef();
  const refPwd = useRef();

  const [pwdConfirm, setPwdConfirm] = useState('');
  const [member, setMember] = useState({
    email: '',
    fullname: '',
    password: '',
  });
  const history = useHistory();
  const [fieldErrors, setFieldErrors] = useState({});

  const onChangePwdConfirm = (e) => {
    setPwdConfirm(e.target.value);
  };

  const onChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (member.email === '') {
      alert('이메일을 입력해 주세요.');
      refEmail.current.focus();
      return false;
    }
    if (member.fullname === '') {
      alert('이름을 입력해 주세요.');
      refName.current.focus();
      return false;
    }
    if (member.password.length < 5) {
      alert('비밀번호는 5자이상입니다.');
      member.password = '';
      setPwdConfirm('');
      refPwd.current.focus();
      return false;
    }

    if (member.password !== pwdConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      member.password = '';
      setPwdConfirm('');
      refPwd.current.focus();
      return false;
    }

    const path = 'accounts/signup/';
    const apiUrl = `${SERVER_URL}${path}`;
    const data = {
      email: member.email,
      username: member.fullname,
      password: member.password,
    };
    axios
      .post(apiUrl, data)
      .then((response) => {
        console.log('호출결과:', response.data);
        alert('회원가입 성공');
        history.push('/login');
        // window.location = '/';
      })
      .catch((error) => {
        console.error(error);

        if (error.response) {
          alert('회원가입실패!! 아이디/암호를 확인해 주세요');
        }
      });
  };

  return (
    <section id='register' className='contact-area uk-contact uk-section'>
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          <h2>Sign Up</h2>
        </div>
        <div className='item'>
          <form id='contactForm' onSubmit={onSubmitHandler}>
            <div className='item uk-margin'>
              <label>E-mail *</label>

              <input
                type='text'
                className='uk-input'
                name='email'
                value={member.email}
                placeholder='이메일을 입력해주세요'
                onChange={onChange}
                ref={refEmail}
              />
            </div>
            <div className='item uk-margin'>
              <label>Name *</label>

              <input
                type='text'
                className='uk-input'
                name='fullname'
                value={member.fullname}
                placeholder='이름을 입력해주세요'
                onChange={onChange}
                ref={refName}
              />
            </div>
            <div className='item uk-margin'>
              <label>Password *</label>

              <input
                type='password'
                className='uk-input'
                name='password'
                value={member.password}
                placeholder='비밀번호를 입력해주세요'
                onChange={onChange}
                ref={refPwd}
              />
            </div>
            <div className='item uk-margin'>
              <label>Confirm Password *</label>

              <input
                type='password'
                className='uk-input'
                value={pwdConfirm}
                placeholder='비밀번호를 다시한번 입력해주세요'
                onChange={onChangePwdConfirm}
              />
            </div>
            <div
              className='item uk-margin'
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <button type='submit' className='uk-button'>
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Regist;
