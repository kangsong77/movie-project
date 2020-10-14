import React from 'react';
import { withRouter } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logoutUser } from '../../redux/account/actions';

import { Button } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff0000" },
  },
});

function LoginButton({ history }) {
  // const dispatch = useDispatch();
  // const onLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  const handleClick = () => {
    // onLogout();
    history.push('/login');
    
  };
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={handleClick}
        variant="outlined" 
        color="primary"
      >
        Login
      </Button>
    </ThemeProvider>
  );
}

export default withRouter(LoginButton);
