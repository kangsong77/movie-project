import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MovieList from '../MovieList/movie_Main';
import 'assets/css/mystyle.css';
import 'assets/css/flaticon.css';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff4800" },
    secondary: {
      //light: '#0066ff',
      main: '#ffffff',
      // dark: will be calculated from palette.secondary.main,
      //contrastText: '#ffcc00',
    },
  // },
  // typography: {
  //   fontFamily: "Poppins",
  //   fontWeight: 800,
  //   fontSize: '2rem',
  // },


});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));


export default function TabTutorial() {
  // const classes = useStyles();
  const [value, setValue] = useState(0);
  const [weekly, setWeekly] = useState(['20200928', '20201005', '20201012']);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id='weeklyrank' className='blog-area uk-dark uk-section'>
        <div className='uk-container'>
          {/* <div className={classes.root}> */}
          <ThemeProvider theme={theme}>
          
            <AppBar position="static">
            
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="10월 1주" {...a11yProps(0)} />
                <Tab label="10월 2주" {...a11yProps(1)} />
                <Tab label="10월 3주" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            </ThemeProvider>
            <TabPanel value={value} index={0}>
                <h2 >10월 1주차</h2>
                <MovieList>{weekly[0]}</MovieList>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h2 >10월 2주차</h2>
                <MovieList>{weekly[1]}</MovieList>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h2 >10월 3주차</h2>
                <MovieList>{weekly[2]}</MovieList>
            </TabPanel>
            
          </div>
        {/* </div> */}
    </section>      
  );
}
/*
class TabTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      weekly: ['20200928', '20201005', '20201012'],
    };
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    const tempStyle = {
      textAlignVertical: 'center',
      background: 'black',
      paddingLeft: '5px',
    };

    return (
      <section id='weeklyrank' className='uk-dark uk-section'>
        <div className='uk-container'>
          <AppBar position='static'>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              aria-label='simple tabs example'
            >
              <Tab label='10월 1주' {...this.a11yProps(0)} />
              <Tab label='10월 2주' {...this.a11yProps(1)} />
              <Tab label='10월 3주' {...this.a11yProps(2)} />
            </Tabs>
          </AppBar>

          <TabPanel style={{}}>
            
            <TabPanel value={this.state.value} index={0}>
              <h2 >10월 1주차</h2>
            
              <MovieList>{this.state.weekly[0]}</MovieList>
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              <h2>10월 2주차</h2>
              <MovieList>{this.state.weekly[1]}</MovieList>
            </TabPanel>
            <TabPanel value={this.state.value} index={2}>
              <h2> 10월 3주차</h2>
              <MovieList>{this.state.weekly[2]}</MovieList>
            </TabPanel>
          </TabPanel>
        </div>
      </section>
    );
  }
}*/


/*
class TabPanel extends Component {
  render() {
    return (
      <Typography
        component='div'
        hidden={this.props.value !== this.props.index}
      >
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
  }
}*/