import axios from 'axios';
import { SERVER_URL } from './constants';

export default async function getData(path) {
  let url = `${SERVER_URL}${path}`;
  const http = await axios.get(url);
  const jsonResult = JSON.parse(http.request.response);
  return jsonResult;
}
