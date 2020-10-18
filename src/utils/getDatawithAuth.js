import axios from 'axios';
import { SERVER_URL } from './constants';
import { getUserToken } from 'utils/authUtils';

export default async function getDatawithAuth(path) {
  const jwtToken = getUserToken();
  const headers = { Authorization: `JWT ${jwtToken}` };
  let url = `${SERVER_URL}${path}`;
  const http = await axios.get(url, { headers });
  const jsonResult = JSON.parse(http.request.response);
  return jsonResult;
}
