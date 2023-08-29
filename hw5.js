// ЗАДАНИЕ 1
// function kek (a, b) {
// if (a<b)
//    {alert(a)}
// else 
//     {alert(b)}
// }
//
// let a = prompt ("Введите 1 число");
// let b = prompt ("Введите 2 число");
// kek(a, b);

//ЗАДАНИЕ 2
// function kek (a) {
//     if (a % 2 == 0) {
//         alert (`Число четное`);
//     }
//     else {
//         alert (`Число нечетное`)
//     }
// } 
//
// let a = prompt (`Введите число`);
// kek (a);

// ЗАДАНИЕ 3.1 
// function kek (a) {
//    console.log (a*a);
// }
//
// let a = prompt (`Введите число`);
// kek (a);

// ЗАДАНИЕ 3.2 
//  function kek (a) {return (a*a)}
//  let a = prompt (`Введите число`);
//  let b = kek (a);
//  console.log (b);

// ЗАДАНИЕ 4
// function age (a) {
//     if (a<0) {
//         alert ('Вы ввели неправильное значение');
//     }
//     else {
//         if ((a >= 0) && (a <= 12)) {
//             alert (`Привет, друг!`);
//         }
//         else {
//             alert (`Добро пожаловать!`);
//         }
//     }
// }
//
// let b = prompt (`Сколько вам лет?`);
// age (b);

// ЗАДАНИЕ 5
//
// function numb (a, b){
//     if ( ((isNaN(a)) || (isNaN(b))) == true ){             
//         // isNan проверяет А НЕ БУКВЫ ЛИ ЭТО?? как сука и отдает тру если это НЕ число,
//         // отдает фолс если число, что-то ИЛИ что-то == ТРУ в том случае если хотя бы 1 параметр  НЕ число
//     }
//     else {
//         alert (a*b);
//     }
// }
//
// let a = prompt ('1 число');
// let b = prompt (`2 число`);
// numb (a, b);

//ЗАДАНИЕ 6
// function zadanie6 (a){
//     if ( (isNaN(a))  == true ){             
//         alert('Переданный параметр не является числом');
//             }
//             else {
//                 // alert (`n в кубе равняется ${a*a*a}`);
//                 console.log(a * a * a );
//             }
//         }
//
//          let a = prompt ('введите число n');
//           zadanie6(a);

//ЗАДАНИЕ 7
//
// const circle1 = {
//     radius: 10,
//     getArea: function () {
//     console.log (3.14*this.radius*this.radius);
//     },
//     getPerimeter: function () {
//     console.log (3.14 * 2 * this.radius);
//         },
// };
//
//
// const circle2 = {
//     radius: 20,
//     getArea: function () {
//     console.log (3.14 * this.radius * this.radius);
//     },
//     getPerimeter: function () {
//     console.log (3.14 * 2 * this.radius);
//         },
// };
//
// circle1.getArea();
