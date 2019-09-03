import axios from 'axios';

const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

export const fetchArticlesInServices = (query = 'react') =>
  axios.get(API_URL + query);

export const w = () => {};
