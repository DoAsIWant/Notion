/* 1. Получить число pi из Math и округлить его до 2-х знаков после точки */

const pi = (Math.PI).toFixed(2);
console.log(pi);

/*

 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51 

*/


let max = Math.max(15,11,16,51,12,13,51);
let min = Math.min(15,11,16,51,12,13,51);
console.log(max);
console.log(min);



 /* 

  3. Работа с Math.random:
  a. Получить случайное число и округлить его до двух цифр после запятой
  b. Получить случайное целое число от 0 до X. X - любое произвольное число. 

*/

let random  = Math.random();
console.log(random);

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  alert( randomInteger(1, 3) );


/*

  4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)? 

*/


let result = 0.6 + 0.7;
console.log(result.toFixed());


/*
  
 
5. Получить число из строки ‘100$’


*/

let string = "100$";
let digit = parseInt(string);
console.log(digit);

