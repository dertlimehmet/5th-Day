var MoneyType;
(function (MoneyType) {
    MoneyType[MoneyType["High"] = 0] = "High";
    MoneyType[MoneyType["Mid"] = 1] = "Mid";
    MoneyType[MoneyType["Low"] = 2] = "Low";
})(MoneyType || (MoneyType = {}));
class HighZam {
    money(price) {
        return price = (price * 0.4) + price;
    }
}
class MidZam {
    money(price) {
        return price = (price * 0.3) + price;
    }
}
class LowZam {
    money(price) {
        return price = (price * 0.2) + price;
    }
}
class NewMoney {
    GoodBudget(price, moneyCalculate) {
        return moneyCalculate.money(price);
    }
    BadBudget(price, moneyType) {
        let firstMoney = 0;
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
    }
}
var moneyCalculate = new NewMoney();
//good
console.log(`High:${moneyCalculate.GoodBudget(5000, new HighZam())}`);
console.log(`Mid:${moneyCalculate.GoodBudget(5000, new MidZam())}`);
console.log(`Low:${moneyCalculate.GoodBudget(5000, new LowZam())}`);
//bad
console.log(`High:${moneyCalculate.BadBudget(5000, MoneyType.High)}`);
console.log(`Mid:${moneyCalculate.BadBudget(5000, MoneyType.Mid)}`);
console.log(`Low:${moneyCalculate.BadBudget(5000, MoneyType.Low)}`);
let externalMoneyType = MoneyType.Low;
let moneyArray = [];
let moneyFirst = 4000;
moneyArray.push({ moneyType: MoneyType.High, calculateMoney: new HighZam() });
moneyArray.push({ moneyType: MoneyType.Mid, calculateMoney: new MidZam() });
moneyArray.push({ moneyType: MoneyType.Low, calculateMoney: new LowZam() });
let currentMoneyCalculate = moneyArray.find(x => x.moneyType == externalMoneyType);
console.log(currentMoneyCalculate === null || currentMoneyCalculate === void 0 ? void 0 : currentMoneyCalculate.calculateMoney.money(moneyFirst));
