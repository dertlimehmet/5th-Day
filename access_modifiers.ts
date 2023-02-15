// public private protected

class A {
    private name: string; //Dışardan erişilemez

    private method1(): void { //Dışardan erişilemez

    }

    protected age: number; //Nesne örneği üzerinden erişim yok

    public method2(): void {

    }


    //1.way (get,set)
    private _count: number; //1-100 arasında olcak
    public setCount(number: number) {
        if (number > 1 && number < 100) {
            this._count = number;
        }
        else {
            throw new Error("Değer 1 ile 100 arasında olmalıdır");

        }
    }
    public getCount() {
        return this._count;
    }


    //2.way
    private _count2: number; //50-250 arasında olcak
    public get count2() {
        return this._count2;
    }
    public set count2(a: number) {
        if (a > 50 && a < 250) {
            this._count2 = a;
        }
        else {
            throw new Error("Değer 50 ile 250 arasında olmalıdır");
        }
    }
}


//1.way
var a1 = new A();
a1.method2();
a1.setCount(50);
a1.getCount();

//2.way
var a2 = new A();
a2.count2=300;