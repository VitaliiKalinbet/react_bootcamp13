import axios from 'axios';

// const API_URL = 'https://hn.algolia.com/api/v1/search?query=';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/search?query=';

export const fetchArticlesInServices = (query = 'react') => {
  const serchQuery = query ? `/articles?category=${query}` : '/articles';

  return axios.get(serchQuery);
};

export const w = () => {};
