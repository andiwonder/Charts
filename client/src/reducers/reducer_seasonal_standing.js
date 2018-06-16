import { FETCH_SEASONAL_STANDING } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SEASONAL_STANDING:
      return { ...action.payload, ...state };
  }
  return state;
}
