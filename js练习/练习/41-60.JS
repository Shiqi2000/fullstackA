// 41.	根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
// var num = 6;
// if(num >= 1 && num <= 5){
//     console.log("工作日");
// } else if(num >= 6 && num <= 7){
//     console.log("休息日");
// } else {
//     console.log("抱歉，您输入错误！");
// }

// 42.	录入姓名和性别根据输入的姓名，性别，打印欢迎XX先生/女士。（性别用0和1区别。0表示女士，1表示男士）
// var names = "liujie";
// var sex = 1;
// if(sex == 0){
//     console.log("欢迎" + names + "女士");
// } else if(sex == 1){
//     console.log("欢迎" + names + "男士");
// } else{
//     console.log("抱歉，您输入错误！");
// }

// 43.	输出该数字打头的一个成语，视为你今天的状态
// 1：一帆风顺
// 2：二话不说
// 3：三心二意
// 4：四面楚歌
// 5：五湖四海
// 6：六亲不认
// 7：七上八下
// var day = 3;
// switch(day){
//     case 1 :
//     console.log("一帆风顺");
//     break;
//     case 2 :
//     console.log("二话不说");
//     break;
//     case 3 :
//     console.log("三心二意");
//     break;
//     case 4 :
//     console.log("四面楚歌");
//     break;
//     case 5 :
//     console.log("五湖四海");
//     break;
//     case 6 :
//     console.log("六亲不认");
//     break;
//     case 7 :
//     console.log("七上八下");
//     break;
//     default :
//     console.log("抱歉，您输入错误！");
//     break;
// }

// 44.	键盘录入学生考试成绩，使用if语句判断成绩等级，并打印出来。
// 90-100 优秀
// 80-90 好
// 70-80 良
// 60-70 及格
// 60以下 不及格
// var score = 70;
// if(score >= 90 && score <= 100){
//     console.log("优秀");
// } else if(score >= 80 && score < 90) {
//     console.log("好");
// } else if(score >= 70 && score < 80) {
//     console.log("良");
// } else if(score >= 60 && score < 70) {
//     console.log("及格");
// } else if (score >= 0 && score < 60) {
//     console.log("不及格");
// } else {
//     console.log("抱歉，您输入错误！");
// }

// 45.	录入一个整数,判断它能否被3,5,7整除,并输出以下信息
// (1)能同时被3,5,7整除
// (2)能被其中两个数整除(要指出那两个数)
//    	If()
//  	(3)只能被其中一个数整除(指出那一个)
// (4)不能被3,5,7任一个整除
// var num = 35;
// if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
//     console.log("能同时被3,5,7整除");
// } else if (num % 3 == 0 && num % 5 == 0) {
//     console.log("能被3和5整除");
// } else if (num % 3 == 0 && num % 7 == 0) {
//     console.log("能被3和7整除");
// } else if (num % 5 == 0 && num % 7 == 0) {
//     console.log("能被5和7整除");
// } else if (num % 3 == 0) {
//     console.log("只能被3整除");
// } else if (num % 5 == 0) {
//     console.log("只能被5整除");
// } else if (num % 7 == 0) {
//     console.log("只能被7整除");
// } else if (num % 3 != 0 && num % 5 != 0 && num % 7 != 0) {
//     console.log("不能被3,5,7任何一个整除");
// }

// 46.	录入两个整数a和b,若a+b大于100,则输出a+b大于100的部分,否则输出两数之和.
// var a = 18;
// var b = 90;
// if(a + b > 100){
//     console.log((a + b) - 100);
// } else{
//     console.log(a + b);
// }

// 47.	输入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型
// 等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）
// var a = 5;
// var b = 7;
// var c = 12;
// if (a == b && b == c && a == c){
//     console.log("等边三角形");
// } else if(a == b || a == c || b == c){
//     console.log("等腰三角形");
// } else if(a * a + b * b == c * c && a != b){
//     console.log("直角三角形")
// } else{
//     console.log("其他三角形");
// }

// 48.	录入一个三位数，按逆序打印出各位数字。例如原数字为321，应输出123。
//    var num = 321;
//    var gewei = parseInt(num % 10);
//    var shiwei = parseInt(num / 10 % 10);
//    var baiwei = parseInt(num / 100 % 10);
//    console.log(gewei * 100 + shiwei * 10 + baiwei);

