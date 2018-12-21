// 定义一个对象
// var Liu = {
//     name: "刘杰",
//     age: 21,
//     sex: "男",
//     hobby: "王永红",
//     say: function(){
//         console.log('我会永远爱王永红');
//     },
//     skill: ["眼光好","大猪蹄子"],
// }
// console.log(Liu);

// var duiXiang = {
//     name: "刘杰",
//     age: 21,
//     sex: "男",
//     hobby: ["王永红", "打游戏", "敲代码"],
//     say: function(){
//         console.log("刘杰永远爱王永红")
//     }
// }
// console.log(duiXiang);

// var duiXiang = {
//     name: "刘杰",
//     age: 21,
//     sex: "男",
//     hobby: ["王永红", "还是王永红", "一直都是王永红"],
//     job: "王永红的大猪蹄子",
//     say: function () {
//         console.log("爱王永红一辈子");
//     }
// }
// console.log(duiXiang);

// 获取对象的属性的值
// 格式： 对象名.键 / 对象名["键"]
// var LJ = {
//     name: "刘杰",
//     age: 18,
// }
// console.log(LJ.name);
// console.log(LJ["age"]);
// var WYH = {
//     name: "王永红",
//     age: 18,
// }
// console.log(WYH.name);
// console.log(WYH["age"]);

// var LW = {
//     name: "刘杰",
//     names: "王永红",
// }
// console.log(LW.name);
// console.log(LW["names"]);

// 设置对象属性的值
// var duiXiang = {}
// duiXiang.name = "刘杰";
// duiXiang.age = 18;
// duiXiang.hobby = ["王永红"];
// duiXiang.say = function(){
//     console.log("刘杰是大猪蹄子");
// }
// console.log(duiXiang);
// duiXiang.say();
//  var dui = {};
//  dui.name = "王永红";
//  dui.age = 18;
//  console.log(dui);
// var duiXiang = {
//     name: "王永红",
// }
// duiXiang.age = 18;
// console.log(duiXiang);

// 遍历对象
// var duiXiang = {
//     name: "刘杰",
//     age: 21,
//     sex: "男",
//     hobby: ["王永红", "还是王永红", "一直都是王永红"],
//     job: "王永红的大猪蹄子",
//     say: function () {
//         console.log("爱王永红一辈子");
//     }
// }
// for(var key in duiXiang){
//         // console.log(key);
//         console.log(duiXiang[key]);
// }

// var dui = {
//     name: "刘杰",
//     age: 21,
//     sex: "男",
//     hobby: ["王永红"],
//     say: function(){
//         console.log("刘杰是大猪蹄子");
//     }
// }
// for(var key in dui){
//     // console.log(key);
//     console.log(dui[key]);
// }

// 遍历对象
// for(var key in 变量名){
//     console.log(key); ---打印属性
//     console.log(变量名[key]);---打印值
// }

// var duiXiang = {
//     name: "刘杰",
//     age: 18,
// }
// for(var key in duiXiang){
//     // console.log(key);
//     console.log(duiXiang[key]);
// }

// 删除对象的属性
// delete 对象.属性

// var duiXiang = {
//     name: "刘杰",
//     sex: "男",
// }
// delete duiXiang.name;
// console.log(duiXiang);

// var dui = {
//     name: "刘杰",
//     age: 18,
//     sex: '男',
//     say: function(){
//         console.log("爱王永红一辈子");
//     }
// }
// delete dui.name;
// delete dui.age;
// console.log(dui);

// var duiXiang = {
//     name : "刘杰",
//     hobby: ["王永红", "一辈子的王永红"],
//     say: function(){
//         console.log("王永红一辈子的大猪蹄子");
//     }
// }
// delete duiXiang.name;
// console.log(duiXiang);

// 使用系统构造函数创建对象
// 格式： var 变量名 = new Object();

// var LiuJie = new Object();
// LiuJie.name = "刘杰";
// LiuJie.age = 21;
// LiuJie.sex = "男";
// console.log(LiuJie);

// var Wyh = new Object();
// Wyh.nmae = "王永红";
// Wyh.age = 18;
// Wyh.sex = "女";
// console.log(Wyh);

// var lw = new Object();
// lw.name = "刘杰爱王永红";
// console.log(lw);

// 使用工厂函数创建对象
// var dui = function (name, sex, age) {
//     var duiXiang = new Object();
//     duiXiang.name = name;
//     duiXiang.sex = sex;
//     duiXiang.age = age;

//     return duiXiang;
// }
// var xiang = dui("王永红", "女", 18);
// var xiang2 = dui("刘杰", "男", 21);

// console.log(xiang);
// console.log(xiang2);

