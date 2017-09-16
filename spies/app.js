var db = require('./db.js');

var handleSignUp = (email, password) => {
  db.saveUser({email, password});
}

module.exports = {
  handleSignUp
}
