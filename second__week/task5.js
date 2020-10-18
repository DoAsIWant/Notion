function getThis(){
    console.log(this);
}

getThis();

function getParameters(){
    console.log(`${this.name} ${this.price}`)
}
const comp1 = {
    name: "Intel",
    price : 100,
    getData: getParameters,
}

const comp2 = {
    name: "Pentium",
    price : 300,
    getData: getParameters,
}

comp2.getData();