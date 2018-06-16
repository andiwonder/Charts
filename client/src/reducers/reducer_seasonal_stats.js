import { FETCH_SEASONAL_STATS } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SEASONAL_STATS:
      return { seasonalStats: action.payload, ...state };
  }
  return state;
}