// var duix = function(name,hobby,say){
//     var duiXiang = new Object();
//     duiXiang.name = name;
//     duiXiang.hobby = hobby;
//     duiXiang.say = say;
//      return duiXiang;

// }
// var dui = duix("网用户和", "导航", "hiduhc");
// var xiang = duix("网用户", "导", "hihc");
// console.log(dui);
// console.log(xiang);

// 使用工厂函数创建对象
// var dui = function(names,sex,say){
//     var duix = new Object();
//     duix.name = names;
//     duix.sex = sex;
//     duix.say = say;

//     return duix;
// }
// var xiang = dui("王永红", "女", function(){console.log("我爱刘杰")});
// var xiang2 = dui("刘杰", "男", function(){console.log("我爱王永红")});
// console.log(xiang);
// console.log(xiang2);
// xiang.say();
// xiang2.say();

// 使用自定义构造函数创建对象
// var duixiang = function(name,sex,age){
//     this.name = name;
//     this.age= age;
//     this.sex = sex;

// }
// var dui = new duixiang("王永红",18,"女");
// console.log(dui);

// var duiXiang = function(name,sex,age){
//     this.name = name;
//     this.sex = sex;
//     this.age = age;
// }
// var WYH = new duiXiang("王永红", "女" , 18);
// console.log(WYH);

// 使用自定义构造函数创建对象
// var dui = function (name, skill, hobby) {
//     this.name = name;
//     this.skill = skill;
//     this.hobby = hobby;

// }
// var WYh = new dui("王永红", "刘杰", "刘杰");
// console.log(WYh);

// 最小值
// console.log(Math.min(12,13,4));
// console.log(Math.min(18,21));

// var math = {
//     max: function () {
//         var max = arguments[0];
//         for (var i = 0; i < arguments.length; i++) {
//             if (arguments[i] > max) {
//                 max = arguments[i];
//             }
//         }
//         return max;
//     }
// }

// console.log(math.max(1, 2, 3, 4, 67, 8));

// 格式化日期对象

// 1。定义一个函数
// var format = function () {
//     // 2.获取当前时间
//     var date = new Date();
//     // 3.获取年份
//     var year = date.getFullYear();
//     // 4.获取月份
//     var month = date.getMonth() + 1;
//     // 5.获取日期
//     var day = date.getDate();
//     // 6.获取小时
//     var h = date.getHours();
//     // 7.获取分钟
//     var min = date.getMinutes();
//     // 8.获取秒数
//     var s = date.getSeconds();
//     // 9.判断月 日 时 分 秒 是不是两位数 如果不是 在前面加“0”
//     month = month > 9 ? month : "0" + month;
//     day = day > 9 ? day : "0" + day;
//     month = month > 9 ? month : "0" + month;
//     h = h > 9 ? h : "0" + h;
//     s = s > 9 ? s : "0" + s;
//     // 10。拼接输出
//     return year + "/" + month + "/" + day + ' ' + h + ':' + min + ':' + s;

// }
// console.log(format());

// 随机生成颜色
// 1.新建一个函数，生成一个随机数 #xxxxxx 0-9 a-f
// var getColor = function () {
//     // 新建一个颜色字符串 给一个初始值
//     var color = "#";
//     // 3.把0-9 a-f存入到一个数组中
//     var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
//     // 4.遍历该数组
//     for (var i = 0; i < 6; i++) {
//         // 新建一个变量来接受Math.random()产生的随机数
//         var num = Math.floor(Math.random() * 16);
//         // 6.通过该变量的值(下标)找到数组中的某一个数字
//         var val = hex[num];
//         // 7.把开始的那个颜色字符串 和产生的数组中的数组 拼接起来
//         color += val;
//     }
//     return color;
// }
// // 8.输出颜色字符串
// // 找到文档中的body标签 让body样式的背景色为getColor()随机产生的颜色
// setInterval(function () {
//     document.body.style.backgroundColor = getColor();
// }, 1000)

// var getColor = function () {
//     var color = "#";
//     var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
//     for (var i = 0; i < 6; i++) {
//         var num = Math.floor(Math.random() * 16);
//         var val = hex[num];
//         color += val;
//     }
//     return color;
// }
// setInterval(function () {
//     document.body.style.backgroundColor = getColor();
// }, 1000)

// math对象

// 1.Math.PI 圆周率
// console.log(Math.PI);
// 圆周率
// console.log(Math.PI);
// console.log(Math.PI);
// Math.PI圆周率
// Math.PI圆周率
// Math.PI圆周率
// console.log(Math.PI);

// Math.floor(数字) 向下取整(舍小数取整数) 返回一个整数
// parseInt()是为了让字符串变成整数 其他变量变为数字
// Math.floor()是为了让小数变成整数
// console.log(Math.floor(3.009));
// console.log(Math.floor(3.99));
// console.log(Math.floor(2.00));
// Math.floor是把小数变为整数
// console.log(Math.floor(2.98));
// console.log(Math.floor(-21.5));
// console.log(Math.floor(-98.9));

