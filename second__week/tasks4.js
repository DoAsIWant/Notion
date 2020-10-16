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
