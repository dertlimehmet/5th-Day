let price: number = 20;
let price2: number = 20.44;
let name1: string = "mehmet";
let isShow: boolean = true;
let products: null = null;
let product: undefined = undefined;
let price3: any = 25; // any her şeyi kabul eder...
price3.toFixed(); //intellisense çalışmaz elle yazman lazım
let price4: unknown = 30; // method kullanamaz. kullanması için tipini vermek zorunda
(price4 as number).toFixed(); // tipini belirtmeseydik kullanılamazdı

let numbers: number[] = [1, 2, 3, 4, 5]; //array
let names: string[] = ["mehmet", "ali", "veli"]; //array
let productList: Array<string | number> = ["kalem", "defter", "silgi", 20]; //array
let value1: string | boolean = true;

let tuple: [string, number] = ["a", 3];

function calculate(a: number, b: number): [number, number, number] {
    return [a + b, a * b, a - b];
}
console.log(`Toplam: ${calculate(3, 3)[0]}`);
console.log(`Çarpım: ${calculate(3, 3)[1]}`);
console.log(`Fark: ${calculate(3, 3)[2]}`);

//for
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);

}

//class type
class Student {
    name: string;
    surname: string;
    age: number;
    constructor(name: string, surname: string, age: number) { //ts'de ikinci constructor tanımlanamaz
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    show() {
        console.log(`${this.name} ${this.surname} ${this.age}`)
    }
}

//generic Class
class StudentGeneric<T1> {
    name: T1;
    surname: string;
    age: number;
    constructor(name: string, surname: string, age: number) { //ts'de ikinci constructor tanımlanamaz
        (this.name as string) = name;
        this.surname = surname;
        this.age = age;
    }
    show() {
        console.log(`${this.name} ${this.surname} ${this.age}`)
    }
}

var student1 = new Student("mehmet", "dertli", 26);
var genStudent = new StudentGeneric<string>("ahmet", "yıldız", 23);
// var student2=new Student(); //error fırlatır, çünkü değerler verilmedi
student1.show();
genStudent.show();

//Enum
enum Color {
    Red = 100, Green = 200, Blue = 300
}
var color: Color = Color.Red;
console.log(color);
console.log(Color[color]);

//Function
function Add(a: number, b: number): number { // dönüş tipini belirtmek gerek
    //geriye bişey dönmüyorsa :void yazılmalı
    // console.log(a+b) yazıldığında void yazılır
    return a + b;
}

//generic function
function genericAdd<T1, T2, T3>(a: T1, b: T2): T3 {
    let sum = (a as number) + (b as number)
    // console.log(sum)
    // console.log(`${a} ${b}`)
    return sum as T3
}

console.log(`Generic Add:${genericAdd<number, number, number>(2, 5)}`);

//Interface
interface IPerson{
    name:string;
    age:number;
    calculate();
    show(id:string,name:string):number;
}
let person:IPerson={name:"mehmet",age:26,calculate:function(){},show:function(id,name){return 5}};


class Person implements IPerson{
    name: string;
    age: number;
    birthDate:Date;
    calculate() {
        throw new Error("Method not implemented.");
    }
    show(id: string, name: string): number {
        throw new Error("Method not implemented.");
    }

}

var p1=new Person();
p1.age=20;
p1.name="ahmet"
p1.birthDate=new Date();

let person3:IPerson=p1;
//person3'ten birthDate'e ulaşılamaz çünkü interface içinde tanımlı değil
(person3 as Person).birthDate; // bu şekilde ulaşılabilir


interface IProduct{
    id: number;
    name:string;
    price:number;
}

var product2:IProduct={id:1,name:"salih",price:288};