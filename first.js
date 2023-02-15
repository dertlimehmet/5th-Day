var price = 20;
var price2 = 20.44;
var name1 = "mehmet";
var isShow = true;
var products = null;
var product = undefined;
var price3 = 25; // any her şeyi kabul eder...
price3.toFixed(); //intellisense çalışmaz elle yazman lazım
var price4 = 30; // method kullanamaz. kullanması için tipini vermek zorunda
price4.toFixed(); // tipini belirtmeseydik kullanılamazdı
var numbers = [1, 2, 3, 4, 5]; //array
var names = ["mehmet", "ali", "veli"]; //array
var productList = ["kalem", "defter", "silgi", 20]; //array
var value1 = true;
var tuple = ["a", 3];
function calculate(a, b) {
    return [a + b, a * b];
}
console.log("Toplam: ".concat(calculate(3, 3)[0]));
console.log("\u00C7arp\u0131m: ".concat(calculate(3, 3)[1]));
//for
for (var index = 0; index < names.length; index++) {
    var element = names[index];
    console.log(element);
}
//class type
var Student = /** @class */ (function () {
    function Student(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Student.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surname, " ").concat(this.age));
    };
    return Student;
}());
//generic Class
var StudentGeneric = /** @class */ (function () {
    function StudentGeneric(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    StudentGeneric.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surname, " ").concat(this.age));
    };
    return StudentGeneric;
}());
var student1 = new Student("mehmet", "dertli", 26);
var genStudent = new StudentGeneric("ahmet", "yıldız", 23);
// var student2=new Student(); //error fırlatır, çünkü değerler verilmedi
student1.show();
genStudent.show();
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 300] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
console.log(color);
console.log(Color[color]);
//Function
function Add(a, b) {
    //geriye bişey dönmüyorsa :void yazılmalı
    // console.log(a+b) yazıldığında void yazılır
    return a + b;
}
//generic function
function genericAdd(a, b) {
    var sum = a + b;
    // console.log(sum)
    // console.log(`${a} ${b}`)
    return sum;
}
console.log("Generic Add:".concat(genericAdd(2, 5)));
