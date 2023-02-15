class Person {
    id: number;
    name: string;
    protected age: number;
    salary: number;

    constructor(name: string) {
        this.name = name;
    }

    show(): void {
        console.log(`${this.id} ${this.name}`)
    }
}

class JuniorDevPerson extends Person {
    constructor(id: number, name: string, age: number) {
        super(name); //
        this.id = id;
        this.age = age;
    }
}

class MidDevPerson extends Person {

}

class SeniorDevPerson extends Person {

}

var mid = new MidDevPerson("ahmet");

var person = new Person("veli");
