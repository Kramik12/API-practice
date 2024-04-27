const express = require("express");
const app = express();

const auth_routes = require("./auth.routes");
const home_routes = require("./home.routes");

app.use(home_routes);
app.use(auth_routes);

module.exports = app;