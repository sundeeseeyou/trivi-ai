"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.default.config(); // Fix 1: Remove the path argument unless necessary
var APP = (0, express_1.default)();
var PORT = process.env.SERVER_PORT || 3000; // Fix 2: Add a fallback port
APP.get("/", function (req, res) {
    res.sendStatus(200);
});
APP.listen(PORT, function () {
    console.log("Listening on port " + PORT); // Fix 3: Correct the typo
});
