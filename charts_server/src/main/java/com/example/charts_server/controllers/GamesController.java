package com.example.charts_server.controllers;

// import com.fasterxml.jackson.databind.ObjectMapper;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.ResponseBody;
// import java.net.MalformedURLException;

import com.example.charts_server.services.SportsRadarService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;


@RestController
public class GamesController {

    private final SportsRadarService sportsRadarService = new SportsRadarService();

    // In order to return custom json not mapped to an object you ahve to return it as a string, and add
    // the annotations above
//    @GetMapping(value="/users", produces= MediaType.APPLICATION_JSON_VALUE)
//    public String findAllUsers() throws IOException {
//        String sURL = "http://api.sportradar.us/nba/trial/v4/en/seasons/2017/REG/rankings.json?api_key=fv87shvzfuu3ebusje3v4saw";
//        URL url = new URL(sURL);
//        URLConnection request = url.openConnection();
//        //from gson
//        JsonParser jp = new JsonParser();
//        //Convert the input stream to a json element
//        JsonElement root = jp.parse(new InputStreamReader((InputStream) request.getContent()));
//        JsonObject rootobj = root.getAsJsonObject();
//        return rootobj.toString();
//    }

    @GetMapping(value="/standings", produces= MediaType.APPLICATION_JSON_VALUE)
    public String getStanding() throws IOException, InterruptedException, ExecutionException {
        // Start the clock
        CompletableFuture<JsonObject> reg_standing = sportsRadarService.getStanding("REG");
        CompletableFuture<JsonObject> pst_standing = sportsRadarService.getStanding("PST");
        CompletableFuture.allOf(reg_standing, pst_standing).join();

        JsonObject reg_standing_json =  reg_standing.get();
        JsonObject pst_standing_json = pst_standing.get();
        JsonArray jsonArray = new JsonArray();
        JsonObject result = new JsonObject();
        result.add("reg", reg_standing_json);
        result.add("pst", pst_standing_json);
        return result.toString();
    }

    @GetMapping(value="/standingsv2", produces= MediaType.APPLICATION_JSON_VALUE)
    public String getStandingv2() throws IOException, InterruptedException, ExecutionException {
        // Start the clock
        CompletableFuture<JsonObject> reg_standing = sportsRadarService.getStandingV2("REG");
        CompletableFuture<JsonObject> pst_standing = sportsRadarService.getStandingV2("PST");
        CompletableFuture.allOf(reg_standing, pst_standing).join();

        JsonObject reg_standing_json =  reg_standing.get();
        JsonObject pst_standing_json = pst_standing.get();
        JsonObject result = new JsonObject();
        result.add("reg", reg_standing_json);
        result.add("pst", pst_standing_json);
        return result.toString();
    }





    @GetMapping(value="/users", produces= MediaType.APPLICATION_JSON_VALUE)
    @Query(value="SELECT * FROM Games WHERE (home_team_alias LIKE 'UTA') OR (away_team_alias LIKE 'UTA')", nativeQuery = true)
    public String test() {
        return "1";
    }





}
