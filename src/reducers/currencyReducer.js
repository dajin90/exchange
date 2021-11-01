/* eslint-disable no-param-reassign */
import produce from 'immer';

import {
  GET_RATES_SUCCESS,
  GET_RATES_REQUEST,
  GET_RATES_FAILURE
} from '../actions/currencyActions';

const initialState = {
  rates: [],
  error: ''
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES_REQUEST: {
      return produce(state, (draft) => {
        // Ensure we clear current session
        draft.rates = [];
      });
    }

    case GET_RATES_SUCCESS: {
      const { rates } = action.payload;
      return produce(state, (draft) => {
        draft.rates = rates;
      });
    }

    case GET_RATES_FAILURE: {
      const { error } = action;
      return produce(state, (draft) => {
        draft.error = error;
      });
    }

    default: {
      return state;
    }
  }
};

export default currencyReducer;
