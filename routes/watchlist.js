const express = require('express');
const router = express.Router();
const { getAllWatchlist } = require('../models/watchlist');

// Route Returns All Watchlist
router.get('/watchlist', getAllWatchlist, (req, res, next) => {});

module.exports = router;
