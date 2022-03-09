// 커스텀 모듈
const m = require('./async');

console.log(m.minus(1, 2));
console.log(m.add(1, 2));
console.log(m.PI);
console.log(m.plus(1,2));

// 코어 모듈
const fs = require('fs');

fs.writeFileSync('new.txt', 'Hello, Node.js');

const fileList = fs.readdirSync('.');

console.log(fileList);

const os = require('os');

console.log(os.cpus());

// 서드파티 모듈
const cowsay = require('cowsay');

console.log(cowsay.say({
  text : "I love javascript",
}));