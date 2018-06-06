package com.example.charts_server.controllers;

public interface ApiInterface {
    // Game BoxScore - needs game_id
    String endpoint1 = "http://api.sportradar.us/nba/trial/v4/en/games/114844aa-3c31-4ac7-9afa-0a4f2ae65e0c/boxscore.json?api_key=fv87shvzfuu3ebusje3v4saw";

    // Game Summary - needs game_id
    String endpoint2 = "http://api.sportradar.us/nba/trial/v4/en/games/114844aa-3c31-4ac7-9afa-0a4f2ae65e0c/summary.json?api_key=fv87shvzfuu3ebusje3v4saw";

    // Team Profile (Rosters) - needs team_id
    String endpoint3 = "http://api.sportradar.us/nba/trial/v4/en/teams/583ec825-fb46-11e1-82cb-f4ce4684ea4c/profile.json?api_key=fv87shvzfuu3ebusje3v4saw";

    // Standings - doesnt need anything because scope of app is limited
    String endpoint4 = "http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/standings.json?api_key=fv87shvzfuu3ebusje3v4saw";

    // Seasonal Stats, get
    String endpoint5 = "http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/teams/583eca2f-fb46-11e1-82cb-f4ce4684ea4c/statistics.json?api_key=fv87shvzfuu3ebusje3v4saw";

    // Schedule
    String endpoint6 = "http://api.sportradar.us/nba/trial/v4/en/games/2017/REG/schedule.json?api_key=fv87shvzfuu3ebusje3v4saw";

    // TODO play by play
    String endpoint7 = "http://api.sportradar.us/nba/trial/v4/en/games/114844aa-3c31-4ac7-9afa-0a4f2ae65e0c/pbp.json?api_key=fv87shvzfuu3ebusje3v4saw";

    // TODO series_schedule
    // TODO series_Statistics
}
