package com.example.charts_server.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@Service
public class SportsRadarService {

    private static final Logger logger = LoggerFactory.getLogger(SportsRadarService.class);
    private ObjectMapper mapper;
//    private final RestTemplate restTemplate;

    public SportsRadarService(){
//        this.restTemplate = restTemplate;
        mapper = new ObjectMapper();
    }

    @Async
    public CompletableFuture<JsonObject> getStanding(String type) throws InterruptedException, IOException {
        logger.info("Looking up " + type + " standing");
        String sURL = String.format("http://api.sportradar.us/nba/trial/v4/en/seasons/2017/" + type + "/standings.json?api_key=fv87shvzfuu3ebusje3v4saw");
        URL url = new URL(sURL);
        URLConnection request = url.openConnection();
        JsonParser jp = new JsonParser(); //from gson
        JsonElement root = jp.parse(new InputStreamReader((InputStream) request.getContent())); //Convert the input stream to a json element
        JsonObject rootobj = root.getAsJsonObject();
        return CompletableFuture.completedFuture(rootobj);
    }

    @Async
    public CompletableFuture<JsonObject> getStandingV2(String type) throws InterruptedException, IOException {
        logger.info("Looking up " + type + " standing");
        String sURL = String.format("http://api.sportradar.us/nba/trial/v4/en/seasons/2017/" + type + "/standings.json?api_key=fv87shvzfuu3ebusje3v4saw");
        JsonObject result = new Gson().fromJson(sURL, JsonObject.class);
        return CompletableFuture.completedFuture(result.getAsJsonObject());
    }
}