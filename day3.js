// Conditional Statement 

// if else 
// switch


// syntax 
// if ( condition - 2 == 3 ){ statement 1 } else { statement 2 }

// console.log(2 == 3)

// if (5 > 3) {
//     console.log("Condition is true.")
// } else {
//     console.log("Condition is false.")
// }

// var value1 = 31;
// var value2 = 20;
// var value3 = 30;

// if(value1 > value2){
//     console.log("Value 1 is bigger than value 2")
// } else if(value1 > value3) {
//     console.log("value 1 is bigger than value 3")
// } else {
//     console.log("value 1 is lesser than value 2 and value 3")
// }

// RTO 

// 1. Age limit > 18   L
// 2. Age limit < 80  no L
// 3. Age  == 18 , LL
// 4. Age limit < 18 , no L

var age = 50;
var age = 18;
var age = 15;
var age = 95;

if (age>18 && age<80){
    console.log(`you are age is ${age}`+" and You are eligible for License");
}else if(age<18){
    console.log(`you are age is ${age}`+" and You are not eligible for license.");
}else if(age==18){
    console.log(`you are age is ${age}`+" and You are eligible for learning license");
}else if(age>80){
    console.log(`you are age is ${age}`+" and you have exceeded the age limit !");
}else{
    console.log(`you are age is ${age}`+" and this Age is not valid");
}



// Logical && || 

// var value1 = 10;
// var value2 = 20;
// var value3 = 3;
// var value4 = 1;

// console.log(value1 < value2 && value1 > value3 && value1 < value4)
// console.log(10 > 20 || 10 < 2)

// && - if even one condition turns false then it'll return false
//     and only when all conditions turns true then it'll return true

// || -  if even one condition is true then it'll return true
//         and when all conditions are false then only it'll return false

