const names = ["Danil","Nazar","Dariiuska"];

function mapArray(array,funct){
    const result = [];
    for(let i = 0; i<array.length;i++){
        result.push(funct(array[i]));
    }

    return result;
}


function upperCase(element){
    return element.toUpperCase();
}

let arrayToupper = mapArray(names,upperCase);
console.log(arrayToupper);

function greeting(firstName){
    return function(lastName){
        return `Hello ${firstName} ${lastName}`;
    }
}

const fullName = greeting("Danil")("Kutsenko");
console.log(fullName);


/*

1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:


*/

function changeArray(array, callback){
    const newArray = [];
    for(let i = 0; i<array.length;i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}

function stringFromArray(el){
    return el.toUpperCase();
}

function multiplyTen(el){
    return el * 10;
}

function getObjectProp(el){
    return `${el.name} is ${el.age}`
}

function reverseElement(el){
    return el.split("").reverse().join("");
}

let newArray = changeArray(["my", "name", "is", "Trinity"],stringFromArray);
console.log(newArray);
let myltiply = changeArray([10,20,30],multiplyTen);
console.log(myltiply);
let getFrom = changeArray([{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}],getObjectProp);
console.log(getFrom);
let reverse = changeArray(["kji","wwer"],reverseElement);
console.log(reverse);
