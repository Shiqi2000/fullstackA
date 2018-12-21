// 单分支if  满足条件就执行, 不满足条件表达式 就不执行

// 语法格式:
// if (条件表达式) {
//       代码块 (你要干什么)
// }

// 执行过程:
// 1.判断 条件表达式是否为true 
// 2.如果为  true  就执行 大括号中的代码块
// 需求：十点想猪
// var liujie = 10;
// if (liujie == 10) {
//     console.log("想猪");
// }

// if  else 如果条件满足 执行 if后面的大括号  如果条件不满足 就执行 else 后面的大括号

// 语法格式:
// if (条件表达式) {
//     执行语句1
// } else {
//    执行语句2
// }

//执行过程:
// 1.判断 如果条件表达式 为真  则运行 执行语句1  否则  运行 执行语句2

// 需求: 如果某一位同学 考试分数 超过60分 则及格  60分以下 则需要重考 不及格
// var score = 59;
// if (score >= 60) {
//     console.log("及格");
// } else {
//     console.log("不及格");
// }
// 根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
// var day = 2;
// if (day <= 5){
//     console.log("工作日");
// } else {
//     console.log("休息日");
// }

// if else if else  选择 满足条件的if 执行 if后面大括号中的执行语句

// 语法格式:
// if (条件表达式1) {
//     执行语句1
// } else if (条件表达式2) {
//     执行语句2
// } else if (条件表达式3) {
//     执行语句3
// } else {
// 执行语句4
// }

// 执行过程: 
// 1.判断是否满足条件表达式1  如果满足  就执行 执行语句1
// 2.如果表达式1 不满足 ,判断是否满足条件表达式2 ,如果满足 ,就执行 执行语句2
// 3.如果条件表达式2 不满足 ,判断是否满足条件表达式 3,如果满足,就执行 执行语句3
// 4.如果三个条件表达式都不满足,去执行else后的大括号中的执行语句4


// 对一个学生的考试成绩进行等级的划分，
// 如果分数大于等于80分，小于等于100分等级为优；
// 如果分数大于等于70分，小于80分级为良；
// 如果分数大于等于60分，小于70分等级为及格；
// 60以下为不及格；
// 大于100或者小于0则分数异常。
// var score = 110;
// if (score >= 80 && score < 100) {
//     console.log("优秀");
// } else if (score >= 70 && score < 80) {
//     console.log("良好");
// } else if (score >= 60 && score < 70) {
//     console.log("及格");
// } else if (score < 60) {
//     console.log("不及格");
// } else {
//     console.log("分数异常");
// }

// 多层条件判断 是因为业务逻辑需要在上一次判断的基础之上(为了过滤 多余的条件)

// 语法规则:
// if (第一层条件) {
//       if (第二层条件) {
//             真正的逻辑
//       }
// }


// 对一个学生的考试成绩进行等级的划分，
// 如果分数大于等于80分，小于等于100分等级为优；
// 如果分数大于等于70分，小于80分级为良；
// 如果分数大于等于60分，小于70分等级为及格；
// 60以下为不及格；
// 大于100或者小于0则分数异常。
// var score = 40;
// if (score >= 60) {
//     if (score >= 80 && score < 100) {
//         console.log("优秀");
//     } else if(score >= 70 && score < 80) {
//         console.log("良好");
//     } else if(score >= 60 && score < 70) {
//         console.log("及格");
//     }
// } else {
//     console.log("不及格");
// }

// 根据这个人的体重判断，
// 体重在100~200为健康，否则为不健康，
// (健康分为：偏瘦100-小于120 /正常 大于等于120-160/偏胖180-200)。

// >=100 < 120 偏瘦
// >=120 < 160 正常
// >=160 < 180 微胖
// >=180 <= 200 偏胖
// var strong = 190;
// if (strong >= 100 && strong <= 200) {
//     if (strong >= 100 && strong < 120) {
//         console.log("偏瘦");
//     } else if (strong >= 120 && strong < 160) {
//         console.log("正常");
//     }
//     else if (strong >= 160 && strong < 180) {
//         console.log("微胖");
//     }
//     else if (strong >= 180 && strong < 200) {
//         console.log("偏胖");
//     }
// } else {
//     console.log("不健康");
// }

