// 选择结构switch
// var day = 3;
// switch (day) {
//     case 1:
//     console.log("一帆风顺");
//     break;
//     case 2:
//     console.log("二话不说");
//     break;
//     case 3:
//     console.log("三心二意");
//     break;
//     case 4:
//     console.log("四面楚歌");
//     break;
//     case 5:
//     console.log("五湖四海");
//     break;
//     case 6:
//     console.log("六六大顺");
//     break;
//     case 7:
//     console.log("七上八下");
//     break;
//     default:
//     console.log("抱歉，您输入错误");
//     break;
// }
// for循环
// for (var num = 1; num <= 100; num++) {
//     if (num % 2 == 0) {
//         console.log(num); 
//     }
// }

var sum = 0;
var i = 0;
for(; i<5; i++)
{
    sum +=i;
}
console.log(sum);

// var money = 1800;
//     if (money >= 500) {
//         if (money >= 2000) {
//             console.log("请大家吃西餐");
//         } else if (money >=1500 && money < 2000) {
//             console.log("请大家吃快餐");
//         } else if (money >=1000 && money < 1500) {
//             console.log("请大家喝饮料");
//         } else if (money >=500 && money < 1000) {
//             console.log("请大家吃棒棒糖");
//         }
//     } else {
//         console.log("请班长下次把钱带够");
//     }
    // var score = 89;
    // if (score >= 90) {
    //     console.log("A");
    // } else if (score >= 80 && score < 90) {
    //     console.log("B");
    // } else if (score >= 70 && score < 80) {
    //     console.log("C");
    // } else if (score >= 60 && score < 70) {
    //     console.log("D");
    // } else if (score < 60) {
    //     console.log("E");
    // }
    // var day = 0;
    // switch (day) {
    //    case 0:
    //    console.log("星期天");
    //    break;
    //    case 1:
    //    console.log("星期一");
    //    break;
    //    case 2:
    //    console.log("星期二");
    //    break;
    //    case 3:
    //    console.log("星期三");
    //    break;
    //    case 4:
    //    console.log("星期四");
    //    break;
    //    case 5:
    //    console.log("星期五");
    //    break;
    //    case 6:
    //    console.log("星期六");
    //    break;
    //    default:
    //    console.log("抱歉，您输入错误！");
    //    break;
    // }
    // var num1 = 10;
    // if (num1 % 2 == 0) {
    //     console.log("偶数");
    // } else {
    //     console.log("奇数");
    // }
    // var num1 = 10;
    // var num2 = 20;
    // console.log(num1 > num2 ? "num1":"num2");

// 逻辑运算符

// 与(&&);
// 运算规则: 有一个为假(false) 必为假  两个为真 才为真(true)
// console.log(2>3 && 3>2); // false
// console.log(3>2 && 4>3); // true
console.log(4>5 && 5.4);
// &&有一个为假，就必为假，两个为真，才为真
// ||有一个为真，就为真；两个为假，才为假
console.log(3>4 || 4>3);
// ！ 当一个表达式为真，加上！就为假；当一个表达式为假，加上！就为真。
console.log(!(3<4));
console.log(!0);
console.log(!(5>4));

// 单分支
// 需求: 如果 时间到7:00 那么就 闹钟响
   var time = 8;
   if (time == 7) {
       console.log("叮叮叮");
   }