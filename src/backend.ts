import express from "express";
import appData from "./api/app.json" assert { type: "json" };
import categories from "./api/categories.json" assert { type: "json" };
import gameLists from "./api/game-lists.json" assert { type: "json" };
import games from "./api/games.json" assert { type: "json" };

const PORT = 8082;

const app = express();

app.post("/api/games");

app.post("/api/protected");

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
