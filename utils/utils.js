var add = (a ,b) => {
  return a + b;
}

var square = (x) => {
  return x * x;
}

var setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}

module.exports = {
  add,
  square,
  setName
}
