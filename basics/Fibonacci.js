let i = 0;
let j = 1;

for (let n=0; n<50; n++) {
  let x = j
  j = x + i;
  i = x;
  console.log(i)
}