import axios from 'axios';
import config from '../config';

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: config.apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  get(resource, params) {
    return this.instance.get(resource);
  }
}

export default new Api();