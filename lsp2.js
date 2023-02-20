var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students() {
    }
    Students.prototype.takeCourse = function () {
        console.log("Öğrenciler ders alır");
    };
    return Students;
}());
var MaleStudents = /** @class */ (function (_super) {
    __extends(MaleStudents, _super);
    function MaleStudents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaleStudents.prototype.dropCourse = function () {
        console.log("Bazı erkek öğrenciler dersi bıraktı");
    };
    return MaleStudents;
}(Students));
var FemaleStudents = /** @class */ (function (_super) {
    __extends(FemaleStudents, _super);
    function FemaleStudents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FemaleStudents.prototype.dropCourse = function () {
        throw new Error("Kız öğrenciler dersi bırakmaz");
    };
    return FemaleStudents;
}(Students));
var students;
students = new MaleStudents();
students.takeCourse();
students.dropCourse();
students = new FemaleStudents();
students.takeCourse();
students.dropCourse();
