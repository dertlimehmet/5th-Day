var MoneyType;
(function (MoneyType) {
    MoneyType[MoneyType["High"] = 0] = "High";
    MoneyType[MoneyType["Mid"] = 1] = "Mid";
    MoneyType[MoneyType["Low"] = 2] = "Low";
})(MoneyType || (MoneyType = {}));
var HighZam = /** @class */ (function () {
    function HighZam() {
    }
    HighZam.prototype.money = function (price) {
        return price = (price * 0.4) + price;
    };
    return HighZam;
}());
var MidZam = /** @class */ (function () {
    function MidZam() {
    }
    MidZam.prototype.money = function (price) {
        return price = (price * 0.3) + price;
    };
    return MidZam;
}());
var LowZam = /** @class */ (function () {
    function LowZam() {
    }
    LowZam.prototype.money = function (price) {
        return price = (price * 0.2) + price;
    };
    return LowZam;
}());
var NewMoney = /** @class */ (function () {
    function NewMoney() {
    }
    NewMoney.prototype.GoodBudget = function (price, moneyCalculate) {
        return moneyCalculate.money(price);
    };
    NewMoney.prototype.BadBudget = function (price, moneyType) {
        var firstMoney = 0;
        switch (moneyType) {
            case MoneyType.High:
                firstMoney = (firstMoney * 0.4) + firstMoney;
                break;
            case MoneyType.Mid:
                firstMoney = (firstMoney * 0.3) + firstMoney;
                break;
            case MoneyType.Low:
                firstMoney = (firstMoney * 0.2) + firstMoney;
                break;
            default:
                break;
        }
        return firstMoney;
    };
    return NewMoney;
}());
var moneyCalculate = new NewMoney();
//good
console.log("High:".concat(moneyCalculate.GoodBudget(5000, new HighZam())));
console.log("Mid:".concat(moneyCalculate.GoodBudget(5000, new MidZam())));
console.log("Low:".concat(moneyCalculate.GoodBudget(5000, new LowZam())));
//bad
console.log("High:".concat(moneyCalculate.BadBudget(5000, MoneyType.High)));
console.log("Mid:".concat(moneyCalculate.BadBudget(5000, MoneyType.Mid)));
console.log("Low:".concat(moneyCalculate.BadBudget(5000, MoneyType.Low)));
var externalMoneyType = MoneyType.Low;
var moneyArray = [];
var moneyFirst = 4000;
moneyArray.push({ moneyType: MoneyType.High, calculateMoney: new HighZam() });
moneyArray.push({ moneyType: MoneyType.Mid, calculateMoney: new MidZam() });
moneyArray.push({ moneyType: MoneyType.Low, calculateMoney: new LowZam() });
