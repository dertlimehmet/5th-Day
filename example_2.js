var Student = /** @class */ (function () {
    function Student(id, name, surname, classroom) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.classroom = classroom;
    }
    return Student;
}());
var StudentRepository = /** @class */ (function () {
    function StudentRepository() {
    }
    StudentRepository.prototype.showStudent = function () {
        var students = [];
        students.push(new Student(1, "mehmet", "dertli", "B"));
        students.push(new Student(2, "metin", "dertli", "A"));
        students.push(new Student(3, "hatice", "dertli", "C"));
        students.push(new Student(4, "melek", "dertli", "B"));
        return students;
    };
    return StudentRepository;
}());
var StudentService = /** @class */ (function () {
    function StudentService(studentRepository) {
        this._newId = 55;
        this._studentRepository = studentRepository;
    }
    StudentService.prototype.showStudent = function () {
        var _this = this;
        var newStudents = [];
        this._studentRepository.showStudent().forEach(function (x) {
            newStudents.push(new Student(x.id + _this._newId, x.name, x.surname, x.classroom));
        });
        return newStudents;
    };
    return StudentService;
}());
var StudentFactory = /** @class */ (function () {
    function StudentFactory() {
    }
    StudentFactory.prototype.CreateRep = function () {
        return new StudentRepository();
    };
    return StudentFactory;
}());
var studentService = new StudentService(new StudentFactory().CreateRep());
studentService.showStudent().forEach(function (x) {
    console.log("".concat(x.id, " ").concat(x.name, " ").concat(x.surname, " ").concat(x.classroom));
});
