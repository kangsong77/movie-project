import { aroundQueries } from 'utils/constants';
import getData from 'utils/getData';

export default async function aroundAPI(payload) {
  const movieList = await getData(aroundQueries[payload.TYPE]);
  const result = [];
  movieList.forEach((movie) => {
    if (movie.tm_id && movie.backdrop_path && movie.rating) {
      const obj = {};
      obj.id = movie.tm_id;
      obj.title = movie.title;
      obj.backdropPath = movie.backdrop_path;
      obj.rating = movie.rating;
      obj.date = movie.release_date;
      result.push(obj);
    }
  });
  return result;
}
