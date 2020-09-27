import { AROUND_INTRO, aroundQueries } from 'utils/constants';
import getData from 'utils/getData';

export default async function introAPI() {
  const randomMovie = {};
  const movieList = await getData(aroundQueries[AROUND_INTRO]);

  movieList.forEach((movie) => {
    if (movie.tm_id && movie.backdrop_path && movie.title && movie.overview) {
      randomMovie.id = movie.tm_id;
      randomMovie.title = movie.title;
      randomMovie.backdropPath = movie.backdrop_path;
      randomMovie.overview = movie.overview;
    }
  });
  return randomMovie;
}
