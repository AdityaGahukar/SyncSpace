// commonjs syntax
// const express = require("express")
// const dotenv = require("dotenv")

// for import export syntax --> type: module in package.json
import express from "express";
import {ENV} from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(ENV.PORT, () => console.log("Server started on port", ENV.PORT));
