//ЗАДАНИЕ 1
// let str = 'js';
// alert (str.toUpperCase());

//ЗАДАНИЕ 2
// function fstart (arr, str){
//     let a =[];
//     let j =0;
//     for (let i=0; i<(arr.length); i++){
//         if (arr[i].toLowerCase().startsWith(str.toLowerCase())){
//             a[j]=arr[i];
//             j++;
//         }
//     }
//     return (a);
// }
//
// let arr = ['кошка', 'Кит', 'Комар', 'Носорог'];
// let str = 'Ко';
//
// console.log(fstart(arr, str));

//ЗАДАНИЕ 3
// let n = 32.58884;
//
// console.log(Math.floor(n));//до меньшего целого
// console.log(Math.ceil(n));//до большего целого
// console.log(Math.round(n));//до ближайшего целого

//ЗАДАНИЕ 4
// let n1=52, n2=53, n3=49, n4=77, n5=21, n6=32;
// console.log(Math.max(n1, n2, n3, n4, n5, n6) + ' ' + Math.min(n1, n2, n3, n4, n5, n6));

//ЗАДАНИЕ 5
// console.log (Math.random() * (10 - 1) + 1); //рандомное от 1 до 10 В ТОМ ЧИСЛЕ НЕ ЦЕЛОЕ
// console.log (Math.floor(Math.random() * (10 - 1) + 1));//рандомное от 1 до 10 ЦЕЛОЕ

//ЗАДАНИЕ 6
// function getRandomArrNumbers(n){
//     let arr = [];
//     let i =0;
//     for (i = 0; i<(Math.floor(n/2)-1); i++){
//         arr[i]=Math.floor(Math.random() * (n - 0) + 0);
//     }
//     arr[i]=n;
//     return(arr);
// }
//
// let n = 7;
// console.log(getRandomArrNumbers(n));

//ЗАДАНИЕ 7
// function getRand(n1, n2){
//     let max = Math.max(n1, n2);
//     let min = Math.min(n1, n2);
//     return (Math.round(Math.random() * (max - min) + min));
// }
//
// let n1 = prompt('Введите первое число');
// let n2 = prompt('Введите второе число');
// alert (getRand(n1,n2));

//ЗАДАНИЕ 8
// console.log(new Date());

//ЗАДАНИЕ 9
// currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

//ЗАДАНИЕ 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//
// function format (mydate){
//     let fullDate = 'Дата: ' + mydate.getDate() + " " + months[mydate.getMonth()] +
//     " " + mydate.getFullYear() + " - это " + days[mydate.getDay()] + '\n' + 'Время: ' + mydate.getHours() + ':' + mydate.getMinutes() + ':' + mydate.getSeconds();
//     return (fullDate);
// }
//
// currentDate = new Date();
// console.log(this.format(currentDate));