import axios from "axios";

export const FETCH_TEAM = "fetch_team";
export const FETCH_GAME = "fetch_game";
export const FETCH_SCHEDULE = "fetch_schedule";
export const FETCH_STANDINGS = "fetch_standings";

export function selectTeam(name) {
  return {
    type: "TEAM_SELECTED",
    payload: name
  };
}