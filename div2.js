var SaveAsPDF = /** @class */ (function () {
    function SaveAsPDF() {
    }
    SaveAsPDF.prototype.save = function (name, surname) {
        console.log("Saved as .PDF: ".concat(name, "-").concat(surname));
    };
    return SaveAsPDF;
}());
var SaveAsTXT = /** @class */ (function () {
    function SaveAsTXT() {
    }
    SaveAsTXT.prototype.save = function (name, surname) {
        console.log("Saved as .TXT: ".concat(name, "-").concat(surname));
    };
    return SaveAsTXT;
}());
var SaveService = /** @class */ (function () {
    function SaveService(saving) {
        this._saving = saving;
    }
    SaveService.prototype.Saving = function (name, surname) {
        this._saving.save(name, surname);
    };
    return SaveService;
}());
var saveService = new SaveService(new SaveAsPDF());
saveService.Saving("mehmet", "dertli");
