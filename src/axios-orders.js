import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burga-ee8d3.firebaseio.com/'
});

export default instance;