const jwt = require('jsonwebtoken');
const UserAccessor = require('../Accessor/userAccessor');

const SECRETKEY = 'ABCD';

function login(email, password) {
  let user = UserAccessor.getUserByEmail(email);
  if (typeof user === 'undefined') {
    throw Error('Invalid User');
  }
  else if (user.password === password) {
    let data = {
      email: email,
      role: user.role
    };
    const token = jwt.sign(data, SECRETKEY);
    return token;
  }
  else {
    throw Error('Invalid email/password');
  }

}

module.exports = {
  login
};