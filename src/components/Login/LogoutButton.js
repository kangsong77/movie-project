import React from 'react';
import { withRouter , useHistory} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logoutUser } from '../../redux/account/actions';
import { setCookieExpire } from 'utils/authUtils';

import { Button } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff0000" },
  },
});

function LogoutButton() {
  // const dispatch = useDispatch();
  // const onLogout = useCallback(() => dispatch(logoutUser()), [dispatch]);
  const history = useHistory();
  const handleClick = () => {
    // onLogout();
    setCookieExpire();
    // history.push('/');
    window.location = '/';
  };
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={handleClick}
        variant="outlined" 
        color="primary"
      >
        Logout
      </Button>
    </ThemeProvider>
  );
}

export default withRouter(LogoutButton);
