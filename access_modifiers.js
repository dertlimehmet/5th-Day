// public private protected
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.method1 = function () {
    };
    A.prototype.method2 = function () {
    };
    A.prototype.setCount = function (number) {
        if (number > 1 && number < 100) {
            this._count = number;
        }
        else {
            throw new Error("Değer 1 ile 100 arasında olmalıdır");
        }
    };
    A.prototype.getCount = function () {
        return this._count;
    };
    Object.defineProperty(A.prototype, "count2", {
        get: function () {
            return this._count2;
        },
        set: function (a) {
            if (a > 50 && a < 250) {
                this._count2 = a;
            }
            else {
                throw new Error("Değer 50 ile 250 arasında olmalıdır");
            }
        },
        enumerable: false,
        configurable: true
    });
    return A;
}());
//1.way
var a1 = new A();
a1.method2();
a1.setCount(50);
a1.getCount();
//2.way
var a2 = new A();
a2.count2 = 300;
