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
// console.log(pop([13, 14, 15, 141, 16, 78]));

// 定义一个对象
// var LJ = {
//     name: "刘杰",
//     age: 21,
//     sex: "男",
//     hobby: ["王永红", "游戏", "旅游"],
//     say: function () {
//         console.log("我是大猪蹄子");
//     }
// }

// var WYH = {
//     name: "王永红",
//     age: 18,
//     sex: "女",
//     hobby: ["淘宝"],
//     say: function () {
//         console.log("，，，，，");
//     }
// }
// console.log(WYH.age);
// console.log(WYH.hobby);

// var dog = {
//     name: "大黄",
//     age: 5,
//     sleep: function () {
//         console.log("睡觉");
//     }
// }
// 获取对象的属性值
// console.log(dog);
// 设置对象的键所对应的值
// dog["hobby"] = "女";
// console.log(dog);
// 遍历
// for(var key in dog){
// console.log(key);
// console.log(dog[key]);
// }
// 删除属性
// delete dog.age;
// console.log(dog);

// 使用系统构造函数创建对象
// var LiuJie = new Object();

// LiuJie.name = "刘杰";
// LiuJie.age = 21;
// LiuJie.hobby = "女";
// LiuJie.skill = "骚气";
// console.log(LiuJie);

// var WYH = new Object();
// WYH.name = "王永红";
// WYH.age = 18;
// WYH.hobby = "刘杰";
// console.log(WYH);

// 使用工厂函数创建对象
// var gongChang = function (name, sex, age, hobby, say, job) {
//     var obj = new Object();
//     obj.name = name;
//     obj.sex = sex;
//     obj.age = age;
//     obj.hobby = hobby;
//     obj.job = job;
//     obj.say = say;

//     return obj;
// }
// var LiuJie = gongChang("刘杰", "男", 21, "王永红", "我是大猪蹄子", function(){console.log(程序猿猴)
// });
// console.log(LiuJie);
// var WYH = gongChang("王永红", "女", 18, "刘杰", "程序猿猴", "吃吃吃");
// console.log(WYH);

// 使用自定义构造函数创建对象
// var SuperStar = function (name, age, sex, say) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.say = say;
// }
// var maoBuYi = new SuperStar("毛不易", 23, "男", function () { console.log("我是巨星") });
// console.log(maoBuYi);
// maoBuYi.say();