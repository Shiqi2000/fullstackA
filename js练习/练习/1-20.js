// 1.	利用JavaScript完成如下功能：判断如果a>60，则b=1；如果a>70，则b=2；如果a>80，则b=3；如果a>90，则b=4 ,在页面弹出对应b的值
// var a = 59;
// if(a >= 60 && a < 70){
//     var b = 1;
//     console.log(b)
// } else if(a >= 70 && a < 80){
//     var b = 2;
//     console.log(b)
// } else if(a >= 80 && a < 90){
//     var b = 3;
//     console.log(b)
// } else if(a >= 90){
//     var b = 4;
//     console.log(b)
// } else {
//     console.log("抱歉，您输入错误！")
// }

// 2.	利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数 
// var num = 3;
// if(parseInt(num.toString()) == parseFloat(num.toString())){
//     console.log(num + "是整数");
// } else {
//     console.log(num + "是小数");
// }

// 3.	利用JavaScript编写程序：通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），并在页面上输出判断结果。
// var age = 18;
// if(age >= 0 && age < 14){
//     console.log("儿童");
// } else if(age >= 14 && age < 24){
//     console.log("青少年");
// } else if(age >= 24 && age < 40){
//     console.log("青年");
// } else if(age >= 40 && age < 60){
//     console.log("中年");
// } else if(age >= 60){
//     console.log("老年");
// } else{
//     console.log("抱歉，您输入错误！");
// }

// 4.	利用JavaScript的console实现在控制台输出”我是传智学院的一名学生，我为自己代言”
// console.log("我是传智学院的一名学生，我为自己代言");

// 5.	利用JavaScript定义变量a，赋值为88，并且在控制台打印输出变量a的值
// var a = 88;
// console.log(a);

// 6.	利用JavaScript定义一个变量，赋值，并且在控制台打印输出变量的类型
// var a = 21;
// console.log(typeof a);

// 7.	世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：
// 华氏度 = 9/5 * 摄氏度 + 32
// 用JavaScript编写程序，要求：当用户输入摄氏度，向用户提示出对应的华氏温度
// var temp = 15;
// var hua = (9 / 5) * 15 + 32;
// console.log(hua);

// 8.	利用JavaScript完成如下功能：当用户输入一个三位数，用程序计算三位数字的和比如：
// 用户输入156，就弹出12
// 用户输入116，就弹出8
// 用户输入189，就弹出18
// 注意：用户输入数字的有效性、合法性不用考虑。比如，如果用户输入34343、“我爱你”，这种情况我们不要去考虑，你就想像，用户会非常乖，一定会输入3位数的。这是因为我们没有学习if语句。
// var num = 0;
// var sum = 125;
// //   取个位          取十位             取百位
// num = (sum % 10) + (sum / 10 % 10) + (sum / 100 % 10);
// console.log(parseInt(num));

// 9.	利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几  
// var day = (1000 % 7) % 7;
// if(day == 1) {
//     console.log("星期日");
// }  else if(day == 2) {
//     console.log("星期一");
// }  else if(day == 3) {
//     console.log("星期二");
// }  else if(day == 4) {
//     console.log("星期三");
// }  else if(day == 5) {
//     console.log("星期四");
// }  else if(day == 6) {
//     console.log("星期五");
// }  else{
//     console.log("星期六");
// }

// 10.	利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字
// var i = 0;
// for ( var i = 1; i <= 1000; i++){
//     if(i % 5 == 0 || i % 6 == 0){
//         console.log(i);
//     }
// }

// 11.	用户输入一个数字，列出所有它能够整除的数字。比如用户输入48，那么控制台中将显示：比如，用户输入19，那么控制台显示1,19
// 比如，用户输入21，那么控制台显示 1,3,7,21
// var a = 18;
// for (var i = 0; i <= a; i++) {
//     if (a % i == 0) {
//         console.log(i);
//     }
// }

// 12.	利用JavaScript求1-100的数之和，并在控制台输出
// var num = 0;
// for(var i = 1; i <= 100; i++){
//     num += i;
// }
// console.log(num);

// 13.	利用js求13的阶乘，并在控制台输出
// var num = 1;
// for (i = 1; i <= 13; i++) {
//     num *= i;
// }
// console.log(num);

// 14.	利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）  
// for (var num = 5; num >= 1; num--){
//     for(var x = 1; x <= num; x++){
//         document.write("&nbsp;");
//     }
//     for(var y = 5 - num; y >= 0; y--){
//         document.write("* ");
//     }
//     document.write("<br>");
// }


// 15.	利用JavaScript完成如下九九乘法表
for (var i = 1; i <= 9; i++) {
    var row = "";
    for (var j = 1; j <= i; i++) {
        row = row + j + "x" + i + "=" + j * i + " ";
    }
    console.log(row);
}

// 16.	利用JavaScript，使用循环语句输出如下菱形图案（由“-”和“*”这两种符号组成）
// var i, j, k;
    //先打印上面4行
    // for (i = 0; i < 4; i++) {
        //打印“-”
        // for (j = 0; j < 3 - i; j++) {
        //     document.write("-");
        // }
        //打印“*”
        // for (k = 0; k < 2 * i + 1; k++) {
        //     document.write("*");
        // }
        //换行
        // document.write("<br/>");
    //后打印下面3行
    // for (i = 0; i < 3; i++) {
        //打印“-”
        // for (j = 0; j < i + 1; j++) {
        //     document.write("-");
        // }
        //打印“*”
        // for (k = 0; k < 5 - 2 * i; k++) {
        //     document.write("*");
        // }
        //换行
        // document.write("<br/>");

// 17.	利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次 方＋5的三次方＋3的三次方
// for (var i = 100; i <= 1000; i++) {
//     var ge = i % 10;
//     var shi = i / 10 % 10;
//     var s = parseInt(shi);
//     var bai = i / 100 % 10;
//     var b = parseInt(bai);
//     if (i == ge * ge * ge + s * s * s + b * b * b) {
//         console.log(i);

//     }
// }

// 18.	利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）
// 例如：2 3 5 7 11 。。。等只有被1和自身整除的数字
// for (var i = 2; i <= 100; i++) {
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0)
//             break;
//     }
//     if (j >= i) {
//         document.write(i + "&nbsp;&nbsp;");
//     }
// }

// 19.	利用JavaScript求：1+2+3+…+100的和
// var num = 0;
// var i = 1;
// while (i <= 100) {
//     num += i;
//     i++;

// }
// console.log(num);

// 20.	提示用户输入年龄，若用户的年龄大于等于18岁，则给用户在网页中显示一张图片，否则不显示。
// var age = prompt("请输入您的年龄");
// if (age >= 18) {
//     document.write(' <img src="./京东.gif">');
// }


