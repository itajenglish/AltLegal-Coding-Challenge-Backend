const pgp = require('pg-promise')();
module.exports = connectdb = pgp("postgres:tajenglish@localhost:5432/altlegal");
