var fib = []
fib[0] = 0
fib[1] = 1
function fibonacci(input) {
  if (input >= 0 && Number.isInteger(input) == true && Number.isNaN(input) == false) {
    if (Number(input) >= 2) {
      for (i=0;i<Number(input);i++) {
      fib[i+2] = fib[i+1] + fib[i];
      };
    };
    return fib[input];
  } else {
    console.log('please use integer >= 0');
  }; 
};