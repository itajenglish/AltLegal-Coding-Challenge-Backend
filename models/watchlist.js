const db = require('../lib/db/connectdb');

// GET All Watchlist From Database
const getAllWatchlist = (req, res, next) => {
  db.any('SELECT * FROM Watchlist')
  .then((data) => {
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

const getOneWatchList = (req, res, next) => {
  db.one('SELECT * FROM Watchlist WHERE card_id = $1', [req.params.id])
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
    res.status(500).send('oh Ohh! something went wrong with getting your watchlist.');
  })
}

const updateWatchlist = (req, res, next) => {
  const card_id = req.params.id;
  const hashtag = req.body.hashtag;

  db.none('UPDATE Watchlist SET (hashtag) = ($1) WHERE card_id = $2',[hashtag, card_id])
  .then(() => {
    next();
  })
  .catch((err) => {
    res.status(500).send('oh Ohh! something went wrong with updating your watchlist.');
  })
}

const deleteOneWatchlist = (req, res, next) => {
  const card_id = req.params.id;

  db.none('DELETE FROM Watchlist WHERE card_id = $1',[card_id])
  .then(() => {
    next();
  })
  .catch((err) => {
    res.status(500).send('oh Ohh! something went wrong with deleting your watchlist.');
  })
}


module.exports = { getAllWatchlist, addNewWatchlist, getOneWatchList, updateWatchlist, deleteOneWatchlist };
