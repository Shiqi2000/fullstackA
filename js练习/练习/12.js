// 数组
// var age = [11, 12, 13, 14, 15, 16, 17, 18];
// console.log(age);
// // 数组长度
// var names = ["梁国平", "杨易", "许邓璇"];
// console.log(names.length);
// // 数组索引
// var names = ["梁国平", "杨易", "许邓璇"];
// console.log(names.length);
// 遍历数组
// var arr = [1, 2, 7, 5, 8, 0];
// for(i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// 求最小值
// var arrNum = [23, 45, 87, 92, 97];
// var minNum = arrNum[0];

// for(var i = 0; i < arrNum.length; i++){
//     if(arrNum[i] < minNum){
//         minNum = arrNum[i];
//     }
// }
//  console.log(minNum);
// 倒序遍历数组
// var arrNum = [23, 45, 87, 92, 97];
//  for(var i = arrNum.length - 1; i >= 0; i--){
//     console.log(arrNum[i]);
// }
// var names = ["卡卡西","佐助","鸣人","大蛇丸","雏田","小苏","凤姐","黑崎一护"];
// var str = "";
// for (var i = 0; i < names.length; i++){
//     str += "|" + names[i];
// }
// console.log(names[0] + str);

// 去重
// var arr = [10, 0, 20, 0, 30, 0, 50];
// var newArr = [];
// for (var i = 0 ; i < arr.length; i++){
//     if (arr[i] != 0){
//         newArr[newArr.length] = arr[i];
//     }
// }
// console.log(newArr); 
// var arr = [10, 0, 20, 30];
// var newArr = [];
// for (var i = 0; i < arr.length; i++){
//     if(arr[i] != 0){
//         newArr[newArr.length] = arr[i];
//     }
// }
// console.log(newArr);
// var ser = [11, 12, 0, 9];
// var newSer = [];
// for(var i = 0; i < ser.length; i++){
//     if(ser[i] != 0){
//         newSer[newSer.length] = ser[i];
//     }
// }
// console.log(newSer);
// var num = [12, 14, 0, 18, 0];
// var newNum = [];
// for (var i = 0; i < num.length; i++){
//     if(num[i] != 0){
//         newNum[newNum.length] = num[i];
//     }
// }
// console.log(newNum);
// var sum = [12, 13, 0, 9, 0];
// var newSum = [];
// for(var i = 0; i < sum.length; i++){
//     if(sum[i] != 0){
//         newSum[newSum.length] = sum[i];
//     }
// }
// console.log(newSum);

// 倒序遍历数组
// var arrNum = [23, 45, 87, 92, 97];
//  for(var i = arrNum.length - 1; i >= 0; i--){
//     console.log(arrNum[i]);
// }
// var num = [12, 13, 54, 87, 18];
// for (var i = num.length - 1; i >= 0; i--){
//     console.log(num[i]);
// }
// var sum = [12, 45, 67, 89, 30];
// for (var i = sum.length - 1; i >= 0; i--){
//     console.log(sum[i]);
// }
// var jie = [18, 15, 10, 21];
// for (var i = jie.length; i >= 0; i--){
// console.log(jie[i]);
// }

// var names = ["卡卡西","佐助","鸣人","大蛇丸","雏田","小苏","凤姐","黑崎一护"];
// var str = "";
// for (var i = 0; i < names.length; i++){
//     str += "|" + names[i];
// }
// console.log(names[0] + str);
// var names = ["刘杰","大猪蹄子","猪头"];
// var shu = "";
// for (var i = 0; i < names.length; i++){
//     shu += "|" + names[i];
// }
// console.log(shu);
// 反转数组
// var num = [10, 20, 30, 40];
// for (var i = 0; i < num.length / 2; i++){
// var temp = num[i];
// num[i] = num[num.length - 1 - i];
// num[num.length - 1 - i] = temp;
// }
// console.log(num);
var num = [11, 12, 13, 14, 15, 16];
for (var i = 0; i < num.length / 3; i++) {
    var temp = num[i];
    num[i] = num[num.length - 1 - i];
    num[num.length - 1 - i] = temp;
}
console.log(num);