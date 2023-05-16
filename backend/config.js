"use strict";

const { PSQL_ACC } = require("./config-settings");

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY;

const PORT = process.env.PORT || "8080";

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return process.env.NODE_ENV === "test"
    ? `postgresql://${PSQL_ACC}/sun_haven_test`
    : process.env.DATABASE_URL;
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

"SunHaven Config:".green;
"SECRET_KEY:".yellow, SECRET_KEY;
"PORT:".yellow, PORT.toString();
"BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR;
"Database:".yellow, getDatabaseUri();
("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
