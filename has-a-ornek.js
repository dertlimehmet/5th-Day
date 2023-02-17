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
var UpBehaviorType1 = /** @class */ (function () {
    function UpBehaviorType1() {
    }
    UpBehaviorType1.prototype.Up = function () {
        console.log("Go up East Type");
    };
    return UpBehaviorType1;
}());
var UpBehaviorType2 = /** @class */ (function () {
    function UpBehaviorType2() {
    }
    UpBehaviorType2.prototype.Up = function () {
        console.log("Go up West Type ");
    };
    return UpBehaviorType2;
}());
var DownBehaviorType1 = /** @class */ (function () {
    function DownBehaviorType1() {
    }
    DownBehaviorType1.prototype.Down = function () {
        console.log("Go down East Type");
    };
    return DownBehaviorType1;
}());
var DownBehaviorType2 = /** @class */ (function () {
    function DownBehaviorType2() {
    }
    DownBehaviorType2.prototype.Down = function () {
        console.log("Go down West Type");
    };
    return DownBehaviorType2;
}());
var BaseLift = /** @class */ (function () {
    function BaseLift(upBehavior, downBehavior) {
        this._upBehavior = upBehavior;
        this._downBehavior = downBehavior;
    }
    BaseLift.prototype.SetWestOrEastBehavior = function (upBehavior, downBehavior) {
        this._upBehavior = upBehavior;
        this._downBehavior = downBehavior;
    };
    BaseLift.prototype.Up = function () {
        this._upBehavior.Up();
    };
    BaseLift.prototype.Down = function () {
        this._downBehavior.Down();
    };
    BaseLift.prototype.West = function () {
        console.log("West");
    };
    BaseLift.prototype.East = function () {
        console.log("East");
    };
    return BaseLift;
}());
var Lift = /** @class */ (function (_super) {
    __extends(Lift, _super);
    function Lift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lift;
}(BaseLift));
var l1 = new Lift(new UpBehaviorType2, new DownBehaviorType1);
l1.Down();
l1.Up();
l1.West();
l1.East();
l1.SetWestOrEastBehavior(new UpBehaviorType1, new DownBehaviorType1);
