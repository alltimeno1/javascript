// Promisify
const p = new Promise((resolve, reject) => {
  setTimeout(() => { resolve('success'); }, 2000);
});

p.then(result => console.log(result));

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => { reject(new Error('fail')); }, 2000);
});

p2.catch(error => console.log(error));

function wait(text, mllliseconds) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(text); }, mllliseconds);
  })
  return p
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.text())
  .then(result => wait(`${result} by codeit`, 2000))
  .then(result => console.log(result));

// all
const p3 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
const p4 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
const p5 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p4, p5, p6])
  .then((results) => {
    console.log(results);// Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  })
  .catch((error) => {
    console.log(error);
  });

// async, await
async function fetchAndPrint() {
  try {
    console.log(2);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(7);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);

