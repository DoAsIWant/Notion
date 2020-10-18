let obj = {
    name:"Danil",
    info:{
        skills: "js"
    }
}

let obj2 = {
    age:20,
}

let obj1 = Object.assign({},obj,obj2);
console.log(obj===obj1);
let newObj = obj;
let convert = JSON.stringify(obj);
newObj = JSON.parse(convert);
console.log(newObj === obj);

let key = Object.keys(obj1);
console.log(key);
let value = Object.values(obj1);
console.log(value);
let fromEntries = Object.fromEntries([["Value","a"]]);
console.log(fromEntries);