import { aroundQueries, imagePath, korean } from 'utils/constants';
import fetchData from 'utils/fetchData';
import getDateFormat from 'utils/getDateFormat';

export default async function aroundAPI(payload) {
  const rawResult = await fetchData(aroundQueries[payload.TYPE], [korean]);
  const movieList = rawResult.results;
  const result = [];
  movieList.forEach((movie) => {
    if (
      movie.title &&
      movie.backdrop_path &&
      movie.vote_average &&
      movie.release_date
    ) {
      const obj = {};
      obj.id = movie.id;
      obj.title = movie.title;
      obj.backdropPath = `${imagePath.original}${movie.backdrop_path}`;
      obj.rating = movie.vote_average;
      obj.date = getDateFormat(movie.release_date);
      result.push(obj);
    }
  });
  return result;
}
