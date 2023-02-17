class RightBehaviorType1 {
    Right() {
        console.log("Right Type-1");
    }
}
class RightBehaviorType2 {
    Right() {
        console.log("Right Type-2");
    }
}
class RightBehaviorType3 {
    Right() {
        console.log("Right Type-3");
    }
}
class LeftBehaviorType1 {
    Left() {
        console.log("Left Type-1");
    }
}
class LeftBehaviorType2 {
    Left() {
        console.log("Left Type-2");
    }
}
class LeftBehaviorType3 {
    Left() {
        console.log("Left Type-3");
    }
}
class BaseVehicle {
    constructor(rightBehavior, leftBehavior) {
        this._rightBehavior = rightBehavior;
        this._leftBehavior = leftBehavior;
    }
    SetRightOrLeftBehavior(rightBehavior, leftBehavior) {
        this._rightBehavior = rightBehavior;
        this._leftBehavior = leftBehavior;
    }
    Forward() {
        console.log("İleri");
    }
    Backward() {
        console.log("Geri");
    }
    Right() {
        this._rightBehavior.Right();
    }
    Left() {
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
var c1 = new Car1(new RightBehaviorType2(), new LeftBehaviorType3());
c1.Forward();
c1.Backward();
c1.Left();
c1.Right();
c1.SetRightOrLeftBehavior(new RightBehaviorType1(), new LeftBehaviorType1());
c1.Right();
c1.Left();
