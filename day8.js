// Find the unique numbers 
// var array = [1, 2, 1, 3, 4, 5, 2, 3, 5];
// var unique = [];
// for (var i = 0; i < array.length; i++) {
//     if (unique[array[i]] === undefined) {
//         unique[array[i]] = 1;
//         console.log(array[i]);
//     }
// }
  


// var obj = {
//     name: 'abc',
//     sirname:'xyz',
//     age:20
// }
// console.log(obj.age);

var array = [1, 2, 1, 3, 4, 5, 2, 3, 5];
var unique = [];

function isPrime(n){
    for (var i=2; i<=n; i++){
        if(n%i===0){
            return false
        }
        return n>1
    }
}
for (var j=0; j<array.length;j++){
    if(unique[array[j]]===undefined && (unique[array[j]]=1) && (isPrime(array[j]))){
        console.log(array[j])
    }
}