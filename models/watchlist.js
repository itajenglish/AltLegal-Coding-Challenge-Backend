const db = require('../lib/db/connectdb');

// GET All Watchlist From Database
const getAllWatchlist = (req, res, next) => {
  db.any('SELECT * FROM Watchlist')
  .then((data) => {
    console.log(data);
    res.send(data);
    next();
  })
  .catch((err) => {
    console.log(`error: ${err}`);
    res.status(500).send('oh Ohh! something went wrong grabbing your watchlists.');
  })
}

// Add New Watchlist Into Database
const addNewWatchlist = (req, res, next) => {
  console.log(req.body);
  const hashtag = req.body.hashtag;
  const card_id = req.body.card_id;
  db.none('INSERT INTO Watchlist (hashtag, card_id) values ($1,$2)',[hashtag, card_id])
  .then(() => {
    next();
  })
  .catch((err) => {
    console.log(`error: ${err}`);
    res.status(500).send('oh Ohh! something went wrong with adding your watchlist.');
  })
}


module.exports = { getAllWatchlist, addNewWatchlist };
