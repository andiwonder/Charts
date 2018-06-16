import { combineReducers } from 'redux';
import ScheduleReducer from './reducer_schedule';
import SeasonalStatsReducer from './reducer_seasonal_stats';
import SeasonalStanding from './reducer_seasonal_standing';
import PlayByPlay from './reducer_play_by_play';

const rootReducer = combineReducers({
  schedule: ScheduleReducer,
  seasonal_stats: SeasonalStatsReducer,
  seasonal_standing: SeasonalStanding,
  plays: PlayByPlay
});

export default rootReducer;
