// datatypes - String, number, Boolean
// varibles - var let const
// comparision operator - < > == ===
// logical op || &&
// conditional statement if else , switch
// Loops for - while
// ++ --
// function  - trad, arraow
// console.log();
// typeof()
// undefined
// Array
// function

// Nested for loop

// for (var i = 0; i < 2; i++) {
//     for (var j = 0; j < 2; j++) {
//         console.log(i, j)
//         // j++
//     } // end
//     // i++
// }
// 1 iteration:
// i = 0, i < 2, 0 < 2, true,
//     j = 0, j < 2, 0 < 2, true,
//     console.log(i, j), (0, 0),
//     j++

// 2 iterations

// i = 0, i < 2, 0 < 2, true,
//     j = 1, i < 2, 1 < 2, true,
//     console.log(i, j)(0, 1)
// j++

// 3 iteration:

// i = 0, i < 2, 0 < 2, true,
//     j = 2, j < 2, 2 < 2, false
// i++

// 4 iteration:
// i = 1, i < 2, 1 < 2, true
// j = 0; j < 2, 0 < 2, true
// console.log(i, j)(1, 0)
// j++

// 5 iteration:
// i = 1, i < 2, 1 < 2, true
// j = 1, j < 2, 1 < 2, true
// console.log(i, j)(1, 1)
// j++

// 6 iteration
// i = 1, i < 2, 1 < 2, true
// j = 2, i < 2, 2 < 2, false
// i++

// 7 iteration
// i = 2, i < 2, 2 < 2, false

// for (var i = 10; i <= 30; i += 10) {
//     for (var j = 20; j <= 40; j += 10) {
//         console.log(i, j)
//         // j++
//     }
//     //i++
// }

// 1 iteration :
// i = 10 , i <= 30 , 10 <= 30, true,
// j = 20, j <= 40, 20 <= 40, true
// console.log(i,j) (10, 20)
// j++

// 2 iteration
// i = 10 , i <= 30 , 10 <= 30, true,
// j = 30, j <= 40, 30 <= 40, true
// console.log(i,j) (10, 30)
// j++

// 3 iteration
// i = 10 , i <= 30 , 10 <= 30, true,
// j = 40, j <= 40, 40 <= 40, true
// console.log(i,j) (10, 40)
// j++

// 4 iteration
// i = 10 , i <= 30 , 10 <= 30, true,
// j = 50, j <= 40, 50 <= 40, false
// i++

// 4 iteration
// i = 20 , i <= 30 , 20 <= 30, true,
// j = 20, j <= 40, 20 <= 40, true
// console.log(i,j) (20, 20)
// j++

// 10, 20
// 10, 30
// 10, 40
// 20, 20
// 20, 30
// 20, 40
// 30, 20
// 30, 30
// 30, 40

//  1 + 2, 4, 56, 7, 8, 3, 2, 5, 7

//  1 + 2  =  2 == target
//  1 + 4  =
//  1 + 56 =
//  1 + 7
//  1 + 8
//  1 + 3
//  ...

//  2 +  4, 56, 7, 8, 3, 2, 5, 7
//  4 + 56, 7, 8, 3, 2, 5, 7
//  56 + 7, 8, 3, 2, 5, 7
//  7 + 8, 3, 2, 5, 7

// Q Find addition of  two number from given array with target.

// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12

// ans :
// 4 8
// 5 7

// function FindTargetedValues(array, target) {
//     for (var i = 0; i < array.length - 1; i++) {
//         // if (array[i] + array[i + 1] == target) {
//         //     console.log(array[i], array[i + 1])
//         // }
//         // wrrite your answer
//     }
// }
// FindTargetedValues(array, target)
// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12;

// function FindTargetedValues(array, target) {
//   let result = [];
//   for (var i = 0; i < array.length - 1; i++) {
//     for (var j = i; j < array.length; j++) {
//       if (array[i] + array[j] == target) {
//         result.push([array[i], array[j]]);
//       }
//     }
//   }
//   return result;
// }
// console.log(FindTargetedValues(array, target));
// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12;
// function FindTargetedValues(array, target) {
//   let result = [];
//   let seenNumbers = {};
//   for (var i = 0; i < array.length - 1; i++) {
//     let complement = target - i;
//     if (seenNumbers[complement]) {
//       result.push([complement, i]);
//     }
//     seenNumbers[i] = true;
//   }
//   return result;
// }
// console.log(FindTargetedValues(array, target));
// var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12;

// function FindTargetedValues(array, target) {
//   let result = new Set();

//   for (var i = 0; i < array.length - 1; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         result.add([array[i], array[j]]);
//         result.add([array[j], array[i]]);
//       }
//     }
//   }
//   return Array.from(result).slice(0, 4);
// }
// console.log(FindTargetedValues(array, target));

var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
// var target = 12;

// function FindTargetedValues(array, target) {
//   let result = new Set();

//   for (var i = 0; i < array.length - 1; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         result.add([array[i], array[j]]);
//         result.add([array[j], array[i]]);
//       }
//     }
//   }
//   return Array.from(result);
// }
// console.log(FindTargetedValues(array, target));

// var u = new Set(array);
// console.log(Array.from(u));






