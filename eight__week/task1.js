function Product(brand,price,discount){
    this.brand = brand;
    this.price = price;
    this.discount = discount;
   
}

Product.prototype.getPriceWithDiscount = function(){
    return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function(value) {
    this.price = value;
}

let samsung = new Product("Apple",1000,10);
samsung.getPriceWithDiscount();
console.log(samsung);

const protoObj = {
    sayHello(){
      console.log("Hello")
    }
}

const obj = Object.create(protoObj,{
    firstName: {
        value: "Danil"
    }
});

function User(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

User.prototype.sayHello = function(){
    return ` Hello ${this.firstName} ${this.lastName}`
}

function Customer(firstName,lastName,membershiop){
    User.call(this,firstName,lastName);
    this.membershiop = membershiop;
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.cunstructor = Customer;

Customer.prototype.getMemberShip = function(){
    return this.membershiop.toUpperCase();
}

const customer = new Customer("Danil","Kutsenko","master");
console.log(customer);