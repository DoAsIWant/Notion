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
    for()
}