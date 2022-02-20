const express = require('express');
const router = express.Router();
const AuthHandler = require('../handler/AuthHandler');

router.post('/login', AuthHandler.login);


module.exports = router;