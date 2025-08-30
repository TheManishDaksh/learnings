// 1. Factorial of a number → factorial(5) = 120

// function factorial(num){
//     if (num <= 0 ){
//         return 1;
//     }else{
//         return num* factorial(num-1);
//     }
// }
// console.log(factorial(5));



// 2.Sum of natural numbers → sum(5) = 15

function sum(num){
    if (num <= 1 )return 1;
    return num+sum(num-1);
}
console.log(sum(5));
