// 61.	N的阶乘是从1乘到N  比如 3的阶乘= 3*2*1  
// 1.计算并打印5的阶乘的结果
// var num = 1;
// for (var i = 1; i <= 5; i++) {
//     num *= i;
// }
// console.log(num);

// 62.	录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）
// var num = 12321;
// var gewei = parseInt(num / 1 % 10);
// var shiwei = parseInt(num / 10 % 10);
// var baiwei = parseInt(num / 100 % 10);
// var qianwei = parseInt(num / 1000 % 10);
// var wanwei = parseInt(num / 10000 % 10);
// if (gewei == wanwei && shiwei == qianwei && baiwei == baiwei) {
//     console.log(num + "是回文数");
// } else {
//     console.log(num + "不是回文数");
// }

// 63.	一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？
// var a = 0;
// for (var i = 1; i <= 80; i++) {
//     if (i % 5 == 0) {
//         a++;
//     }
// }
// console.log(a);

// 64.	定义数组 var arr = [11,22,33,44,55]
// 要求：使用for循环将arr数组的中的元素全部打印到控制台
// var arr = [11, 22, 33, 44, 55];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 65.	定义数组 var arr = [11,22,33,44,55]    
// 要求：求数组中所有的元素的和
// var arr = [11, 22, 33, 44, 55];
// var num = 0;
// for (var i = 0; i < arr.length; i++) {
//     num += arr[i];
// }
// console.log(num);

// 66.	求数组的的最值（最大值和最小值）
// 最大值
// var arr = [11, 22, 33, 44, 55];
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);
// 最小值
// var arr = [11, 22, 33, 44, 55];
// var min = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);

// 67.	定义数组 var arr = [11,22,33,44,55]  要求：将arr数组中为偶数的元素打印到控制台
// var arr = [11, 22, 33, 44, 55];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i]);
//     }
// }

// 68.	定义数组 var arr =[11,22,33,44,55]  要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台
// var arr = [11, 22, 33, 44, 55];
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// 69.	.分析以下需求并实现
// 1.定义一个用于存放班级分数的数组var score = {80,90,85,90,78,88,89,93,98,75};
// 2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
// 3.求出班级的平均分
// 4.求出班级的总分数
// var score = [80, 90, 85, 90, 78, 88, 89, 93, 98, 75];
// var a = 0;
// var num = 0;
// var avg = 0;
// for (var i = 0; i < score.length; i++) {
//     if (score[i] < 60) {
//         a++;
//     }
//     num += score[i];
// }
// console.log(a);
// avg = num / score.length;
// console.log("总分数是：" + num + "平均分是：" + avg);

// 70.	Var arr = {1,1,2,2,3,4,5,4,3,2,1}, 打印出数字 2现的次数。
// var arr = [1, 1, 2, 2, 3, 4, 5, 4, 3, 2, 1];
// var a = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 2) {
//         a++;
//     }
// } console.log(a);

// 71.	Var arr={2,1,5,4,8,9,7],使用弹框录入一个数字，找出该数字的索引值，如果不存在则返回-1
// var arr = [2, 1, 5, 4, 8, 9, 7];
// var num = prompt("请输入数字");
// var sum = null;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         sum = i;
//         break;
//     } else {
//         sum = -1;
//     }
// } document.write(sum);

// 72.	在数组中 查询数据第二次55出现的位置,打印第二次出现的索引 （索引指从0开始）
// var arr = [11, 32, 55, 47, 55, 79, 23];
// var a = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 55) {
//         a++;
//         if (a == 2) {
//             console.log(i);
//         }
//     }
// }

// 73.	定义一个int类型的数组，存储以下几个考试分数：
// 88   96   97   74   90    58    77   90   99    
// 计算这几个考试分数去掉最低分后剩余元素的平均分，并在控制台打印输出；
// var arr = [88, 96, 97, 74, 90, 58, 77, 90, 99];
// var min = arr[0];
// var a = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     a += arr[i];
// }
// console.log((a-min)/(arr.length - 1));

