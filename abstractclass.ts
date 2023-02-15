abstract class BasePerson {

    id: number;
    name: string;

    show() {
        console.log(`${this.id} ${this.name}`)
    }
    abstract detailts(a: number);


}

//var p = new BasePerson(); // newlenemez

class Person2 extends BasePerson { //Sadece abstract tanımlananları alır

    detailts(a: number) {
        throw new Error("Method not implemented.");
    }

}

var p = new Person2();
p.id = 1;
p.name = "ahmet";
p.show;