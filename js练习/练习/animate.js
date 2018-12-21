
// var box = document.querySelector('.box1');
// document.querySelector('#btn1').onclick = function () {
//     animate(box, 400);
// }
// document.querySelector('#btn2').onclick = function () {
//     animate(box, 800);
// }


// function animate(elem, target) {
//     var current = elem.offsetLeft;
//     var timer = null;
//     clearInterval(elem.timer);
//     elem.timer = setInterval(function () {
//         var step = 10;
//         step = current < target ? step : -step;
//         current += step;
//         if (Math.abs(target - current) > Math.abs(step)) {
//             elem.style.left = current + 'px';
//         } else {
//             clearInterval(elem.timer);
//             elem.style.left = target + 'px';
//         }
//     }, 20)
// }


// function animate(elem, target) {
//     // 1.清除定时器
//     clearInterval(elem.timer);
//     // 2.获取元素的当前位置
//     var current = elem.offsetLeft;
//     // 3.声明定时器
//     elem.timer = setInterval(function () {
//         // 4.声明步进值
//         var step = 10;
//         // 5.判断一下  当前位置是否小于目标值
//         step = current < target ? step : -step;
//         // 6.累加
//         current += step;
//         // 7.判断 目标值-当前值 的绝对值  > 步进值的绝对值吗
//         if (Math.abs(target - current) > Math.abs(step)) {
//             elem.style.left = current + 'px';
//         } else {
//             // 8.如果小于 清除定时器 把left值赋值为目标值
//             clearInterval(elem.timer);
//             elem.style.left = target + 'px';
//         }
//     }, 20)
// }

