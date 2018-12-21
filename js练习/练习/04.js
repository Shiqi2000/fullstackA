
        // 获取变量的类型 typeof
        // 字符串:string 数字:number 布尔值:Boolean 自定义undefined  object 
    // 字符串
    var src = "刘杰";
    console.log(typeof src);
    // 数字
    var num = 22;
    console.log(typeof num);
    // 布尔值
    var bool = true;
    console.log(typeof bool);
    // undefined
    var unde;
    console.log(typeof unde);
    // null
    var kong = null;
    console.log(typeof kong);
    // 转换成字符串类型
    var str = 100;
    console.log(str);
    console.log(typeof str.toString());
    var bool = false;
    console.log(bool);
    console.log(bool.toString());
    // var unde = undefined;
    // console.log(unde);
    // console.log(unde.toString());
    // underfined和null特殊 需要用String();
    var und = undefined;
    console.log(und);
    console.log(String(und));
    var nu = null;
    console.log(nu);
    console.log(String(nu));
    // 转换成数字类型 Numer()
    var str = 21;
    var str1 = "12a";
    var bool = true;
    var st1 = 21.1;
    var num = "123.1.2";
    console.log(Number(str));
    console.log(Number(str1));
    console.log(Number(bool));
    console.log(isNaN(21));
    console.log(isNaN("12a"));
    console.log(parseInt(str));
    console.log(parseFloat(st1));
    console.log(parseFloat(num));
    // 转换为布尔类型
    var num = 0;
    console.log(Boolean(num));
    // 运算符
    // 乘法
    var num1 = 2;
    var num2 = 3;
    var result = 2 * 3;
    console.log(result);
// 除法
    var num1 = 2;
    var num2 = 3;
    var result = 3 / 2;
    console.log(result);
// 余数
    var num1 = 2;
    var num2 = 3;
    var result = 3 % 2;
    console.log(result);

