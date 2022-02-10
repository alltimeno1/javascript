function shadowing() {
  var val = 2; 
  console.log("F", val);
  val++;
}

var val = 0;
shadowing();
console.log("O", val);
