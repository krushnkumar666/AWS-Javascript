// print the even and off number 

// for (var i=1; i<=10; i++){
//     if (i % 2 == 0){
//         console.log(`${i} - Even`);
//     }else{
//         console.log(`${i} - Odd`);
//     }
// }
// print the addition of odd numbers from 10 to 30 ?

var add = 0;
for (var i=10; i<=30; i++){
    if(i%2 != 0){
        add += i;
    }
} 
console.log(add);

// prime number in javascript ?

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % 2 === 0) {
      return false;
    }
    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }