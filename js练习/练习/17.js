// 定义一个函数 求任意两个数的和
// var sum = function(a, b){
//  var c = a + b;
//  return c;
// }
// console.log(sum(3, 5));

// 定义一个函数，求任意两个数的最大值
// var max = function (a, b) {
//     var c = a > b ? a : b;
//     return c;
// }
// console.log(max(32, 34));

// 定义一个函数，求任意数之间的偶数和
// var sum = function (start, end) {
//     var num = 0;
//     for (var i = start; i <= end; i++) {
//         if (i % 2 == 0) {
//             num += i;
//         }
//     }
//     return num;
// }
// console.log(sum(1, 100));

// 定义一个函数，求任何一个数组中元素的和
// var sum = function (arr) {
//     var num = 0;
//     for (var i = 0; i < arr.length; i++) {
//         num += arr[i];
//     }
//     return num;
// }
// console.log(sum([12, 13, 14, 15]));

// 判断一个数是否是素数(质数),只能被1和自身整除，质数是从2开始
// 用这个数字和这个数字前面所有的数字整除一次(没有1的，没有自身的)
// var prime = function (a) {
//     for (var i = 2; i < a; i++) {
//         if (a % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(prime(4) ? "是质数" : "不是质数");

// var prime = function (num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(prime(13) ? "是质数" : "不是质数");

// 通过函数实现数组反转 
// var fan = function (arr) {
//     for (var i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }
// console.log(fan([13, 14, 15, 16]));

// var nixu = function (arr) {
//     for (var i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }
// console.log(nixu([32, 43, 53, 66, 87, 65, 54, 33]));

// 通过函数实现冒泡排序
// var pop = function (arr) {
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
// console.log(pop([32, 34, 55, 12, 13, 9]));

// 求一个数字的阶乘
// var jie = function (a) {
//     var num = 1;
//     for (var i = 1; i <= a; i++) {
//         num *= i;
//     }
//     return num;
// }
// console.log(jie(5));

// var jc = function (num) {
//     var sum = 1;
//     for (var i = 1; i <= num; i++) {
//         sum *= i;
//     }
//     return sum;
// }
// console.log(jc(5));

// 求一个数字的阶乘和 5的阶乘和
// var jc = function (num) {
//     var sum = 1;
//     var summ = 0;
//     for (var i = 1; i <= num; i++) {
//         sum *= i;
//         summ = summ + sum;
//     }
//     return summ;
// }
// console.log(jc(5));

// var jc = function (a) {
//     var num = 1;
//     var sum = 0;
//     for (var i = 1; i <= a; i++) {
//         num *= i;
//         sum += num;
//     }
//     return sum;
// }
// console.log(jc(5));

// var jcsum = function (num) {
//     var sum = 0;
//     for (var i = 1; i <= num; i++) {
//         sum += jc(i);
//     }
//     return sum;
// }
// console.log(jcsum(5));

// var jc = function (a) {
//     var num = 1;
//     var sum = 0;
//     for (var i = 1; i <= a; i++) {
//         num *= i;
//         sum += num;
//     }
//     return sum;
// }
// console.log(jc(5));

// 需求：输入年月日，获取这个日期是这一年的第多少天
// 分析：写一个函数：参数有三个（年月日）
// 步骤：
// 1.定义一个函数，传入三个函数year,month,day
// var getDays = function (year, month, day) {
//     // 把day的数存起来
//     var days = day;
//     // 判断是不是一月，如果是一月，直接返回days
//     if (month == 1) {  
//         return days;
//     }
//     // 如果不是一月，把所有月份存起来 遍历 该月以前的每个月的天数加起来
//     var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     // month代表输入的月份
//     // months代表一年中每个月份的天数
//     for (var i = 0; i < month - 1; i++) {
//         days += months[i];
//     }
//     // 判断是不是大于二月且该年是闰年 如果两个条件同时满足 让计算的天数加1
//     if (month > 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
//         days++;
//     }
//     return days;
// }
// console.log(getDays(2018, 3, 13));

// 定义一个函数，参数有三个年月日
// var getDays = function (year, month, day) {
//     var days = day;
//     if (month == 1) {
//         return days;
//     }
//     var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     for (var i = 0; i < month - 1; i++) {
//         days += months[i];
//         if (month > 2 && (year % 4 == 0 && year % 100 != 0 || year % 100 == 0)) {
//             days++;
//         }
//     }
//     return days;
// }
// console.log(getDays(2018, 1, 18));

// 先定义一个函数，有三个参数代表年月日
// var getDays = function (year, month, day) {
    // 设置一个变量把天数存起来
    // days = day;
    // 如果是一月 就直接返回天数
    // if (month == 1) {
    //     return days;
    // }
    // 如果不是一月 把所有月份存起来 遍历 该月以前每个月的天数加起来
    // var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // for (var i = 0; i < month - 1; i++) {
    //     days += months[i];
        // 如果月份大于二月 且 是闰年 就计算完之后再加一天
        // if (month > 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
        //     days++;
        // }
    // }
    // return days;
// }
// console.log(getDays(2018, 10, 21));