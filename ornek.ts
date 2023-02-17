enum MoneyType {
    High,
    Mid,
    Low
}

interface IZam {
    money(price: number): number;
}

class HighZam implements IZam {
    money(price: number): number {
        return price = (price * 0.4) + price;
    }

}

class MidZam implements IZam {
    money(price: number): number {
        return price = (price * 0.3) + price;
    }

}

class LowZam implements IZam {
    money(price: number): number {
        return price = (price * 0.2) + price;
    }

}

class NewMoney {
    GoodBudget(price: number, moneyCalculate: IZam) {
        return moneyCalculate.money(price);
    }


    BadBudget(price: number, moneyType: MoneyType): number {
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



interface IMoneyValue{
    moneyType:MoneyType;
    calculateMoney:IZam;
}

let externalMoneyType=MoneyType.Low;
let moneyArray:IMoneyValue[]=[];
let moneyFirst=4000;

moneyArray.push({moneyType:MoneyType.High,calculateMoney:new HighZam()});
moneyArray.push({moneyType:MoneyType.Mid,calculateMoney:new MidZam()});
moneyArray.push({moneyType:MoneyType.Low,calculateMoney:new LowZam()});

