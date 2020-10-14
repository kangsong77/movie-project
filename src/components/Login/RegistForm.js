import React, { useState, useRef } from 'react';
import {useHistory} from 'react-router-dom';
import 'assets/css/mystyle.css';
import axios from 'axios';
import {SERVER_URL} from 'utils/constants';

const RegistForm = () => {
  const refID = useRef();
  const refPwd = useRef();
  const [pwdConfirm, setPwdConfirm] = useState('');
  const [member, setMember] = useState({ userID: '', userPwd: '' });

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

    if (member.userID === '') {
      alert('ID를 입력해 주세요.');
      refID.current.focus();
      return false;
    }
    if (member.userPwd.length < 5) {
      alert('비밀번호는 5자이상입니다.');
      member.userPwd = '';
      setPwdConfirm('');
      refPwd.current.focus();
      return false;
    }

    if (member.userPwd !== pwdConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      member.userPwd = '';
      setPwdConfirm('');
      refPwd.current.focus();
      return false;
    }

    // async function fn() {
    //   setFieldErrors({});
    //   const data = {username:member.userID, password:member.userPwd};
    //   //'http://localhost:8000/api/get_token/';
    //   const path = 'accounts/get_token/';
    //   const apiUrl = `${SERVER_URL}${path}` ;
    //   try {

    //     const response = await axiosInstance.post()
    //   } catch (error) {

    //   }
    // }
    // fn();

    const path = 'accounts/signup/';
    const apiUrl = `${SERVER_URL}${path}` ;
    const data = {username:member.userID, password:member.userPwd};
    axios
      .post(apiUrl, data)
      .then((response) => {
        alert('회원가입 성공\n 로그인페이지로 이동합니다.');
        history.push('/login');
        // window.location = '/';
      })
      .catch((error) => {
        console.error(error);
        if(error.response){
          alert('회원가입실패!! 아이디/암호를 확인해 주세요');
        }
      });

  };
 
  return (
    <section id='register' className='contact-area uk-contact uk-section uk-child-width-1-3'>
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          <h2>Sign Up</h2>
        </div>
       
        <form onSubmit={onSubmitHandler}>
        <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-1@s uk-flex-center'>
           

              <div className='item '>
                <label>ID *</label>

                <input
                  type='text'
                  className='uk-input'
                  name='userID'
                  value={member.userID}
                  placeholder='ID를 입력해주세요'
                  onChange={onChange}
                  ref={refID}
                />
              </div>

              <div className='item uk-margin'>
                <label>Password *</label>

                <input
                  type='password'
                  className='uk-input'
                  name='userPwd'
                  value={member.userPwd}
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

              <div className='item' >
                <button
                  type='submit'
                  className='uk-button uk-button-default uk-flex-center'
                >
                  Create Account
                </button>
              </div>
            </div>
        </form>
 
      </div>
    </section>
  );
};

export default RegistForm;
