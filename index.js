import express from "express";

const app = express();

import {
  getPlayersScores,
  getTopPlayers,
  getInactivePlayers,
  getPopularGenres,
  getRecentPlayers,
} from "./queries.js";

// test
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM games");
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/players-scores", async (req, res) => {
  try {
    const scores = await getPlayersScores();
    res.json(scores);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/top-players", async (req, res) => {
  try {
    const topPlayers = await getTopPlayers();
    res.json(topPlayers);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/inactive-players", async (req, res) => {
  try {
    const inactivePlayers = await getInactivePlayers();
    res.json(inactivePlayers);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/popular-genres", async (req, res) => {
  try {
    const popularGenres = await getPopularGenres();
    res.json(popularGenres);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/recent-players", async (req, res) => {
  try {
    const recentPlayers = await getRecentPlayers();
    res.json(recentPlayers);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000!");
});
