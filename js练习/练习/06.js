// 字符串
var names = "刘杰";
console.log(typeof names);
// 数字
var sex = 21;
console.log(typeof sex);
var num = 18;
console.log(typeof num);
// 布尔值
var bool =false;
console.log(typeof bool);
// 自定义
var unde = undefined;
console.log(typeof unde);
// Null
var nul = null;
console.log(typeof nul); 
// 把其他类型的变量转换为字符串类型 toString() undefined和null比较特殊 需要用String()
// 任何类型都可以使用String() 来转换成字符串
var sex = 100;
console.log(sex);
console.log(sex.toString());
var bool = true;
console.log(bool);
console.log(bool.toString());
var und = undefined;
console.log(und);
console.log(typeof String(und));
var nul = null;
console.log(nul);
console.log(String(nul));
// 拼接字符串
var str = "liujie";
var result = "str" + "";
console.log(typeof result);
var num = 18;
var result = 18 + "";
console.log(result);
var unde = undefined;
var result = unde  + "";
console.log(typeof result);
var a = 1;
var b = 6;
var c = "宝宝";
console.log(a + b + c);
// Number()可以把任何值变为数字类型 如果要转换的字符串中有一个不是数值的字符，返回NaN
var names = 12;
var sex = "男";
var age ="2a";
var bool = true;
var nl = null;
console.log(Number(nl));
console.log(Number(names));
console.log(Number(sex));
console.log(isNaN(sex));
console.log(isNaN(names));
console.log(Number(age));
console.log(Number(bool));
console.log(isNaN(bool));
// parseInt() 如果第一个字符是数字会解析直到遇到非数字结束 如果第一个字符不是数字或者符号就返回NaN
var str = "liu";
console.log(parseInt(str));
var num = 123;
console.log(num);
var num1 = 123.2;
console.log(parseInt(num1));
var num2 = "12a";
console.log(parseInt(num2));
// ParseFloat() 把字符串转换成浮点数(小数)
var first = 123.3;
console.log(parseFloat(first));
var second = "123as";
console.log(parseFloat(second));
var third = "345";
console.log(parseFloat(third));
// +0, -0等运算
var num = 100;
console.log(+ num);
console.log(- num);
// 转换成布尔类型
// Boolean() 0 ""(空字符串) null undefined NaN 会转换成false， 其他都会转换成true
// 布尔类型中 0、空字符串、null、undefined、NaN都是打印false,其他的都打印true
var sex = 18;
console.log(Boolean(sex)); 
var sex2 = 0;
console.log(Boolean(sex2));
var names = "";
console.log(Boolean(names));
var nul = null;
console.log(Boolean(nul));
var und = undefined;
console.log(Boolean(und));
var sec = NaN;
console.log(Boolean(sec));
var third1 = "Liujie";
console.log(Boolean(third1));
  var a = 3;
  var b = 4;
  var result = a++ + b;
  console.log(result); 
  console.log(a);
