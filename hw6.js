//ЗАДАНИЕ 1
// let arr = [1, 5, 4, 10, 0, 3];
// let i=0;
// for(i=0; i<lenght.arr; i++) {
// if (arr[i]!=10)
//     alert (arr[i]);
// else {
//     alert (arr[i]);
//     break;}
// }

//ЗАДАНИЕ 2
// let arr = [1, 5, 4, 10, 0, 3];
//     alert (arr.indexOf(4));

//ЗАДАНИЕ 3
// let arr = [1, 5, 4, 10, 20];
// alert(arr.join(' '));

//ЗАДАНИЕ 4
// let arr= [];
// for (let i=0; i<3; i++){
//     arr[i]=[];
//     for (let j=0; j<3; j++){
//             arr[i][j]=1;
//         }   
//     }
//     alert(arr);

//ЗАДАНИЕ 5 
// let arr=[1,1,1];
// arr.push(2,2,2);
// alert(arr);

//ЗАДАНИЕ 6
// let arr =[9,8,7,'a',6,5];
// arr.sort((a,b) => a-b);
// arr.pop();
// alert(arr);

//ЗАДАНИЕ 7
// let arr = [9,8,7,6,5];
// let a = prompt ('Угадайте число');
// if ((arr.includes(Number(a)))==true){
//     alert ('Угадал!');
// }
// else{
//     alert('Не угадал(');
// }

//зАДАНИЕ 8
// let str = 'abcdef';
// alert (str.split('').reverse().join(''));

//ЗАДАНИЕ 9 
// let arr = [[1,2,3],[4,5,6]];
// console.log(arr.join().split('').filter(Number).map(String => String*1)); 
//console.log(arr.join().split('').filter(Number));

//ЗАДАНИЕ 10
// let arr = [];
//
// for (let i=0; i<5; i++){ 
// arr[i]=Math.floor(Math.random() * (10 - 0 + 1)) + 0;
// }
//
// console.log(arr);
// for (let i=0; i<(arr.length-1); i++){
//         console.log(arr[i]+arr[i+1]);
// }

//ЗАДАНИЕ 11
// function sqrarr (arr){
//     return (arr.map((num) => (num*num))); 
// }
//
// let arr = [];
// for (let i=0; i<5; i++){ 
// arr[i]=Math.floor(Math.random() * (10 - 0 + 1)) + 0;
//  }
// console.log(arr);
// console.log(sqrarr(arr));

//ЗАДАНИЕ 12
// function getLenghtWords(arr){
//     for (let i=0; i<(arr.length); i++){
//         arr[i]=arr[i].length;
//     }
//     arr.map(String => String*1);
// }
//
// let arr = ['слово', '', 'слог', 'длинное предложение','буква', 'а'];
// getLenghtWords(arr);
// console.log(arr);

//ЗАДАНИЕ 13
// function filterPositive(array) {
//     array = array.filter((n) => n<0);
//     console.log(array);
//   }
//
//   filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
//   filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]

//ЗАДАНИЕ 14
// let arr1 = [];
// for (let i=0; i<10; i++){ 
// arr1[i]=Math.floor(Math.random() * (10 - 0 + 1)) + 0;
//  }
//
// arr2 = arr1.filter(n => n%2==0)
// console.log(arr1);
// console.log(arr2);

//ЗАДАНИЕ 15
// let arr = [];
// for (let i=0; i<6; i++){ 
// arr[i]=Math.floor(Math.random() * (10 - 0 + 1)) + 0;
//  }
// let sa = arr.reduce((a,b) => a+b, 0)/arr.length; 
//  console.log(arr);
//  console.log(sa);
