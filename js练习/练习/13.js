// // 求所有元素的和
// var arr = [2, 4, 6, 7, 10];
// //先定义一个变量 代表和
// var sum = 0;
// // 遍历一遍数组
// for (var i = 0; i < arr.length; i++) {
//    求和
//     sum += arr[i];
// }
// console.log(sum);

// var arr = [2, 4, 6, 7, 10];
// 定于一个变量用来累加所有元素的和
// var num = 0;
// 遍历一遍数组
// for (var i = 0; i < arr.length; i++) {
// 把所有元素加起来求和
//     num += arr[i];
// } console.log(num);

// 平均数：所有数据的和/数据的的个数
// var arr = [40, 50, 120, 123, 100];
// // 1.求和
// var sum = 0; //和
// var avg = 0; //平均数
// // 遍历数组
// for(var i = 0; i < arr.length; i++){
//     // 把所有元素加起来
//     sum += arr[i];
// }
// // 2.平均数：用和除以个数
// avg = sum / arr.length;
// // 打印
// console.log("和是：" + sum + "平均数：" + avg);

// var arr = [40, 50, 120, 123, 100];
// // 1.求和
// var num = 0; //定义一个变量表示和
// var avg = 0; //定义一个变量表示平均数
// // 遍历数组
// for(var i = 0; i < arr.length; i++){
//     // 把每个元素加起来求和
//     num += arr[i];
// }
// // 2.求平均数
// // 用和除以个数
// avg = num / arr.length;
// // 打印
// console.log("和是：" + num + "平均数是：" + avg);

// // 求数组中所有元素中的最大值
// var arr = [23, 45, 87, 92, 97];
// // 先假设数组中的第一个数为最大值
// var max = arr[0];
// // 把每个数字拿出来
// for (var i = 0; i < arr.length; i++) {
//     // 判断 遍历的数是不是比最大值还要大 如果大 那他就是新的最大值
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// } console.log(max);

// var arr = [12, 13, 14, 15, 16];
// var max = arr[0];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }console.log(max);

// var min = arr[0];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }console.log(min)

// 倒叙遍历数组
// var arr = [23, 45, 87, 92, 97];
// for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// var arr = [11, 12, 13, 14, 15, 56];
// for(var i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }

// // 把数组中每个元素用 | 拼接到一起产生一个字符串并输出
// var arr= ["卡卡西","佐助","大蛇丸","雏田","黑崎一护"];
// // 1.声明一个新的变量 用来连接最后的结果
// var str = "";
// // 2.循环遍历 上面数组中的所有元素 除了第一个
// for(var i = 1; i < arr.length; i++){
//     // 打出结果
//     str = str + "|" + arr[i];
// }
// // 打补丁 把数组中的第一个元素跟后面的连接起来
// console.log(arr[0] + str);

// var arr = ["刘杰","大猪蹄子","猪头","猪蹄儿"];
// // 定义一个变量 用来连接最后的结果
// var str = "";
// // 循环遍历所有元素 除了第一个
// for(var i = 1; i < arr.length; i++){
//     // 结合
//     str = str + "|" + arr[i];
// }
// // 补丁 把第一个元素加进来
// console.log(arr[0] + str);