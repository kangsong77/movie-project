import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

const getQuery = (path, queries = []) => {
  let url = `${BASE_URL}${path}?api_key=${API_KEY}`;
  queries.forEach((query) => {
    url += `&${query}`;
  });
  return url;
};
// https://api.themoviedb.org/3/movie/popular?api_key=d5e4a2eb5fb264de1583b6945d203546&language=ko-KR
//  https://api.themoviedb.org/3/trending/movie/week?api_key=d5e4a2eb5fb264de1583b6945d203546&language=ko-KR
// https://api.themoviedb.org/3/movie/top_rated?api_key=d5e4a2eb5fb264de1583b6945d203546&language=ko-KR
// https://api.themoviedb.org/3/search/movie?api_key=d5e4a2eb5fb264de1583b6945d203546&language=ko-KR&query=%EC%8A%88%ED%8D%BC
export default async function fetchData(path, queries = []) {
  const query = getQuery(path, queries);
  const http = await axios.get(query);
  const jsonResult = JSON.parse(http.request.response);
  return jsonResult;
}
