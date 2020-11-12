/*

1. Есть класс Planet
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}
Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
принимать, кроме name, название спутника (satelliteName). Переопределите метод
getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
дополнительный текст 'The satellite is' + satelliteName.
Например:
var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’


*/

function Planet(name){
    this.name = name;
}

Planet.prototype.getName = function(){
   return "Planet name is " + this.name;   
}

function PlanetWithSatellite(name,satelName){
    Planet.call(this,name);
    this.satelName = satelName
}


PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

PlanetWithSatellite.prototype.getSatelName = function(){
    return `${Planet.prototype.getName.call(this)}  and ${this.satelName}`
  }
  

const satel = new PlanetWithSatellite("MARS","crewDragon");
const planet = new Planet("Eart");
console.log(satel.getSatelName());




