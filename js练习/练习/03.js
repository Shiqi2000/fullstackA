
        // 在控制台输出表头
        console.log("水果编号    水果名称    水果单价    计价单位    品质");
        // 声明五个变量 分别代表编号,水果名称,水果单价,计价单位,品质
        var num1 = 1;
        var name1 = "葡萄";
        var price1 = 21.0;
        var unit1 = "公斤";
        var pinZhi1 = "A";
        var num2 = 2;
        var name2 = "苹果";
        var price2 = 18.0;
        var unit2 = "公斤";
        var pinZhi2 = "B";
        var num3 = 3;
        var name3 = "橘子";
        var price3 = 15.0;
        var unit3 = "公斤";
        var pinZhi3 = "A";
        // 3.把这些变量拼接起来 输出
        // 拼接: 就是把变量用+号连接起来， +号在js中如果是两个数字 代表做加法 但是如果是 字符串 那么就是拼接作用
        console.log("   " + num1 + "         " + name1 + '        ' + price1 + "         " + unit1 + "       " + pinZhi1);
        console.log("   " + num2 + "         " + name2 + '        ' + price2 + "         " + unit2 + "       " + pinZhi2);
        console.log("   " + num3 + "         " + name3 + '        ' + price3 + "         " + unit3 + "       " + pinZhi3);
    