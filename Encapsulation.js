"use strict"
class Product {


    #stock=500; //private
    // stock=500; //public
    constructor() { //dış dünyaya kapalı
        var name = "kalem 1";
        var price;
    }
    
    setStock(stock){
        if(stock>1000){
            this.#stock=stock;
        }
        else{
            throw "stock değeri 1000'den fazla olmalıdır"
        }
    }
    getStock(){return this.#stock};


    setPrice(price) {
        if (price > 1 && price < 100) {
            this.price = price;
        }
        else {
            throw "price değeri 1-100 aralığında olmalıdır"
        }
    }
    getPrice() {
        return this.price
    }

    //public method
    publicCalculate(){
        return this.#Calculate();
    }
    
    //private method
    #Calculate(){
        return 10;
    }

}


class Person{
    static ageConst=60; // dıştan erişilebilir, sağlıklı değil
    //static #ageConst=60; // olması gereken, private olsa bile dışardan erişebilir?
    
    constructor(name,age){
        this.name=name; //instance variable
        this.age=age;
    }
    calculate(ageConst2){
        console.log(`${this.name} ${ageConst2 - this.age}`)
    }
}

var p1=new Person("ahmet",20);
p1.calculate(20);
var p2=new Person("mehmet",30);

console.log(`${p1.name} ${Person.ageConst-p1.age}`)
console.log(`${p2.name} ${Person.ageConst-p2.age}`)

Person.ageConst=100;
console.log(`${p1.name} ${Person.ageConst-p1.age}`)
console.log(`${p2.name} ${Person.ageConst-p2.age}`)


// Access Modifiers
 // public, private, protected : typescript
 // public, private


var product = new Product();
product.setPrice(15)
console.log(product.getPrice());
console.log(product.publicCalculate());

//product.setStock(10120);
console.log(product.getStock());