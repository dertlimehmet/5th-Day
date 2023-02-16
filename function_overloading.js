var Calculate = /** @class */ (function () {
    function Calculate() {
    }
    Calculate.prototype.getSalary = function (a, b) {
        if (typeof (a) == "number") {
            return 5;
        }
        return "salary";
    };
    return Calculate;
}());
var calculate = new Calculate();
console.log(calculate.getSalary(1, 2)); //5 döncek
console.log(calculate.getSalary("mehmet", "ahmet")); //salary döncek
