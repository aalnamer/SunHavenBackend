"use strict";

const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, function () {
  `Started on http://localhost:${PORT}`;
});
