const jwt = require('jsonwebtoken');
const UserAccessor = require('../Accessor/userAccessor');
const sessionAccessor = require('../Accessor/sessionAccessor');

const SECRETKEY = 'ABCD';

// function login(email, password) {
//   let user = UserAccessor.getUserByEmail(email);
//   if (typeof user === 'undefined') {
//     throw Error('Invalid User');
//   }
//   else if (user.password === password) {
//     let data = {
//       email: email,
//       role: user.role
//     };
//     const token = jwt.sign(data, SECRETKEY);
//     return token;
//   }
//   else {
//     throw Error('Invalid email/password');
//   }

// }

function login(email,password){
  let token = UserAccessor.findByEmail(email).then((user)=>{
        if(user.password === password){
          let data = {
            email: email
          };
          const token = jwt.sign(data, SECRETKEY);
          sessionAccessor.createSession(email , token);
          return token;
        }else{
          throw Error("Password Not Matched")
        }
  })
  .catch((e)=>{
    console.log(e);
  })
  return token;
  }

  function logout(email){
    let data = sessionAccessor.deletesession(email);
    return data;
  }

module.exports = {
  login,
  logout
};