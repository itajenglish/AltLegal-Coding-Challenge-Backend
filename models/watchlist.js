const db = require('../lib/db/connectdb');

// GET All Watchlist From Database
const getAllWatchlist = (req, res, next) => {
  db.any('SELECT * FROM Watchlist')
  .then((data) => {
    console.log(data);
    res.send(data);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
    res.status(500).send('oh Ohh! something went wrong grabbing your watchlists.');
  })
}


module.exports = { getAllWatchlist };
