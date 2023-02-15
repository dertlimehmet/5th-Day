abstract class BaseVehicle {
    id: number;
    type: string;

    WriteToLog(log: string): void {
        console.log(log);
    }

}

class Car extends BaseVehicle {

}

class Train extends BaseVehicle {

}

var car1 = new Car();
car1.id = 1;
car1.type = "type 1";
car1.WriteToLog("car1 class");
var train1 = new Train();
train1.id = 2;
train1.type = "type 2";
train1.WriteToLog("train1 class");