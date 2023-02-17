interface IRightBehavior {
    Right(): void;
}

interface ILeftBehavior {
    Left(): void;
}


class RightBehaviorType1 implements IRightBehavior {
    Right(): void {
        console.log("Right Type-1");
    }

}
class RightBehaviorType2 implements IRightBehavior {
    Right(): void {
        console.log("Right Type-2");
    }

}
class RightBehaviorType3 implements IRightBehavior {
    Right(): void {
        console.log("Right Type-3");
    }

}

class LeftBehaviorType1 implements ILeftBehavior {
    Left(): void {
        console.log("Left Type-1");
    }

}
class LeftBehaviorType2 implements ILeftBehavior {
    Left(): void {
        console.log("Left Type-2");
    }

}
class LeftBehaviorType3 implements ILeftBehavior {
    Left(): void {
        console.log("Left Type-3");
    }

}

abstract class BaseVehicle {

    public _rightBehavior: IRightBehavior;
    public _leftBehavior: ILeftBehavior;
    constructor(rightBehavior: IRightBehavior, leftBehavior: ILeftBehavior) {
        this._rightBehavior = rightBehavior;
        this._leftBehavior = leftBehavior;
    }

    SetRightOrLeftBehavior(rightBehavior:IRightBehavior,leftBehavior:ILeftBehavior){
        this._rightBehavior=rightBehavior;
        this._leftBehavior=leftBehavior;
    }

    Forward(): void {
        console.log("İleri")
    }
    Backward(): void {
        console.log("Geri")
    }
    Right():void{
        this._rightBehavior.Right();
    }
    Left():void{
        this._leftBehavior.Left();
    }
}

class Car1 extends BaseVehicle {

}

class Car2 extends BaseVehicle {

}

class Car3 extends BaseVehicle {

}

class Train extends BaseVehicle {

}

var c1 = new Car1(new RightBehaviorType2(),new LeftBehaviorType3());
c1.Forward();
c1.Backward();
c1.Left();
c1.Right();
c1.SetRightOrLeftBehavior(new RightBehaviorType1(),new LeftBehaviorType1())
c1.Right();
c1.Left();