// 74.	已有数组var nums = {5,10,15},要求创建一个新数组
// 1.新数组的长度和已知数组相同
// 2.新数组每个元素的值，是已知对应位置元素的2倍
// 3.在控制台中打印新数组的所有元素
// var nums = [5, 10, 15];
// var num = [];
// for (var i = 0; i < nums.length; i++) {
//     num[i] = nums[i] * 2;
// }
// for (var j = 0; j < num.length; j++) {
//     console.log(num[j]);
// }

// 75.	已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容
// var arr = [1, 3, 5, 8, 10, 11, 16];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr[i] = arr[i] - 1;
//     } else {
//         arr[i] = arr[i] + 1;;
//     }
//     console.log(arr[i]);
// }

// 76.	已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
// 请查找出数组中是否有孙妍姿、汪菲。 
// 如果有，请给出索引；
// 如果没有给出-1。
// var names = ["周兴迟", "刘一飞", "赵本善", "孙妍姿", "王妃", "陈怡迅"];
// var num = false;
// for (var i = 0; i < names.length; i++) {
//     if (names[i] == "孙妍姿") {
//         num = true;
//         break;
//     }
// } if (num == true) {
//     console.log(i);
// } else {
//     console.log("-1");
// }
// var nums = false;
// for (var i = 0; i < names.length; i++) {
//     if (names[i] == "汪菲") {
//         nums = true;
//         break;
//     }
// } if (nums == true) {
//     console.log(i);
// } else {
//     console.log("-1");
// }

// 77.	定义一个整数数组，包含元素{1,3,4,7,8}，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
// var arr = [1, 3, 4, 7, 8];
// var a = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0 && i % 2 == 0) {
//         a++;
//         console.log(arr[i]);
//     }
// } console.log(a);

// 78.	数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
// var arr = [10, 5, 34, 59, 98];
// var max = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// } console.log(max);
// var arr = [10, 5, 34, 59, 98];
// var min = arr[0];
// var i = 0;
// while (i < arr.length) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     i++;
// } console.log(min);

// 79.	将下面的数组元素前后互换
// [11, 32，55, 47，79，23]	
// 置换后的数组元素为：
// [23, 79, 47, 55, 32, 11]
// var arr = [11, 32, 55, 47, 79, 23];
// for (var i = 0; i < arr.length / 2; i++) {
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }
// console.log(arr);

// 80.	按照从小到大的顺序排列 ，最后打印排序后的数组。 [10, 5, 34, 59, 98]
// var arr = [10, 5, 34, 59, 98];
// // 第一种方法
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             var temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);
// // 第二种方法
// for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

// 81.	var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
// 要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
// var newArr[]={1,3,4,5,6,6,5,4,7,6,7,5};
// var oldArr = [1, 3, 4, 5, 0, 0, 6, 6, 0, 5, 4, 7, 6, 7, 0, 5];
// var newArr = [];
// for (var i = 0; i < oldArr.length; i++) {
//     if (oldArr[i] != 0) {
//         newArr[newArr.length] = oldArr[i];
//     }
// }
// console.log(newArr);

// 82.	10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
// 1.	去除数组中重复的内容，只保留唯一的元素。
// 2.以下列格式打印数组：
// [9,10,6,1,3,5,4]
// var arr =[9,10,6,6,1,9,3,5,6,4];
// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// var a = [];
// var b = [];
// var j;
// for (i = 0; i < arr.length; i++) {
//     j = arr[i];
//     if (!a[j]) {
//         b.push(arr[i]);
//         a[j] = true;
//     }
// }
// console.log(b);

// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// var news = [];
// for (var i = 0; i < arr.length; i++) {
//     if (news.indexOf(arr[i]) == -1) {
//         news[news.length] = arr[i];
//     }
// } console.log(news);

// 83.	左奇右偶
// 10个整数的数组{26,67,49,38,52,66,7,71,56,87}。
// 1.	元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。
// 2.	以下列格式打印数组：
// [26,67,49,38,52,66,7,71,56,87] 
// var arr = [26, 67, 49, 38, 52, 66, 7, 71, 56, 87];
// var newArr = [];
// var newArrs = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         newArr[newArr.length] = arr[i];
//     }
//     if (arr[i] % 2 == 0) {
//         newArrs[newArrs.length] = arr[i];
//     }
// }
// console.log(newArr + ',' + newArrs);

