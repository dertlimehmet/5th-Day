var EmployeeRepository = /** @class */ (function () {
    function EmployeeRepository() {
    }
    EmployeeRepository.prototype.show = function (id) {
        console.log("Employee ID:".concat(id));
    };
    return EmployeeRepository;
}());
var EmployeeRepositoryWithDiff = /** @class */ (function () {
    function EmployeeRepositoryWithDiff() {
    }
    EmployeeRepositoryWithDiff.prototype.show = function (id) {
        console.log("Different Employee Id:".concat(id));
    };
    return EmployeeRepositoryWithDiff;
}());
var EmployeeService = /** @class */ (function () {
    function EmployeeService(employeeRepository) {
        this._employeeRepository = employeeRepository;
    }
    EmployeeService.prototype.showMe = function (id) {
        this._employeeRepository.show(id);
    };
    return EmployeeService;
}());
var employeeID = new EmployeeService(new EmployeeRepositoryWithDiff());
employeeID.showMe(1);
