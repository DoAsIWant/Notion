function Product(brand,price){
    this.brand = brand;
    this.price = price;
    this.doublePrice = function(){
        this.price * 2;
    }
}

Product.prototype.doublePrice = function(){
    return this.price * 2;
}

const bmv = new Product("BMV",2000);
console.log(bmv);

// Object create

const protoForObj = {
    sayHello(){
        return `Hello world`
    }
}


function User(firstName,age){
    this.firstName = firstName;
    this.age = age;

}

function Customer(firstName,age,message){
    User.call(this,firstName,age);
    this.message = message;
}

User.prototype.sayHello = function(){
    return `Hello ${this.firstName}`;
}

User.prototype.getFullName = function(){
    return `${this.firstName} ${this.age}`
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

const user = new User("Danil",19);
const cust = new Customer("Nazar","Kutsenko","ff")
console.log(cust);
