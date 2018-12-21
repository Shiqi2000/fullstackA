// 21.	提示用户输入年龄，若用户的年龄大于等于18岁，则给用户在网页中显示一张图片，否则以弹出框的方式提示用户年龄太小。
// var age = prompt("请输入您的年龄");
// if (age >= 18) {
//     document.write(' <img src="./京东.gif">');
// } else{
//     alert("对不起，您的年龄太小");
// }

// 22.	给两个不同的数字分别赋值num1 和 num2，求出最大值。（三元表达式实现）
// var num1 = 18;
// var num2 = 21;
// console.log(num1 > num2 ? "num1" : "num2");

// 23.	给一个数字赋值给一个变量num1，求出是奇数 还是 偶数
// var num1 = 7;
// if(num1 % 2 == 0){
//     console.log(num1 + "是偶数");
// } else{
//     console.log(num1 + "是奇数");
// }

// 24.	接收班长口袋里的钱数？若大于等于2000，请大家吃西餐。若小于2000，大于等于1500，请大家吃快餐。若小于1500，大于等于1000，请大家喝饮料。若小于1000，大于等于500，请大家吃棒棒糖。否则提醒班长下次把钱带够
// var money = 2100;
// if(money >= 2000){
//     console.log("吃西餐");
// } else if(money >= 1500 && money < 2000){
//     console.log("吃快餐");
// } else if(money >= 1000 && money < 1500){
//     console.log("喝饮料");
// } else if(money >= 500 && money < 1000){
//     console.log("吃棒棒糖");
// } else {
//     console.log("请班长下次把钱带够");
// }

// 25.	分数转换,给一个分数，判定等级。大于等于90  A，大于等于80小于90  B，大于等于70小于80  C ，大于等于60小于70 D，小于60 E
// var score = 80;
// if(score >= 90 && score < 100){
//     console.log("A");
// } else if(score >= 80 && score < 90){
//     console.log("B");
// } else if(score >= 70 && score < 80){
// console.log("C");
// } else if(score >= 60 && score < 70){
//     console.log("D");
// } else if(score >= 0 && score < 60){
//     console.log("E");
// } else{
//     console.log("抱歉，您输入错误！");
// }

// 26.	给一个数字（0,1,2,3,4,5,6），返回星期数，0是星期日。
// var num = 7;
// switch(num){
//     case 0:
//     console.log("星期天");
//     break;
//     case 1:
//     console.log("星期一");
//     break;
//     case 2:
//     console.log("星期二");
//     break;
//     case 3:
//     console.log("星期三");
//     break;
//     case 4:
//     console.log("星期四");
//     break;
//     case 5:
//     console.log("星期五");
//     break;
//     case 6:
//     console.log("星期六");
//     break;
//     default:
//     console.log("抱歉，您输入错误！");
//     break;
// }

// 27.	判断一个年份是闰年还是平年。闰年：能被4整除，但不能被100整除的年份 或者 能被400整除的年份
// var year = 2016;
// if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//     console.log("闰年");
// }else{
//     console.log("平年");
// }

// 28.  交换两个变量的值
// var a = 18;
// var b = 21;
// var temp = null;
// temp = a;
// // console.log(temp);
// a = b;
// // console.log(a);
// b = temp;
// // console.log(b);
// console.log(a, b);

// 29.	求1-100之间所有数的总和 与 平均值
// var num = 0;
// var sum = 0;
// for(var i = 1; i <= 100; i++){
//     num += i;
//     sum = num / 100;
// }
// console.log(num);
// console.log(sum);

// 30.	求1-100之间所有偶数的和
// var num = 0;
// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         num += i;
//     }
// } console.log(num);

// 31.	求100以内 7的倍数的总和
// var num = 0;
// for (var i = 0; i <= 100; i++) {
//     if (i % 7 == 0) {
//         num += i;
//     }
// }
// console.log(num);

// 32.	打印矩形  document.write(“☆”)，要求每次只能输出一个☆
// for (var i = 0; i < 4; i++) {
//     var row = "";
//     for (var j = 0; j < 5; j++) {
//         row = row + "☆ ";
//     }
//     document.write(row);
//     document.write("<br>");
// }

// 33.	接收用户输入的用户名和密码，若用户名为 “admin” ,密码为 “123456” ,提示用户登录成功!  否则，让用户是指输入正确为止！
// var username = "";
// var password = "";
// do {
//     username = prompt("请输入用户名");
//     password = prompt("请输入密码");
// } while (username != "admin" || password != "123456");
// if (username == "admin" && password == "123456") {
//     alert("登陆成功");
// }

// 34.	求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】
// var num = 0;
// for (var i = 1; i <= 100; i++) {
//     if (i % 10 == 3) {
//         continue;
//     }
//     num += i;
// }
// console.log(num);

// 35.	本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？
// var money = 10000;
// var rate = 0.003;
// for (var i = 0; i < 5; i++) {
//     // 利息 = 本金 * 利率
//     money = money + money * rate;
// }
// console.log(money);

// 36.	定义成绩变量 a=60  b=38  使用三元运算符如果成绩大于等于60返回"及格",否则返回不"及格"
// var a = 60;
// var b = 38;
// console.log(a >= 60 ? "及格" : "不及格");
// console.log(b >= 60 ? "及格" : "不及格");   


// 37.	定义两个变量  a=50  b=80  ,计算并返回 a b 的最大的数
// var a = 50;
// var b = 80;
// console.log(a > b ? "a是最大值" : "b是最大值");

// 38.	定义三个变量  a=50  b=80   c=100  ,计算并返回 a b c的最大的数
// var a = 50;
// var b = 80;
// var c = 100;
// if (a > b) {
//     if (a > c) {
//         console.log("a是最大值");
//     } else {
//         console.log("c是最大值");
//     }
// } else {
//     if (b > c) {
//         console.log("b是最大值");
//     } else {
//         console.log("c是最大值");
//     }
// }

// 39.	在网页中输入名字, 年龄， 地址，打印出:我是XXX,今年XX岁了，我来自XXX。
// var username = prompt("请输入姓名");
// var age = prompt("请输入年龄");
// var address = prompt("请输入地址");
// document.write("我是" + username, "今年" + age + "岁了", "我来自" + address);

// 40.	获取当前时间，判断今年是否为闰年。两种方法判断 
// 1.判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除
// 2.判断本年2月是否为28天。闰年：2月有29天  平年：2月有28天
// var year = 2008;
// if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
//     console.log("闰年");
// } else {
//     console.log("平年");
// }

