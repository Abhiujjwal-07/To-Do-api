const express = require("express");
const res = require("express/lib/response");
const app = express();
const pool = require("./db");
app.use(express.json());

const url = require("./routes/url");
app.use("/url", url);

app.listen(5500, () => {
    console.log("server on 5500");
});