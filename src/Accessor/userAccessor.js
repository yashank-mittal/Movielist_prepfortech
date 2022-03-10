const { UserRoles } = require('../constants/user');
const User = require('../db/UserSchema');

const dummyData = [
  {
    'email': 'yashank@gmail.com',
    'password': 'yash',
    'role': UserRoles.Admin
  },
  {
    'email': 'yash@gmail.com',
    'password': 'yash2',
    'role': UserRoles.Student
  }
];

function getUserByEmail(email) {
  for(let i = 0; i < dummyData.length; i++) {
    if (dummyData[i].email === email) {
      return dummyData[i]
    }
  }
  return undefined;
}

function findByEmail(email){
  return User.findOne({"email": email})
}


module.exports = {
  getUserByEmail,
  findByEmail
};