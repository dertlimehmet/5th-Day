class Person {
    id: number;
    name: string;
    salary: number;
    childCount: number;

    calculateSalary() {
        return this.salary + (this.childCount * 1000);
    }
}

class JuniorDevPerson extends Person {
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary * 2;
    }
}

class MidDevPerson extends Person {
    age:number;
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary * 4;
    }
}

class SeniorDevPerson extends Person {
    calculateSalary() {
        var baseSalary = super.calculateSalary();
        return baseSalary * 8;
    }
}

var junior = new JuniorDevPerson();
junior.id = 1;
junior.name = "mehmet";
junior.salary = 1000;
junior.childCount = 2;
console.log(`Junior Maaş:${junior.calculateSalary()}`);

var mid = new MidDevPerson();
mid.id = 2;
mid.name = "Anıl";
mid.age=26;
mid.salary = 1000;
mid.childCount = 2;
console.log(`Mid Maaş:${mid.calculateSalary()}`);

var senior = new SeniorDevPerson();
senior.id = 3;
senior.name = "Mert";
senior.salary = 1000;
senior.childCount = 2;
console.log(`Senior Maaş:${senior.calculateSalary()}`);


console.log("-------------------------------");

let basePerson:Person=junior;
console.log(`basePerson Junior Maaş:${basePerson.calculateSalary()}`);
basePerson=mid;
console.log(`basePerson Mid Maaş:${basePerson.calculateSalary()} - age:${(basePerson as MidDevPerson).age}`);
basePerson=senior;
console.log(`basePerson Senior Maaş:${basePerson.calculateSalary()}`);