const express = require('express');
const router = express.Router();
const { getAllWatchlist, addNewWatchlist, getOneWatchList } = require('../models/watchlist');

// Route Returns All Watchlist
router.get('/watchlist', getAllWatchlist, (req, res, next) => {});

// Route Adds New Watchlist Into Database
router.post('/watchlist', addNewWatchlist, (req, res, next) => {
  res.json({message: "Watchlist Added!"})
});

// Route Returns Watchlist With ID Passed In
router.get('/watchlist/:id', getOneWatchList, (req, res, next) => {});

module.exports = router;
