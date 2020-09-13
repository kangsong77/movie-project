import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MovieList from '../MovieList/movie_Main';
//import { grey, pink, orange } from '@material-ui/core/colors';
import MoviePoster from './MoviePoster';

class TabTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      weekly: ['20200706', '20200720', '20200727'],
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
      <section id='weeklyrank' className='blog-area uk-dark uk-blog uk-section'>
        <div className='uk-container'>
          <AppBar
            style={{ background: '#567f99' }}
            position='static'
          >
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              aria-label='simple tabs example'
              TabIndicatorProps={{
                style: {
                  background: '#ccccff',
                  height: '60px',
                  top: '0px',
                  opacity: '50%',
                },
              }}
              //  TabIndicatorProps={{style:{background:"#ccccff", height:"2px", top:"45px", opacity: "50%"}}}
            >
              <Tab label='7월 2주' {...this.a11yProps(0)} />
              <Tab label='7월 3주' {...this.a11yProps(1)} />
              <Tab label='7월 4주' {...this.a11yProps(2)} />
            </Tabs>
          </AppBar>

          <TabPanel style={{}}>
            {/*   <TabPanel value={this.state.value} index={0}>
              <h2 style={{ color: 'white' }}>7월 2주차</h2>
              <MovieFunction></MovieFunction>
            </TabPanel> */}
            <TabPanel value={this.state.value} index={0}>
              <h2 style={{ color: 'white' }}>7월 2주차</h2>
              {/* <MoviePoster></MoviePoster> */}
              <MovieList>{this.state.weekly[0]}</MovieList>
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              <h2 style={{ color: 'white' }}>7월 3주차</h2>
              <MovieList>{this.state.weekly[1]}</MovieList>
            </TabPanel>
            <TabPanel value={this.state.value} index={2}>
              <h2 style={{ color: 'white' }}> 7월 4주차</h2>
              <MovieList>{this.state.weekly[2]}</MovieList>
            </TabPanel>
          </TabPanel>
        </div>
      </section>
    );
  }
}
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
}
export default TabTutorial;
