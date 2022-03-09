const fs = require('fs');

// 동기 실행
console.log('Start');

const content = fs.readFileSync('./new.txt', 'utf-8');
console.log(content);

console.log('Finish');

// 비동기 실행
console.log('Start');

fs.readFile('./new', 'utf-8', (error, data) => console.log(data));

console.log('Finish');

// 이벤트 비동기 실행 on, addListener
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('test', () => console.log('Success1'));

myEmitter.on('test', () => console.log('Success2'));

myEmitter.addListener('test', () => console.log('Success3'));

console.log(myEmitter.listeners('test'));

myEmitter.emit('test');

// once
const myEmitter2 = new EventEmitter();

myEmitter2.once('test', () => console.log('Success4'));

myEmitter2.emit('test');
myEmitter2.emit('test');

// off
const myEmitter3 = new EventEmitter();

const callback = [];

callback[0] = () => console.log('Success5');

myEmitter3.on('test', callback[0]);

myEmitter3.off('test', callback[0]);

myEmitter3.emit('test');

// params
const myEmitter4 = new EventEmitter();

const callback2 = [];

callback2[0] = (arg1, arg2, arg3) => {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
};

myEmitter3.on('test', callback2[0]);

myEmitter3.emit('test', 1, 2, 3);