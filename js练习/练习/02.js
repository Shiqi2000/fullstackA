
    // 有两个变量 第一个数值为1 第二个数值为2 
    // 需求:交换连个变量的数值 使第一个为2,第二个为1
    // 步骤:
    // 声明三个变量
    var num1 = 1;
    var num2 = 2;
    var kong = null;
    // 使空容器的值为num1
    var kong = num1;
    // 让num1的值为num2
    var num1 = num2;
    // 让num2的值为空容器的值
    var num2 = kong;
    console.log(num1,num2);

    // 声明三个变量
    var num1 = "zhu";
    var num2 = "dazhutizi";
    var kongbai = null;
    // 使空容器的值为num1的值
    var kong = num1;
    // 使num1的值为num2的值
    var num1 = num2;
    // 使num2的值为空容器的值
    var num2 = kong;
    console.log(num1,num2);
     
    //声明两个变量 仅限数字变量使用
    var num1 = 8;
    var num2 = 9;
    //使num1的值=num1+num2;
    var num1 = num1 + num2;
    //使num2的值=num1-num2;
    var num2 = num1 - num2;
    //使num1的值=num1-num2;
    var num1 = num1 - num2;
    console.log(num1,num2);
