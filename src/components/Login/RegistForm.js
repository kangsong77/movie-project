import React from 'react';
//import React, { useState, useRef, useCallback } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { changeInput, insertUser, initUser } from '../../redux/account/actions';

const RegistForm = () => {
  /* const inputE1 = useRef(null);
  const [pwdConfirm, setPwdConfirm] = useState('');

  const user = useSelector((state) => state.Account.user);
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
    dispatch,
  ]);
  const onInsertUser = useCallback(() => dispatch(insertUser()), [dispatch]);
  const onInitUser = useCallback((user) => dispatch(initUser(user)), [
    dispatch,
  ]);

  const onChangePwdConfirm = (e) => {
    setPwdConfirm(e.target.value);
  };

  const onChange = (e) => {
    onChangeInput(e.target);
  };

  const onSubmitHandler = () => {
    if (user.email === '') {
      alert('이메일을 입력해주세요.');
      return false;
    }
    if (user.userPwd.length < 5) {
      alert('비밀번호는 5자이상입니다.');
      user.userPwd = '';
      setPwdConfirm('');
      return false;
    }

    if (user.userPwd !== pwdConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      user.userPwd = '';
      setPwdConfirm('');
      return false;
    }

    onInsertUser();

    debugger;
    console.log('----');

    onInitUser();
  };
 */
  return (
    <section id='register' className='contact-area uk-contact uk-section'>
      <div className='uk-container'>
        <div className='uk-section-title section-title'>
          <span>Complete Themes</span>
          <h2>Sign Up</h2>
        </div>
        {/* 
        <form onSubmit={onSubmitHandler}>
          <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-1@s  uk-flex-center'>
            <div className='uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@s '>
              <div className='item uk-margin'>
                <label>Name *</label>

                <input
                  type='text'
                  className='uk-input'
                  name='userName'
                  value={user.name}
                  placeholder='이름을 입력하세요'
                  onChange={onChange}
                  ref={inputE1}
                />
              </div>

              <div className='item uk-margin'>
                <label>Email *</label>

                <input
                  type='text'
                  className='uk-input'
                  name='email'
                  value={user.email}
                  placeholder='이메일을 입력하세요'
                  onChange={onChange}
                />
              </div>

              <div className='item uk-margin'>
                <label>Password *</label>

                <input
                  type='password'
                  className='uk-input'
                  name='userPwd'
                  value={user.userPwd}
                  placeholder='비밀번호를 입력해주세요'
                  onChange={onChange}
                />
              </div>

              <div className='item uk-margin'>
                <label>Confirm Password *</label>

                <input
                  type='password'
                  className='uk-input'
                  value={pwdConfirm}
                  placeholder='비밀번호를 다시한번 입력하세요'
                  onChange={onChangePwdConfirm}
                />
              </div>

              <div className='item uk-margin'>
                <button
                  type='submit'
                  className='uk-button uk-button-default uk-flex-center'
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </form>
  */}
      </div>
    </section>
  );
};

export default RegistForm;
