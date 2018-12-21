// 1.求两个数中的最大值
// No.1
// function max(a, b) {
//     var c = a > b ? a : b;
//     console.log(c);
// }
// max(4, 5);
// No.2
// function max(a, b) {
//     var c = a > b ? a : b;
//     return c;
// }
// console.log(max(4, 5));
// No.3(函数表达式)
// var max = function (a, b) {
//     var c = a > b ? a : b;
//     return c;
// }
// console.log(max(4, 5));

// 2.求三个数中的最大值
// No.1
// function max (a, b, c){
//     if(a > b){
//         if(a > c){
//             console.log("a是最大值"); 
//         } else{
//             console.log("c是最大值");
//         }
//     } else{
//         if(b > c){
//             console.log("b是最大值");
//         }  else{
//             console.log("c是最大值");
//         }
//     }
// }
// max(2,3,4);
// No.2
// var maxValue = function (a, b, c) {
//     var l = a > b ? (a > c ? a : c) : (b > c ? b : c);
//     return l;
// }
// console.log(maxValue(1, 2, 3));

// 3.求两个数字的差
// No.1
// var cha = function (a, b) {
//     var c = a - b;
//     return c;
// }
// console.log(cha(21,18));
// No.2
// function cha(a, b) {
//     var c = a - b;
//     return c;
// }
// console.log(cha(3, 4));

// 4.求一个数组中的最大值
// No.1
// var maxValue = function (arr) {
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxValue([10, 2, 3]));
// No.2
// var maxValue = function () {
//     var max = arguments[0];
//     for (var i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(maxValue(1, 2, 3));

// 5.求一个数组中的最小值
// No.1
// var minValue = function (arr) {
//     var min = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(minValue([20, 3, 4, 56, 7]));
// No.2
// var minValue = function () {
//     var min = arguments[0];
//     for (var i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }
// console.log(minValue(43, 34, 56, 76, 88));

// 6.求一个数组中的和
// No.1
// var sum = function (arr) {
//     var num = 0;
//     for (var i = 0; i < arr.length; i++) {
//         num += arr[i];
//     }
//     return num;
// }
// console.log(sum([12, 11, 10, 3, 5]));
// No.2
// var sum = function () {
//     var num = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         num += arguments[i];
//     }
//     return num;
// }
// console.log(sum(12, 13, 14));

// 7.判断一个数是否是素数(质数),只能被1和自身整除，质数是从2开始
// var prime = function (num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(prime(7) ? "是质数" : "不是质数");

// 8.通过函数实现数组反转
// var fan = function (arr) {
//     for (var i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }
// console.log(fan([12, 13, 14, 15, 16]));

// 9.通过函数实现冒泡排序
// var paixu = function (arr) {
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(paixu([23, 21, 18, 56, 78, 54]));

// 10.求一个数字的阶乘
// var jie = function (a) {
//     var num = 1;
//     for (var i = 1; i <= a; i++) {
//         num *= i;
//     }
//     return num;
// }
// console.log(jie(4));

// 11.求一个数字的阶乘和
// No.1
// var jie = function (a) {
//     var num = 1;
//     var sum = 0;
//     for (var i = 1; i <= a; i++) {
//         num *= i;
//         sum = sum + num;
//     }
//     return sum;
// }
// console.log(jie(5));
// No.2
// 借助上面的求阶乘一起做
// var jieSum = function (num) {
//     var sum = 0;
//     for (var i = 1; i <= num; i++) {
//         sum += jie(i);
//     }
//     return sum;
// }
// console.log(jieSum(5));

// 12.求斐波那契数列
// var fib = function (month) {
//     var num1 = 1;
//     var num2 = 1;
//     var sum = 0;
//     for (var i = 3; i <= month; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return sum;
// }
// console.log(fib(12));