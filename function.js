function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
var add_anonymous = function (a, b) {
    return a + b;
};
add_anonymous(5, 6);
var add_anonymousType_2 = function (a, b) { return a + b; };
var add_anonymousType_3 = function (a, b) { return a + b; };
var add_anonymousType_4 = function () { return console.log("Boş Method"); };
function add2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    a.forEach(function (x) {
        sum += x;
    });
    return sum;
}
console.log(add2(2, 3, 4, 5, 6, 7));
function add3(x, y) {
    var a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        a[_i - 2] = arguments[_i];
    }
    var sum = 0;
    a.forEach(function (x) {
        sum += x;
    });
    return sum;
}
