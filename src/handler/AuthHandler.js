const AuthService = require('../service/AuthService');

function login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
  
    let token = AuthService.login(email, password)
    token.then((data)=>{
      res.status(200).send(data);
    }).catch((e)=>{
      console.log(e)
    })
  }
  
  function logout(req,res){
    let email = req.email;
    let data = AuthService.logout(email);
    data.then(()=>{
      res.send("Logout Successful")
    }).catch((e)=>{
      console.log("Logout Not Successful")
      console.log(e)
    })
  }


  module.exports = {
    login,
    logout
  };