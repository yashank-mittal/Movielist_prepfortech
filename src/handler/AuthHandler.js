const AuthService = require('../service/AuthService');

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
  
    let token = AuthService.login(email, password);
    res.status(200).send(token);
  }
  
  module.exports = {
    login
  };