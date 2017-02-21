const express = require('express');
const router = express.Router();
const Twitter = require('twitter-node-client').Twitter;
const twitter = new Twitter(require('../lib/config/twitter_config.js'));
const { getAllWatchlist, addNewWatchlist, getOneWatchList, updateWatchlist, deleteOneWatchlist } = require('../models/watchlist');

// Route Returns All Watchlist
router.get('/watchlist', getAllWatchlist, (req, res, next) => {});

// Route Adds New Watchlist Into Database
router.post('/watchlist', addNewWatchlist, (req, res, next) => {
  res.json({message: "Watchlist Added!"})
});

// Route Returns Watchlist With ID Passed In
router.get('/watchlist/:id', getOneWatchList, (req, res, next) => {});

//Route Updates Watchlist In Database
router.put('/watchlist/:id', updateWatchlist, (req, res, next) => {
  res.json({message: "Watchlist Updated!"})
});

//Delete Watchlist From Database
router.delete('/watchlist/:id', deleteOneWatchlist, (req, res, next) => {
  res.json({message: "Watchlist Deleted!"})
})

// Route Returns Tweets With Hashtag Passed In
router.get('/tweets/:hashtag', (req, res, next) => {
  const hashtag = req.params.hashtag;

  //Callback functions for twitter
  const error = (err, response, body) => {
    console.log(`error: ${err}`);
    res.status(500).send('oh Ohh! something went wrong with adding your tweets.');
  };
  const success = (data) => {
    // console.log(data);
    res.send(data);
    console.log(hashtag)
  };

  //Hit Twitter Api
  twitter.getSearch({'q':`#${hashtag}`,'count': 10, 'lang': 'en'}, error, success);

});

module.exports = router;
