"use strict";

class Vehicle{
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }


    showDetails(){
        return `${this.name} ${this.maker} ${this.engine}`
    }


}

var vehicle1= new Vehicle("model 1","renault","engine renault")
var vehicle2= new Vehicle("model 2","opel","engine opel")
var Vehicle3=new Vehicle();


console.log(vehicle1.showDetails());
console.log(vehicle2.showDetails());
console.log(vehicle2.name);
console.log(vehicle1.name);