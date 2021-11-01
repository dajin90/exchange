import axios from 'axios';
import { API_BASE_URL } from 'src/config';

const Api = {
  get: (params) => {
    const url = params;

    const token = localStorage.getItem('token');
    let authOptions;
    if (token != null) {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        }
      };
    } else {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      };
    }
    return axios
      .get(`${API_BASE_URL}/${url}`, authOptions)
      .then((result) => (result))
      .catch((error) => {
        const { response } = error;
        return { error: response.data };
      });
  },

  post: (params) => {
    const { url, data } = params;

    let authOptions;
    const token = localStorage.getItem('token');
    if (token != null) {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        }
      };
    } else {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      };
    }

    return axios
      .post(`${API_BASE_URL}/${url}`, data, authOptions)
      .then((result) => ({ result }))
      .catch((error) => {
        const { response } = error;
        return { error: response };
      });
  },

  put: (params) => {
    const { url, data } = params;

    let authOptions;
    const token = localStorage.getItem('token');
    if (token != null) {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        }
      };
    } else {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      };
    }

    return axios
      .put(`${API_BASE_URL}/${url}`, data, authOptions)
      .then((result) => ({ result }))
      .catch((error) => ({ error }));
  },

  patch: (params) => {
    const { url, data } = params;

    const authOptions = {
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    };
    return axios
      .patch(`${API_BASE_URL}/${url}`, data, authOptions)
      .then((result) => ({ result }))
      .catch((error) => ({ error }));
  },

  download: (params) => {
    const time = new Date();

    const {
      url,
      data = {
        data: { time }
      },
    } = params;

    return axios
      .post(`${API_BASE_URL}/${url}`, data, {
        responseType: 'arraybuffer'
      })
      .then((result) => ({ result }))
      .catch((error) => ({ error }));
  },

  upload: (params) => {
    const { url, data } = params;
    let authOptions;
    const token = localStorage.getItem('token');
    if (token != null) {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        }
      };
    } else {
      authOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      };
    }
    return axios.post(
      `${API_BASE_URL}/${url}`,
      data,
      authOptions
    )
      .then((result) => ({ result }))
      .catch((error) => ({ error }));
  },
};

export default Api;
