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
// console.log(pop([13, 14, 10, 65, 76]));

// console.log("hello+world");
// console.log(Number(1+"hello"));
// var x = 6;console.log(x +"jim");

// var num1 = 10;
// var num2 = num1;
// num1 = 20;
// console.log(num1);
// console.log(num2);

// var num = 50;
// function f1(num) {
//     num = 60;
//     console.log(num);
// }
// f1(num);
// console.log(num);

// var num1 = 55;
// var num2 = 66;
// function f1(num, num1) {
//   num = 100;
//   num1 = 100;
//   num2 = 100;
//   console.log(num);
//   console.log(num1);
//   console.log(num2);
// }

// f1(num1, num2);
// console.log(num1);
// console.log(num2);
// console.log(num);


// 1.prompt输入得到的是字符串类型的，parseInt可以把字符串转换为数字，取到的结果为整数，小数部分得不到。
// var num = prompt("请输入一个数字");
// function fn(num){
//     if(isNaN(num) == false){
//         a = parseInt(num);
//         b = parseFloat(num);
//         if(num == a){
//             console.log(a);
//         } else{
//             console.log(b);
//         }
//     }
// }
// fn(num);

// var num = prompt("请输入一个数字");
// function fn (num){
//     if(isNaN(num) == false){
//         a = parseInt(num);
//         b = parseFloat(num);
//         if(num == a){
//             console.log(a);
//         } else{
//           console.log(b);
//         }
//     }
// }
// fn(num);

// 2.求一组数中的最小值及其索引值
// var arr = [18, 13, 14, 15];
// function fn() {
//     var min = arr[0];
//     var mins = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//             mins = i;
//         }
//     }
//     console.log(min);
//     console.log(mins);
// }
// fn(arr);

// 3.不借助临时变量，进行两个整数的交换
// function fn(a, b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log(a, b);
// }
// fn(4, 5);

// 4.定义一个函数，实现求两个任意正整数的最大公约数
// function fn(min, max) {
//     var arr = 0;
//     for (var i = 1; i <= min; i++) {
//         if (min % i == 0 && max % i == 0) {
//             arr = i;
//         }
//     }
//     console.log(arr);
// }
// fn(12, 60);

// 5.定义一个函数，实现求两个数组的交集
// function fn(arr1, arr2) {
//     var arr3 = [];
//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 arr3[arr3.length] = arr2[j];
//             }
//         }
//     }
//     console.log(arr3);
// }
// fn([12, 13, 14, 15], [14, 15, 16, 17]);


// 6.定义一个函数，实现求两个数组的并集
// function fn(arr1, arr2) {
//     for (var i = 0; i < arr1.length; i++) {
//         if (arr2.indexOf(arr1[i]) == -1) {
//             arr2[arr2.length] = arr1[i];
//         }
//     }
//     console.log(arr2);
// }
// fn([14, 15, 16, 17], [12, 13, 14, 15]);

// 定义一个函数，实现找出下列正数组中的最大差值：[10, 5, 11, 4, 9]

for (var i = 1; i <= 9; i++) {
    var row = "";
    for (var j = 1; j <= i; i++) {
        row = row + j + "x" + i + "=" + j * i + " ";
    }
    console.log(row);
}