// 向上取整
// Math.ceil(数字) 向上取整 返回一个整数
// console.log(Math.ceil(6.99));
// console.log(Math.ceil(3.99));
// console.log(Math.ceil(-9.8));
// console.log(Math.PI);圆周率
// console.log(Math.floor(2.998));向下取整
// console.log(Math.ceil(3.09));向上取整

// 四舍五入
// console.log(Math.round(3.6));
// console.log(Math.round(3.4));
// // 四舍五入round
// console.log(Math.round(9.8));
// console.log(Math.round(98.9));

// 取绝对值 Math.abs() 返回一个正数
// console.log(Math.abs(-9));
// console.log(Math.abs(9));
// console.log(Math.abs(21));
// console.log(Math.abs(-87));
// 圆周率Math.PI
// 向下取整Math.floor
// 向上取整Math.ceil
// 四舍五入Math.round
// 绝对值Math.abs
// Math.max(数字,数字,数字) 最大值 不能写数组 返回一个最大的值
// console.log(Math.max(1,12,3,4,5,65));
// console.log(Math.max(21,3,32,4,65));
// var arr = [12,13,14,56];
// console.log(Math.max(...arr));
// console.log(Math.min(56,65,43));

//底数次幂
// Math.pow(底数,指数) 底数次幂 返回值:结果数值
// console.log(Math.pow(2,4));
// console.log(Math.pow(4,3));
// console.log(Math.pow(底数,指数));

// Math.sqrt(被开放数) 平方根
// console.log(Math.sqrt(4));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(25));
// Math.sqrt()平方根

// 随机数
// console.log(Math.random());
// 不需要输入任何参数 直接会返回大于等于0小于1的数
// 想让随机数从0 到 10
// console.log(Math.floor(Math.random()* 10));

// 圆周率 Math.PI PI PI PI圆周率
// 随机数 Math.random randow randow随机数randow randow
// 底数次幂 Math.pow pow pow pow 底数次幂
// 取绝对值 Math.abs abs abs abs 绝对值abs
// 向上取整 Math.ceil ceil ceil ceil向上取整
// 向下取整 Math.floor floor floor floor 向下取整
// 四舍五入 Math.round round round round 四舍五入
// 平方根 Math.sqrt  sqrt sqrt sqrt 平方根

// Date对象
// var 变量 = new Date();
// var now = new Date();
// console.log(now.toString());
// var now = new Date();
// var now = new Date();
// var now = new Date();

// 获取日期的毫秒形式
// valueOf();
// var now = new Date();
// console.log(now.valueOf());
// var now = new Date();
// console.log(now.valueOf());
// var now = new Date();
// console.log(now.valueOf());
// 获取时间的毫秒形式
// valueOf();
// var now = new Date();
// console.log(now.valueOf());
// now() 新方法
// var now = Date.now();
// console.log(now);
// var now = Date.now();
// console.log(now);
// valueOf();
// now();
// console.log(变量名.valueOf());
// console.log(变量名);

// 获取现在的时间
// var date = new Date();
// // 获取年份
// var year = date.getFullYear();
// console.log(date.getFullYear());
// var month = date.getMonth();
// console.log(date.getMonth());
// var day = date.getDate();
// console.log(date.getDate());
// var h = date.getHours();
// console.log(date.getHours());
// var min = date.getMinutes();
// console.log(date.getMinutes());
// var s = date.getSeconds();
// console.log(date.getSeconds());

// var 数组名 = [数据,数据,,,]
// 系统构造函数
// var 数组名 = new Array(数据,数据...) 如果array()的括号中有很多数据就是该数组的元素
// var 数组名 = new Array(数字) 如果array()中有一个数字 代表数组的长度
// var arr = new Array(12,1,15,26);
// console.log(arr.length);
// console.log(arr);
// var arr = new Array(3);
// console.log(arr.length);
// console.log(arr);


// 检测一个对象是否为数组
// 格式： 被检测的数据 instanceof  构造函数的名字（Array Object)
// 当被检测的数据和构造函数一样 返回true 否则返回false
// var str = "hello world";
// var arr = [12,131,415,43];
// console.log(str instanceof Array);
// console.log(arr instanceof Array);

// 第二种方法 Array.isArray(被检测的数据)
// var str = 12;
// var arr = [32,32,54];
// console.log(Array.isArray(str));
// console.log(Array.isArray(arr));

// 把数组转换成字符串
// 数据.toString();
// var arr= [12, 'a', true, 'acd'];
// console.log(arr.toString());
// console.log(typeof arr.toString());

