/*

1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
 их произведение: multiply(1,2,3) = 6 (1*2*3)


*/

function multiply(){
    let sum = 1;
    for(let i = 0; i<arguments.length;i++){
        sum*=arguments[i];
    }

    return sum;
}

let digit = multiply(1,9,3);
console.log(digit);


/*

2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.


*/


function stringReverse(str){
    let newStr = "";
    for(let i = str.length - 1; i>=0;i--){
     newStr+=str[i];
    }
  return newStr;
}

let str = "kgflkgl";
let secondStr = stringReverse(str);
console.log(secondStr);



/*

  3. Создать функцию, которая в качестве аргумента принимает строку из букв и 
  возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 


*/

function getNumberFromCode(string){
    let newString = "";
    for(let i = 0; i<string.length;i++){
      newString+=string.charCodeAt(i) + " "
    }

    return newString;
}

let thirdStr = getNumberFromCode("I LOVE YOU");
console.log(thirdStr);



/*

4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” 
если нет то “Вы не угадали ваше число 8 а выпало число 5”. 
Числа в строке указаны как пример вы подставляете реальные числа.


*/


let number = 10;
function guessNumber(number){
    if(number<=10 && number>=0){
      let randomNumber = Math.floor(Math.random()*10);
      if(number === randomNumber){
          console.log("Вы выиграли")
      }
      else{
          console.log("Вы проиграли");
      }
    }
   
}

guessNumber(number);



/*

5. Создать функцию, которая принимает число n и возвращает массив, заполненный 
числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

*/


function createArray(n){
    let array = [];
    for(let i = 0 ;i<n;i++){
     array.push(i);
    }

    return array;
}

let randomArray = createArray(10);
console.log(randomArray);


/*

6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными 
элементами входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
doubleArray([1,2,3]) // [1,2,3,1,2,3]


*/

function doubleArray(array){
    let double = array.concat(array);
    return double;
}

let doubledArray = doubleArray([1,2,3]);
console.log(doubledArray);


/*

 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет
 из каждого массива первый элемент, а возвращает массив из оставшихся значений. 

*/

function popFirst(){

    for(let i = 0 ; i<arguments.length;i++){
      arguments[i].shift();
    

    }
    return  arguments;
}

 let sevenArr = popFirst([1,2,3],[1,9,0]);
 console.log(sevenArr);


 /*
 
 8. Создать функцию которая принимает массив пользователей, поле на 
 которое хочу проверить и значение на которое хочу проверять. 
 Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

 
 */

 let newUsers = [
     {
        name: "Danil", age: "19", gender: "male"
     },

     {
        name: "Nazar", age: "19", gender: "male"
     }
 ]
 function getInfoUser(array,value,key){
     let users = [];
     for(let i = 0; i<array.length;i++){
         let el = array[i];
         if(el[value] === key){
             users.push(el);
         }
     }

     return users;
 }

 let info = getInfoUser(newUsers,"gender","male");
 console.log(info);
