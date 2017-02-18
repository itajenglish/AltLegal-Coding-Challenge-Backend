//Require NPM Packages
const express = require('express'),
  app = express(),
  pgp = require('pg-promise')(),
  db = pgp("postgres:tajenglish@localhost:5432/apilab"),
  methodOverride = require('method-override'),
  bdPars = require('body-parser');

//configure express and related packages
app.use(methodOverride('_method')); //method override
app.use(bdPars.json()); //body parser
app.use(bdPars.urlencoded({
  extended: false
})); //body parser

//start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

// Define Routes
app.get('/', (req, res) => {
  res.send('Hello Alt Legal Team! Hope To Be Joining You Soon!!');
});
