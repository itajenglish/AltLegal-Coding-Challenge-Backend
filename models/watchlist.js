const db = require('../lib/db/connectdb');

const getAllWatchlist = (req, res, next) => {
  db.any('SELECT * FROM Watchlist')
  .then((data) => {
    res.send(data)
    console.log(data);
  })
  .catch((err) => {
    console.log(`error: ${err}`)
  })
}


module.exports = { getAllWatchlist };
