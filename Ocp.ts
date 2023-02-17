enum SalaryType {
    High,
    Mid,
    Low
}

interface ISalaryCalculate {
    calculate(salary: number): number;
}

class HighSalaryCalculate implements ISalaryCalculate {
    calculate(salary: number): number {
        return salary * 10;
    }

}

class MidSalaryCalculate implements ISalaryCalculate {
    calculate(salary: number): number {
        return salary * 7.5;
    }

}

class LowSalaryCalculate implements ISalaryCalculate {
    calculate(salary: number): number {
        return salary * 5;
    }

}

class SalaryCalculate {
    CalculateGood(salary: number, salaryCalculate: ISalaryCalculate) {
        return salaryCalculate.calculate(salary);
    }



    CalculateBad(salary: number, salaryType: SalaryType): number {
        let sumSalary = 0;
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
    }
}


var salaryCalculate = new SalaryCalculate();
//bad
console.log(`low ${salaryCalculate.CalculateBad(1000, SalaryType.Low)}`);
console.log(`high ${salaryCalculate.CalculateBad(1000, SalaryType.High)}`);

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
console.log(`high ${salaryCalculate.CalculateGood(1000, new HighSalaryCalculate())}`);
console.log(`low ${salaryCalculate.CalculateGood(1000, new LowSalaryCalculate())}`);
console.log(`mid ${salaryCalculate.CalculateGood(1000, new MidSalaryCalculate())}`);