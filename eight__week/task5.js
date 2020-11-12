/*

3.Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
 (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). 
 Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и Мебель для дома”. Придумайте им по одному свойству,
  которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие 
  компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.


*/

function Furniture(name,price){
    this.name = name;
    this.price = price;

}

Furniture.prototype.getInfo = function(){
    return `Имя ${this.name} Цена ${this.price}`;
}

function Office(name,price,brand){
    Furniture.call(this,name,price);
    this.brand = brand;
}

function House(name,price,isTable){
    Furniture.call(this,name,price);
    this.isTable = isTable;

}


Office.prototype = Object.create(Furniture.prototype);
Office.prototype.constructor = Office;
Office.prototype.getInfo = function(){
    return `Имя ${this.name} Цена ${this.price} ${this.brand}`;
}

House.prototype = Object.create(Furniture.prototype);
House.prototype.constructor = House;
House.prototype.getInfo = function(){
    return `Имя ${this.name} Цена ${this.price} ${this.isTable}`
}


const ofice = new Office("kf",200,"it");
const house = new House("something",400,false)
console.log(ofice.getInfo());
console.log(ofice);
console.log(house.getInfo());
