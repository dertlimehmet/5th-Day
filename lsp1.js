var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SeaAnimals = /** @class */ (function () {
    function SeaAnimals() {
    }
    SeaAnimals.prototype.swims = function () {
        console.log("Deniz hayvanları yüzer");
    };
    return SeaAnimals;
}());
var Sharks = /** @class */ (function (_super) {
    __extends(Sharks, _super);
    function Sharks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sharks.prototype.sleeps = function () {
        throw new Error("Köpek balıkları uyumaz");
    };
    return Sharks;
}(SeaAnimals));
var SeaTurtles = /** @class */ (function (_super) {
    __extends(SeaTurtles, _super);
    function SeaTurtles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaTurtles.prototype.sleeps = function () {
        console.log("Deniz kaplumbağaları uyur");
    };
    return SeaTurtles;
}(SeaAnimals));
var animals;
animals = new SeaTurtles();
animals.swims();
animals.sleeps();
animals = new Sharks();
animals.swims();
animals.sleeps();
