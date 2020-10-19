const car  = {
    brand: "Audi",
    year: 2019,
}

Object.defineProperty(car, "age",{
    get: function(){
        return `Машина была выпущена в ${this.year}`;
    },
    set : function(value){
        this.year = value
    }
});

car.age = "kjk";
console.log(car.age);

const product = {
	brand: 'Apple',
	model: 'iPhone 7',
	price: '$300'
};

Object.defineProperty(product, "info",{
    get : function(){
        return `${this.brand} ${this.model}`;
    },
    set: function(value){
        if (typeof(value)!="string"){
            console.log("Ошибка");
        }
        else{
           let name = value.split(" ");
            [this.brand,this.model] = name
            
        }
    }
});

product.info = "Samsumg Galaxy S5";
console.log(product.info);
console.log(product.model);

const person = {
	name: 'Danil',
	age: 20,
	lastGet: '',
	lastUpdate: ''
};



Object.defineProperty(person,"last",{

    get: function(){
        this.lastGet = new Date();
        return `Name :${this.name}`
    },

    set: function(value){
       this.update = new Date();
       this.name = value;
    }

});

console.log(person.last);
console.log(person.lastGet);
console.log(person.last = "Dariiuska");
console.log(person.lastUpdate);
