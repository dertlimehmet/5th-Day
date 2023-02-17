var SalaryType;
(function (SalaryType) {
    SalaryType[SalaryType["High"] = 0] = "High";
    SalaryType[SalaryType["Mid"] = 1] = "Mid";
    SalaryType[SalaryType["Low"] = 2] = "Low";
})(SalaryType || (SalaryType = {}));
var HighSalaryCalculate = /** @class */ (function () {
    function HighSalaryCalculate() {
    }
    HighSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 10;
    };
    return HighSalaryCalculate;
}());
var MidSalaryCalculate = /** @class */ (function () {
    function MidSalaryCalculate() {
    }
    MidSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 7.5;
    };
    return MidSalaryCalculate;
}());
var LowSalaryCalculate = /** @class */ (function () {
    function LowSalaryCalculate() {
    }
    LowSalaryCalculate.prototype.calculate = function (salary) {
        return salary * 5;
    };
    return LowSalaryCalculate;
}());
var SalaryCalculate = /** @class */ (function () {
    function SalaryCalculate() {
    }
    SalaryCalculate.prototype.CalculateGood = function (salary, salaryCalculate) {
        return salaryCalculate.calculate(salary);
    };
    SalaryCalculate.prototype.CalculateBad = function (salary, salaryType) {
        var sumSalary = 0;
        switch (salaryType) {
            case SalaryType.High:
                sumSalary = sumSalary * 10;
                break;
            case SalaryType.Low:
                sumSalary = sumSalary * 5;
                break;
            default:
                break;
        }
        return sumSalary;
    };
    return SalaryCalculate;
}());
var salaryCalculate = new SalaryCalculate();
//bad
console.log("low ".concat(salaryCalculate.CalculateBad(1000, SalaryType.Low)));
console.log("high ".concat(salaryCalculate.CalculateBad(1000, SalaryType.High)));
// interface ISalaryKeyValue {
//     salaryType: SalaryType;
//     SalaryCalculate: ISalaryCalculate
// }
// let externalSalaryType= SalaryType.High;
// let salaryArray : ISalaryKeyValue[] = [];
// let salary = 2000;
// salaryArray.push({ salaryType: SalaryType.High, SalaryCalculate: new HighSalaryCalculate() });
// salaryArray.push({ salaryType: SalaryType.Mid, SalaryCalculate: new MidSalaryCalculate() });
// salaryArray.push({ salaryType: SalaryType.Low, SalaryCalculate: new LowSalaryCalculate() });
// let currentSalaryCalculate = salaryArray.find(x => x.salaryType == externalSalaryType);
// console.log(currentSalaryCalculate?.SalaryCalculate.calculate(salary));
//good
console.log("high ".concat(salaryCalculate.CalculateGood(1000, new HighSalaryCalculate())));
console.log("low ".concat(salaryCalculate.CalculateGood(1000, new LowSalaryCalculate())));
console.log("mid ".concat(salaryCalculate.CalculateGood(1000, new MidSalaryCalculate())));
