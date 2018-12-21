// 函数要先定义在使用

// 定义一个函数 打印一句话 
// function print() {
//     console.log("刘杰是个大猪蹄子");
// }
// print();

// function 变量名() {
//     函数体
//     return 值
// }
// 变量名()
// 函数表达式
// var print = function () {
//     console.log("刘杰是个大猪蹄子");
// }
// print();
// var 变量名 = function(){
//     函数体
//     return 值
// }
// 变量名();
// var 变量名 = function ()
// {
//     函数体
//     return 值
// }
// 变量名();

// 定义一个函数 求两个数字的和
// var sum = function (a, b) {
//     var c = a + b;
//     return c;
// }
// console.log(sum(1, 2));
// var sum = function (a, b) {
//     var c = a + b;
//     return c;
// }
// console.log(sum(18, 21));
// var sum = function (a, b) {
//     var c = a * b;
//     return c;
// }
// console.log(sum(3, 4));

// 3.定义一个函数,求两个数字的最大值(4 和 9)
// function max(){
//     var a = 9; 
//     var b = 8;
//     var c = a > b?a:b;
//     console.log(c);
// }
// max();

// 定义一个函数，求任意数之间的偶数和
// var sum = function (start, end) {
//     var num = 0;
//     for (var i = start; i <= end; i++) {
//         if(i % 2 == 0){
//             num += i;
//         }
//     }
//     return num;
// }
// console.log(sum(1, 100));

// var x=12,y="number";
// var m;
// m=x+y;
// console.log( m);

// var x = 6;
//    var name ="jim";
//    console.log(x+name);
//    console.log(Number(x+name));  
//    console.log(Boolean(x+name));

// 打印fn2,先找到fn2,发现调用了fn1,fn1输出a,所以为10。
// var a = 10;
// function fn1() {
//     console.log(a);
// }
// function fn2() {
//     var a = 20;
//     fn1();
// }
// fn2();//10

// var age = 19;
// var fn = function () {
//     age = 30;
//     console.log(age);
// }
// fn();//30

// var a = 10;
// function fn() {
//     var a;
//     console.log(a);
//     a = 20;
// }
// fn();//undefined

// var a = 10;
// function fn1() {
//     fn2();
//     console.log(a);
//     function fn2() {
//         var a = 20;
//     }
// }
// fn1();//10

// var a = 10;
// function aaa(a) {
//     a += 3;
// }
// console.log(a);//10