import React from 'react';
import Moive from './MovieFunction';
import axios from "axios";

class ReactMovie extends React.Component{
    state = {
      isLoading: true, // Loading Swich
      movies: [] // Movies Data
    };
    
    getMovies = async () => { // wait untill get API Data
        const {
          data: {
            data: {movies}
          }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

        console.log(movies);
        this.setState({movies, isLoading: false}); // isLoading State False Change
      };
      
      componentDidMount(){  // when render after on Func
        this.getMovies();
      };

    render() {
      const { isLoading, movies } = this.state; // state in const
      return (
      <section className="container">{isLoading ? ( // if True Loading, False Movies Data using Map 
         <div className="loader">
           <span className="loader_text">Loading....</span>  
           </div> 
           ): (
             <div className="movies">
               {movies.map(movie => (  
         <Moive  //Movie Copmnenet 
          key={movie.id} // APU JSON Data Props
          id={movie.id}
          year={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          />
          ))}
          </div>
           )}
           </section>
      );
    }};

    export default ReactMovie;