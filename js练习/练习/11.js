// while循环
// 打出1-10的数
// 先执行初始化表达式
var i = 1;
// while布尔表达式
while(i <= 10){
    // 循环体
    console.log(i);
    // 步进表达式
    i++;
}

// do while循环
var count = 1;
do{
    console.log("我爱你");
    count++;
} while(count <= 5);

// 循环嵌套
 for ( var i = 0; i < 5; i++){
     var row = "";
     for (var j = 0; j < 5; j++){
         row = row + "☆ ";
     }
     console.log(row);
 }

//  三角形
// var row = "";
// for (var i = 0; i < 5; i++) {
//     row = row + "☆ ";
//     console.log(row);
// }
//  for (var j = 0; j < 6; j++){
//      var row = "";
//      for ( var i = 0; i < j; i++){
//          row = row + "☆ ";
//      }
//      console.log(row);
//  }
// 九九乘法表
// for ( var i = 1; i <= 9; i++) {
//     var row = "";
//     for (var j = 1; j <= i; j++){
//         row = row + j + "x" + i + "=" + j*i + " ";
//     }
//     console.log(row);
// }
// 100-200之间被7整除的数字
// for ( var i = 100; i <= 200; i++){
//     if (i % 7 == 0){
//         console.log(i);
//         break;
//     }
    
// }
// for ( var i = 100; i <= 200; i++){
//     if (i %  10 == 3){  
//          continue;
//      }
//   console.log(i);
// }
// var str ="37";
//    var num = 7;
//    console.log(str-num);
//    console.log(str+num);

// var i = 8;
// do
// {
//     i++;
// }while(i>100);
// console.log(i);

// var sum= 0;

// for (var i = 0; i <5;i++){

// sum +=i;

// }

// console.log(sum);

// var sum = 0;
// for(var i = 10 ;i >0 ;i --){
//     sum += i;
// }
// console.log(sum);

// var foo = "11"+2-"1";
// console.log(foo);
