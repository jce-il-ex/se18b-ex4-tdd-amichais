var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
return a+b;
}
function a_plus_a_plus_b (a, b) {
return a+a+b;
}
test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});

test('a_plus_a_plus_b should return the addition of a plus a plus b', function (t) {
  t.equal(4, a_plus_a_plus_b(1, 2)); 
  t.end();
});
