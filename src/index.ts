import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Fix 1: Remove the path argument unless necessary
const APP = express();
const PORT = process.env.SERVER_PORT || 3000; // Fix 2: Add a fallback port

APP.get("/", (req, res) => {
  res.sendStatus(200);
});

APP.listen(PORT, () => {
  console.log("Listening on port " + PORT); // Fix 3: Correct the typo
});
