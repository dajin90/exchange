import axios from 'src/utils/axios';
import { API_BASE_URL } from '../config';

export const GET_RATES_SUCCESS = '@currency/get-rates-success';
export const GET_RATES_REQUEST = '@currency/get-rates-request';
export const GET_RATES_FAILURE = '@currency/get-rates-failure';

export function currencyRates(type) {
  return async (dispatch) => {
    dispatch({ type: GET_RATES_REQUEST });
    axios.get(`${API_BASE_URL}${type}`)
      .then((response) => {
        if (response.data.rates) {
          dispatch({
            type: GET_RATES_SUCCESS,
            payload: {
              rates: response.data.rates
            }
          });
        }
      })
      .catch((error) => {
        dispatch({ type: GET_RATES_FAILURE });
        throw error;
      });
  };
}
