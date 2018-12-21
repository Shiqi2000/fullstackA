
        // 在控制台输出以下内容
    console.log("hello Word");
    console.log("my Name");
    console.log("niHao")

    // 变量的定义和赋值
    // 格式：关键字 变量名 = 变量值
    // 解释：var 随意定义 = 变量值
    // 例子：var myName = "刘杰"；
    var myName = "刘杰";
    console.log(myName);
    var hobby = "猪";
    console.log(hobby);
    var names ="大猪蹄子";
    console.log(names);

    // 注意点: js语句写完 一定要用分号结尾
    // 多个变量的定义和赋值
    // 格式: var 变量名;
          // var names;
        //   var sex;
        // var age;
        // var names,sex,age;
    var names = "wangyonghong",
        age = 18,
        sex = "刘杰";
    console.log(names, age, sex);
    var sex = "liujie",
        myNmame = "wangyongh",
        age = 22;
    console.log(sex, myName, age);
    var sex = "zhu",
        hobby = 12345,
        names = "刘";
    console.log(sex, hobby, names);

    // 基本数据类型
    // 1.数字
    // 1.1 整数(整形)
    var height = 18;
    console.log(height);
    // 小数(浮点型)
    var width = 29;
    console.log(width);
    // 2.字符串 -- String
      // 一切数据只要用 单引号 或双引号包裹起来的就是字符串
        // 2.1 单引号引起来的
        var names = '我爱你';
        console.log(names);
        // 2.2 双引号引起来的
        var myName ="窈窕淑女 君子好逑";
        console.log(myName);
        // 注意: 单引号和双引号在js中是一样的，倾向单引号
        // 单双引号不要混用
        /*
        字符串 用双引号和单引号包裹起来的就是字符串
        */
        var first = '向我';
        console.log(first);
        var second = "想我";
        console.log(second);

         // 3.布尔值  -- Boolean
      // 代表是否的含义的，  布尔变量只有两个 代表是的true  代表否的false
        // 3.1 代表真 是 正确 true
        var isMarried = true;
          console.log(isMarried);
        // 3.2 代表假 否 错误 false
          var isLive = false;
          console.log(isLive);
        //   布尔值 代表是和否的含义 布尔变量只有两个 true和false 
        var shi = true;
        console.log(shi);
        var bushi = false;
        console.log(bushi);

        // 4.未定义 -- Undefined
      // 只有一个值 就是 undefined, 就是变量声明了但是没有赋值就会出现undefined
      // Undefined代表的是一种意外情况
      var undef;
        console.log(undef);
      var yiwai;
      console.log(yiwai);
    //   出现undefined就是代码出现了错误情况
     
     // 5.空  -- Null
      // 只有一个值 就是 null, 就是变量声明了但是不知道给什么值那么就给null意思是空
      // Null代表的是意料之中的
      var kong = null;
        console.log(kong);
        var bai = null;
        console.log(bai);