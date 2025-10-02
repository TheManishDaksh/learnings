// 🔹 Level 1 (Easy – Build Foundation)

//1. Factorial of a number → factorial(5) = 120

//2. Sum of natural numbers → sum(5) = 15

//3. Find nth Fibonacci number → fib(6) = 8

//4. Reverse a string → reverse("manish") = "hsinam"

//5. Check palindrome → "madam" → true, "hello" → false

// 🔹 Level 2 (Medium – Array & Patterns)

//1 Sum of array elements → [1,2,3,4] → 10

// 2.Find maximum element in array recursively

// 3.Flatten nested array → [1,[2,[3,4]]] → [1,2,3,4]

//4. Count vowels in a string → "recursion" → 4

//5. Power function → pow(2,5) = 32 (using recursion, no loops)

// 🔹 Level 3 (Hard – Interview Level)

//1. Generate all subsets of a string/array → "abc" → ["", "a", "b", "c", "ab", "ac", "bc", "abc"]

//2. Generate all permutations of a string → "abc" → ["abc","acb","bac","bca","cab","cba"]

//3. Binary search (recursive) → [1,2,3,4,5] find 4 → index 3

//4. Tower of Hanoi → n disks, print moves

//5. Nested object search → {a:{b:{c:42}}} find "c" → 42



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

// function sum(num){
//     if (num <= 1 )return 1;
//     return num+sum(num-1);
// }
// console.log(sum(5));



//3. Find nth Fibonacci number → fib(6) = 8

//  function fibonacci(num){
//    if(num <= 2) return 1;
//    return fibonacci(num-2) + fibonacci(num-1);
//  }
//  console.log(fibonacci(5));



//4. Reverse a string → reverse("manish") = "hsinam"

// function reverse(str){
//     if(str === "" ) return "";
//     return reverse(str.substr(1))+str[0];
// }
// console.log(reverse("manish"));



//5. Check palindrome → "madam" → true, "hello" → false

// function reverse(str){
//     if(str === "" ) return "";
//     return reverse(str.substr(1))+str[0];
// }

// function palindrome(str){
//     if (str === reverse(str)){
//         return true;
//     }
//     return false;
// }
// console.log(palindrome("manish"));

// print 1 to n

// let value = 1;
// function print(n){
//   console.log(value);
//   if(value >= n){
//     console.log("value exceed");
//     return;
//   }
//   value++;
//   print(n);
// }

// function main(){
//   print(5);
// }
// main();


// print n to 1
// let value = 1;
// function print(n){
//     console.log(n);
//     if(value >= n){
//         console.log("value exceed");
//         return;
//     }
//     n--;
//     print(n);
// }

// function main(){
//     print(7)
// }
// main();


// Sum of array elements → [1,2,3,4] → 10

// let array = [1, 2, 3, 4];
// let sum = 0;
// function sumOfArray(index = 0) {
//     if (array.length == index) {
//         console.log("array exceed");
//         return;
//     }
//     sum = sum + array.at(index);
//     index++;
//     console.log(sum);
//     sumOfArray(index);
// }

// function main() {
//     sumOfArray()
// }
// main();


// the second way 

// let array = [1, 2, 3, 4];

// function sumOfArray(index = 0) {
//     if (index === array.length) {
//         console.log("array exceed");
//         return 0;
//     }
//     return array[index] + sumOfArray(index + 1);
// }

// function main() {
//     let total = sumOfArray();
//     console.log(typeof total);

//     console.log(total);
// }
// main();

