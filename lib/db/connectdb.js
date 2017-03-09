const pgp = require('pg-promise')();
module.exports = connectdb = pgp(process.env.DATABASE_URL || "postgres:tajenglish@localhost:5432/twitt-watch");
