import { aroundQueries } from 'utils/constants';
import getDatawithAuth from 'utils/getDatawithAuth';

export default async function mymovieAPI(payload) {
  const movieList = await getDatawithAuth(aroundQueries[payload.TYPE]);
  // const result = [];
  // movieList.forEach((movie) => {
  //   if (movie.tm_id && movie.title) {
  //     const obj = {};
  //     obj.id = movie.tm_id;
  //     obj.title = movie.title;
  //     obj.backdropPath = movie.backdrop_path;
  //     result.push(obj);
  //   }
  // });

  return movieList;
}
