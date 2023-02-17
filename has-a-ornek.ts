interface IUpBehavior{
    Up():void;
}

interface IDownBehavior{
    Down():void;
}

class UpBehaviorType1 implements IUpBehavior{
    Up(): void {
        console.log("Go up East Type");
    }

}

class UpBehaviorType2 implements IUpBehavior{
    Up(): void {
        console.log("Go up West Type ");
    }

}

class DownBehaviorType1 implements IDownBehavior{
    Down(): void {
        console.log("Go down East Type");
    }

}

class DownBehaviorType2 implements IDownBehavior{
    Down(): void {
        console.log("Go down West Type");
    }

}

abstract class BaseLift{
    _upBehavior:IUpBehavior;
    _downBehavior:IDownBehavior;

    constructor(upBehavior:IUpBehavior,downBehavior:IDownBehavior){
        this._upBehavior=upBehavior;
        this._downBehavior=downBehavior;
    }

    SetWestOrEastBehavior(upBehavior:IUpBehavior,downBehavior:IDownBehavior){
        this._upBehavior=upBehavior;
        this._downBehavior=downBehavior;
    }

    Up():void{
        this._upBehavior.Up();
    }

    Down():void{
        this._downBehavior.Down();
    }


    West():void{
        console.log("West");
    }

    East():void{
        console.log("East");
    }

}


class Lift extends BaseLift{

}

var l1=new Lift(new UpBehaviorType2,new DownBehaviorType1);
l1.Down();
l1.Up();
l1.West();
l1.East();
l1.SetWestOrEastBehavior(new UpBehaviorType1,new DownBehaviorType1);