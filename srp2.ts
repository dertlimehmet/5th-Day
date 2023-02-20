class Cargo{
    cargoNo:number;
    cargoName:string;
}

class CargoRepository{
    cargoList:Cargo[]=[];

    totalCargo(cargo:Cargo){
        this.cargoList.push(cargo);
    }

    deleteCargo(cargoNo:number){
        this.cargoList.slice();
    }
}   

class ShowCargos{
    showConsole(cargoList:Cargo[]){
        cargoList.forEach(x=>{
            console.log(x);
        })
    }
}