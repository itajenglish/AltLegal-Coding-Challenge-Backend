//Require NPM Packages
const express = require('express'),
  app = express(),
  morgan = require('morgan'),
  cors = require('cors');
  bdPars = require('body-parser');

//configure express and related packages
app.use(morgan('dev'))// Logger
app.use(bdPars.json()); //body parser
app.use(cors());
app.use(bdPars.urlencoded({
  extended: false
})); //body parser


//start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

// Define Routes
const WATCHLIST_ROUTER = require('./routes/watchlist');

app.get('/', (req, res) => {
  res.send('Hello Alt Legal Team! Hope To Be Joining You Soon!!');
});

app.use('/api', WATCHLIST_ROUTER);
