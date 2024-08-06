const readlineSync = require("readline-sync");

function calculatefactorial(n) {
  let factorial = 1;
  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
function main() {
  const n = parseInt(readlineSync.question("Enter Non-negative Number: "));
  if(n<0){
    console.log("factorialis not define for negative number.")
  }else{
    const factorial = calculatefactorial(n)
    console.log(`Factorial of ${n} is ${factorial}`)
  }
}
main();