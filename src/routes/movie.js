const express = require('express');
const router = express.Router();
const MovieHandler = require('../handler/MovieHandler');
const { checkifAuth } = require('../middleware/Auth');


router.get('/',checkifAuth,MovieHandler.listmovies);

module.exports = router;