function return_test(){
  return;
  console.log("실행되지 않는 코드");
}

function print(message){
  console.log("print function in");
  console.log(message);
  console.log("print function out");
}

function sum(arg1, arg2){
  var result = arg1 + arg2;
  return result;
}

if (true) {
  console.log("1");
}
