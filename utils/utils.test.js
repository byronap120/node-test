const expect = require('expect')

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33 , 11);

  expect(res).toBe(44).toBeA('number');
});


it('should square a number', () => {
  var res = utils.square(2);

  expect(res).toBe(4).toBeA('number');
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
  expect([2,3,4]).toInclude(4);
  expect({
    name: 'Byron',
    age: 26
  }).toInclude({
    age: 26
  })
});

// should verify first and last names are setName
// assert it includes firstName and lastName with proper values
it('should verify first and last names are setName', () => {
  var user = {
    firstName: '',
    lastName: ''
  }

  var fullName = 'Byron Ajin';
  var res = utils.setName(user, fullName);

  expect(res).toInclude({
    firstName: 'Byron',
    lastName: 'Ajin'
  })
});
