// Dependency Inversion Prensip
// Inversion of Control Prensip
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.method1 = function () { return 10; };
    ;
    B.prototype.method2 = function () { };
    ;
    B.prototype.method3 = function () { };
    ;
    B.prototype.method4 = function () { };
    ;
    B.prototype.method5 = function () { };
    ;
    return B;
}());
var BType2 = /** @class */ (function () {
    function BType2() {
    }
    BType2.prototype.method1 = function () {
        return 20;
    };
    BType2.prototype.method2 = function () {
        throw new Error("Method not implemented.");
    };
    return BType2;
}());
var A = /** @class */ (function () {
    function A(b) {
        this.b = b;
    }
    A.prototype.method1 = function () {
        return this.b.method1() + 10;
    };
    return A;
}());
var a = new A(new B());
console.log(a.method1());
