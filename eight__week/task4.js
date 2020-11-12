/*

2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод
  “установить количество этажей”).
  Создайте наследников этого класса:
   классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование

   У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” 
   должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир

   У торгового центра появится свойство “количество магазинов на этаже”, а метод 
   “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов} 

*/

function Building(name,countFloor){
 this.name = name;
 this.countFloor = countFloor;
 this.getCountFloors = function(){
     return this.countFloor;
 }

 this.setCountFloors = function(value){
     this.countFloor = value;
 }
}

function House(name,countFloor,countflats){
Building.call(this,name,countFloor);
this.countflats = countflats;
this.getFlats = function(){
    return `Количество этажей ${this.countFloor}`
}
this.getCountFloors = function(){

    return {
        "Этажи" : this.countFloor,
        "Всего этажей": this.countFloor * this.countflats
    }
}
}

function Center(name, countFloor,countShops){
    Building.call(this,name,countFloor);
    this.countShops = countShops;

    this.getCountFloors = function(){
        return {
            "этажи": this.countFloor,
            "Всего магазинов": this.countFloor * this.countShops,
        }
    }
}

const build = new Building("POLT",7);
console.log(build.getCountFloors());

const house = new House("house",8,12);
console.log(house.getCountFloors());
console.log(house.getFlats());

const center = new Center("KLASS",12,2);
console.log(center.getCountFloors());