// 49.	请编写程序，要求输入身高，体重后，输出体质指数
// var height = 1.75;
// var weight = 75;
// var BMI = weight / (height * height);
// if(BMI < 18.5){
//     console.log("过轻");
// } else if(BMI >= 18.5 && BMI <= 23.9){
//     console.log("正常");
// } else if(BMI >= 24 && BMI <= 27){
//     console.log("过重");
// } else if(BMI >= 28 && BMI <= 32){
//     console.log("肥胖");
// } else if(BMI > 32){
//     console.log("非常肥胖");
// }

// 50.	测量一个人的体质指数，体质指数（BMI）=体重（kg）÷身高^2（m），
// 成人的BMI数值：
// 过轻：低于18.5
// 正常：[18.5,23.9]
// 过重：[24,27]
// 肥胖：[28,32]
// 非常肥胖, 高于32

// 51.	录入月份，输出对应的季节
// (1)键盘录入一个整数(代表月份,范围1-12)
// (2)输出该月份对应的季节
//       3,4,5春季
//       6,7,8夏季
//       9,10,11秋季
//       12,1,2冬季
// (3)演示格式如下:
//       请输入一个月份:3
//       控制台输出:3月份是春季"
// var mouth = 12;
// if(mouth == 3 || mouth == 4 || mouth == 5){
//     console.log(mouth + "月份是春季");
// } else if(mouth == 6 || mouth == 7 || mouth == 8){
//     console.log(mouth + "月份是夏季");
// } else if(mouth == 9 || mouth == 10 || mouth == 11){
//     console.log(mouth + "月份是秋季");
// } else if(mouth == 12 || mouth == 1 || mouth == 2){
//     console.log(mouth + "月份是冬季");
// } else {
//     Console.log("抱歉，你您输入错误！");
// }

// 52.	打印1-100中前三个17的整数倍。
// var a = 0;
// for (var i = 1; i <= 100; i++) {
//     if (i % 17 == 0) {
//         a++;
//         if (a < 4) {
//             console.log(i);
//         }
//     }
// }

// 53.	小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。
// for (var i = 1; i <= 30; i++) {
//     if (i != 4 && i != 7 && i != 14 && i != 18 && i != 24) {
//         console.log(i);
//     }
// }

// 54.	求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.
// var num = 0;
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         num += i;
//     }
// } console.log(num);

// 55.	打印一个 5行4列的矩形
// for (var j = 0; j < 5; j++) {
//     var row = "";
//     for (var i = 0; i < 4; i++){
//         row = row + "* ";
//     }
//     console.log(row);
// }

// 56.	要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。（使用while循环）
// for (var i = 1; i < 50; i++) {
//     var p = 3.14;
//     var m = p * i;
//     var i = parseInt(i);
//     if (p * i < 50) {
//         console.log(i);
//     }
// }

// 57.	遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台
// var a = 0;
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 == 0 && i % 2 == 0) {
//         a++;
//     }
// } console.log(a);

// 58.	打印1到100之内的整数，但数字中包含9的要跳过
// for (var i = 1; i <= 100; i++) {
//     if (i % 10 != 9 && (i - i % 10) / 10 != 9) {
//         console.log(i)
//     }
// }

// 59.	题意是这样的：5文钱可以买一只公鸡，3文钱可以买一只母鸡，1文钱可以买3只雏鸡。现在用100文钱买100只鸡，那么各有公鸡、母鸡、雏鸡多少只？
// for (var a = 1 ; a <= 20; a++){    //公鸡最多能买20只
//     for(var b = 1; b<=33; b++){    //母鸡最多只能买33只
//                    c=100-a-b;//雏鸡的数量可通过计算得出
//             if(a + b + c == 100 && a * 5 + b * 3 + c / 3 == 100){
//             console.log('公鸡、母鸡、雏鸡的数量分别是：' + a + "," + b + "," + c);           
//         }
//     }
// }

// 60.	一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，编程实现获取它在 第10次落地时，共经过多少米？第10次反弹多高？

var x =1;
var y =0;
var z =0;
function test(n){n=n+1;}
y = test(x);
function add(n){n=n+3;}
z =add(x);
console.log(y);
console.log(z);