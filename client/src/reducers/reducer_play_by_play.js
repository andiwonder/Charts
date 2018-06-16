import { FETCH_PLAY_BY_PLAY } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PLAY_BY_PLAY:
      return { plays: action.payload, ...state };
  }
  return state;
}
