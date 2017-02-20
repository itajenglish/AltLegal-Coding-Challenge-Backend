const express = require('express');
const router = express.Router();
const { getAllWatchlist, addNewWatchlist } = require('../models/watchlist');

// Route Returns All Watchlist
router.get('/watchlist', getAllWatchlist, (req, res, next) => {});

// Route Adds New Watchlist Into database
router.post('/watchlist', addNewWatchlist, (req, res, next) => {
  res.json({message: "Watchlist Added!"})
});

module.exports = router;
