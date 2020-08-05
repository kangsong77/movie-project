import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/account/actions';

function LogoutButton({ logout, history }) {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  const handleClick = () => {
    onLogout();
    history.push('/');
  };
  return (
    <button
      onClick={handleClick}
      style={{ textDecoration: 'none', border: 'none' }}
    >
      Logout
    </button>
  );
}

export default withRouter(LogoutButton);
