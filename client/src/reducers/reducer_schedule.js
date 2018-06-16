import { FETCH_SCHEDULE } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SCHEDULE:
      return [...action.payload];
  }
  return state;
}
