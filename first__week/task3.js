/*

1. Получить первую и последнюю буквы строки
2. Сделать первую и последнюю буквы в верхнем регистре
3. Найти положение слова ‘string’ в строке
4. Найти положение второго пробела (“вручную” ничего не считать)
5. Получить строку с 5-го символа длиной 4 буквы
6. Получить строку с 5-го по 9-й символы
7. Получить новую строку из исходной путем удаления последних 6-и символов
(то есть исходная строка без последних 6и символов)
8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”


*/



/*

1. Получить первую и последнюю буквы строки

*/

let string = "I love Dasha";
let firstChar = string[0];
let secondChar = string[string.length - 1];
console.log(firstChar,secondChar);


/*

 2. Сделать первую и последнюю буквы в верхнем регистре

*/


let upfirst = firstChar.toLocaleUpperCase();
let upnext = firstChar.toLocaleLowerCase();
console.log(upfirst,upnext);


/*

3. Найти положение слова ‘string’ в строке

*/


let stringIndex = string.indexOf("string");
console.log(stringIndex);


/*

4. Получить строку с 5-го символа длиной 4 буквы

*/

let subStr = string.substr(5,4);
console.log(subStr);


/*

 5. Получить строку с 5-го по 9-й символы

*/

let secondSub = string.slice(5,9);
console.log(secondSub);


/*

6 Получить новую строку из исходной путем удаления последних 6-и символов
  (то есть исходная строка без последних 6и символов)

*/

let newString = string.substring(-1,6);
console.log(newString);