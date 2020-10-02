/*

1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
будут в верхнем регистре. Использовать for или while.
2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой,
 предпоследняя - второй итд).
3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
6. Дан объект:
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.



*/


/*

1. На основе строки “i am in the easycode” сделать новую строку где 
первые буквы каждого слова будут в верхнем регистре.
Использовать for или while. 

*/

let firstString = "I am in the easycode";
for(let i = 0; i<firstString.length; i++){
    if(firstString[i] === " "){
        firstString[i+1].toLocaleUpperCase();
    }
}

console.log(firstString);


/*

2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш 
(то есть последняя буква становится первой, предпоследняя - второй итд).


*/

let secondString = "tseb eht ma i";
let newSecondString = "";
for(let i = secondString.length -1; i>=0; i--){
 newSecondString+=secondString[i];
}

console.log(newSecondString);


/*

3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. 
С помощью циклов вычислить факториал числа 10. Использовать for.

*/

let sum = 1;

for(let i=1; i<=10;i++){
    sum*= i;
}

console.log(sum);


/*

4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.


*/

let fourthString = "Javascript is a pretty good language";
let newFourth = "";

for(let i = 0; i<fourthString.length; i++){
    if(fourthString[i-1]=== " "|| i===0){
      newFourth += fourthString[i].toUpperCase();
    }
    newFourth += fourthString[i];
}

console.log(newFourth);

/*

5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести
 их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

*/

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let i = 0 ; i<array.length;i++){
    if(i%2===1){
        console.log(i);
    }
}


/*

6. Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. 
Использовать for in.


*/

let obj = {
    name: "denis",
    work: "easycode",
    age: 29
}

for(let i in obj){
    if(typeof(obj[i]) === "string"){
        console.log(obj[i]);
    }

}

console.log(obj);