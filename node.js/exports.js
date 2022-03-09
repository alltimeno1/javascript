function add2(a, b) {
  return a+b;
}

const calculator = {
  PI: 3.14,
  add: (a, b) => a+b,
  minus: (a, b) => a-b,
  multiple: (a, b) => a*b,
}

module.exports = calculator;
module.exports.plus = add2;