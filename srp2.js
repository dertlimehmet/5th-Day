var Cargo = /** @class */ (function () {
    function Cargo() {
    }
    return Cargo;
}());
var CargoRepository = /** @class */ (function () {
    function CargoRepository() {
        this.cargoList = [];
    }
    CargoRepository.prototype.totalCargo = function (cargo) {
        this.cargoList.push(cargo);
    };
    CargoRepository.prototype.deleteCargo = function (cargoNo) {
        this.cargoList.slice();
    };
    return CargoRepository;
}());
var ShowCargos = /** @class */ (function () {
    function ShowCargos() {
    }
    ShowCargos.prototype.showConsole = function (cargoList) {
        cargoList.forEach(function (x) {
            console.log(x);
        });
    };
    return ShowCargos;
}());
