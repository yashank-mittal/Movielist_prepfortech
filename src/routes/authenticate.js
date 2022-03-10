const express = require('express');
const router = express.Router();
const AuthHandler = require('../handler/AuthHandler');
const Auth = require('../middleware/Auth');

router.post('/login', AuthHandler.login);
router.post('/logout',Auth.checkifAuth,AuthHandler.logout);


module.exports = router;