// switch语句只用在能够穷举的场景中

// 用户输入 1  打印周一 
// 用户输入 2  打印周二

// 语法规则:
// switch (表达式) {
//       case 值1:
//             执行语句1;
//             break;
//       case 值2:
//             执行语句2;
//             break;
//       default: 
//             执行语句;
//             break;
// }

// 执行顺序：
// 1.表达式的值 是否和值1 一样 ，如果和值1一样，就执行 执行语句1 等执行完执行语句1 看到break 跳出switch
// 2.如果不一样， 看看表达式的值是否和值2一样，如果一样，就执行 执行语句2，等执行完执行语句2 看到break，跳出switch
// 3.如果表达式的值 对比了 值1  值2 都不一样 那么就执行default


// 根据 用户输入1-7 打印对应的星期几
// var day = 13;
// switch(day) {
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
//     console.log("您输入错误！");
//     break;
// }

// 课堂练习: 
// 定义值1-7输出该数字打头的一个成语，视为你今天的状态
// 1：一帆风顺
// 2：二话不说
// 3：三心二意
// 4：四面楚歌
// 5：五湖四海
// 6：六亲不认
// 7：七上八下
// var num = 7;
// switch(num){
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
//     console.log("六亲不认");
//     break;
//     case 7:
//     console.log("七上八下");
//     break;
//     default:
//     console.log("抱歉，您输入错误！");
//     break;
// }

// for循环: for循环是用的最多的，一般用在循环次数已知的情况下

// 语法规则:
// for (初始化表达式1; 布尔表达式2; 步进表达式4) {
//     循环体3;
// }

// for循环执行过程
// 1.先执行初始化表达式
// 2.执行布尔表达式
// 3.执行循环体(必须是布尔表达式为真的时候 第三步才执行)
// 4.执行步进表达式
// 5.执行布尔表达式
// 6.执行循环体
// 7.执行步进表达式
// 8.执行布尔表达式
// 9.执行循环体
// 10.执行步进表达式


// 说三次我爱你
// for (var i = 0; i < 3; i++) {
//     console.log("我爱你");
// }

// 如何执行:
// 1.执行 初始化表达式 i = 0;
// 2.执行 布尔表达式  0 < 3 小于 那么就为真
// 3.就执行  console.log("我爱你");
// 4.执行 步进表达式  i++  0-> 1
// 5.执行布尔表达式  1 <3  为真
// 6.执行 console.log("我爱你");
// 7.执行步进表达式 i++  1->2
// 8.执行布尔表达式  2 < 3 为真
// 9.执行 循环体 console.log("我爱你");
// 10.执行 步进表达式 i++ 2->3
// 11.执行 布尔表达式  3 < 3 为假
// 12 跳出循环 就没有了


// 课堂练习: 请大家输出 1-100之间的所有数
// 尝试 输出1-100之间的奇数
// for (var i = 1; i <= 100; i++) {
//     if(i % 2 == 1) {
//         console.log(i);
//     }
   
// }

// 根据输入的姓名，性别，打印欢迎XX先生/女士。
// var sex = "男";
// if (sex = "男") {
//     console.log("先生");
// } else{
//     console.log("女士");
// }

// 根据成犬重量划分mini型犬、小型犬、中型犬、大型犬
// var height = 100;
// if (height >= 0 && height < 20) {
//     console.log("mini型犬");
// } else if (height >= 20 && height < 50) {
//     console.log("小型犬");
// } else if (height >= 50 && height < 70) {
//     console.log("中型犬");
// } else if (height >= 70 && height < 100) {
//     console.log("大型犬");
// } else{
//     console.log("抱歉，您输入有误！");
// }
// 根据座位数分类车的类型：2个是自行车、3个是三蹦子、4个是小汽车、4以上为商务车
var type = 5;
if (type = 2){
    console.log("自行车");
} else if(type = 3){
    console.log("三蹦子");
} else if(type = 4){
    console.log("小汽车");
} else if(type > 4){ 
    console.log("商务车");
} else{
    console.log("您输入错误");
}