// Push(); 将一个或多个元素添加到数组的末尾
// unshift(); 将一个或多个元素添加到数组的开头
// shift(); 从数组中删除第一个元素
// sort(); 排序
// reverse(); 反转
// splice(); 切割数组
// indexOf(); 在数组中找到一个给定元素的第一个索引

// var arr = [12,13];
// arr.push(2,8);
// arr.unshift(3);
// arr.unshift(-9);
// arr.push(-3)
// console.log(arr);

// reverse() 反转
// 用法：数组名.reverse()
// var arr = [12,3,4,54,87];
// arr.reverse();
// console.log(arr);

// shift() 从数组中删除第一个元素
// var arr = [12,3,4,54,87];
// arr.shift();
// arr.shift();
// console.log(arr);

// splice(); 删除数组中的某几个元素 在某个位置添加元素  在某个位置替换位置
// 用法：splice(那个位置删，删几个，新增数据,,,)
// var arr = [9, 8, 7, 65, 45, 32];
// 从3开始删，删两个
// arr.splice(3,2);
// console.log(arr);
// arr.splice(2,1);
// console.log(arr);
// arr.splice(4,1);
// console.log(arr);
//  新增元素
// 从索引0开始删 删0个 在0位置新增a和b;
// arr.splice(0,0,"a",'b');
// console.log(arr);
// arr.splice(1,1,7);
// console.log(arr);
// arr.splice(2,2,3,4);
// console.log(arr);

// 替换
// 从1位置开始删 删一个 增加一个
// arr.splice(1,1,3);
// console.log(arr);
// arr.splice(0,1, 9);
// console.log(arr);
// arr.splice(4,1,0);
// console.log(arr);

// 删最后一个
// 可以倒着删 最后一个元素的索引是-1开始 
// arr.splice(-1,1);
// console.log(arr);
// arr.splice(-1,1,3);
// console.log(arr);
// arr.splice(-1,1,2,3);
// console.log(arr);

// indexOf() 可以查找某一个元素在数组中是否存在 如果存在 返回索引 如果不存在 返回-1
// 用法：数组名.indexOf(元素)；
// var arr = [12,32,3,4,56];
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(3));
// var arr = [87,8,65,45];
// console.log(arr.indexOf(32));
// console.log(arr.indexOf(8));

// sort() 排序  默认方式：先排最左边的数字
// 数组名.sort(排序函数);
var arr = [12, 2, 11, 34, 50];
// arr.sort();
// console.log(arr);
// /如果想让sort正常排序 就需要使用排序函数
// arr.sort(function (a,b){
//     return b - a;
// })
// console.log(arr);
// arr.sort(function(a,b){
//     return a- b;
// })
// console.log(arr);

// 清空数组
// var arr  = [1,3,45,56];
// arr = [];
// console.log(arr);
// arr.length = 0;
// console.log(arr);

// var str = "hello word";
// substr() 从索引为i的地方开始切割字符串 把剩下的都切出来
// var str1 = str.substr(3);
// // console.log(str1);
// var str1 = str.substr(4);
// console.log(str1);
// var str1 = str.substr(5);
// console.log(str1);

// 字符串对象的常用方法
// charAt()获取指定位置处字符
// charCodeAt() 获取指定位置处的ASCII码
// concat() 拼接字符串 等效于+
// slice() 从start位置开始  截取到end位置 end取不到 返回他们之间的字符串
// substr() 从start位置开始 截取length个字符 包括start位置
// indexOf() 返回指定内容在字符串中的位置
// trim() 只能去除字符串前后的空白

// charAt(某个字母的索引) 返回的是字符
// 字符串.charAt(某个字母的索引)
// var str = "wewrt";
// console.log(str.charAt(2));
// var rr = "123456";
// console.log(rr.charAt(3));
// var num = "123456";
// console.log(num.charAt(2));

// charCodeAt() 获取指定位置处的ASCII码
// /字符串.charCodeAt(索引)
// var str = "asdfg";
// console.log(str.charCodeAt(3));

// concat() 拼接字符串 
// 用法：字符串1.concat(字符串2);
// var str1 = "hello";
// var str2 = "world";
// console.log(str1.concat(str2));

// indexOf();
// var str = "nice to meet you";
// console.log(str.indexOf("e"));


// 字符串.trim() 
// var str = "   nihao    ";
// console.log(str);
// console.log(str.trim());

// substr () 从某个位置开始 截取几个字符
// // 字符串.substr(索引，个数)
// var str = "fdsghjkjghgzfdx";
// console.log(str.substr(3,5));

// slice() 从start位置开始 截取到end位置
// 字符串.slice(开始的索引，结束的索引)；
// var str = "sdfghnjkmnbvc";
// console.log(str.slice(2,7));