import express from "express";
import appData from "./api/app.json";
import categories from "./api/categories.json";
import gameLists from "./api/game-lists.json";
import games from "./api/games.json";

const PORT = 8082;

const app = express();

app.post("/api/games");

app.post("/api/protected");

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
