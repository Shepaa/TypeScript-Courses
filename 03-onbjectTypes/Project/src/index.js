var BadgeTypesEnum;
(function (BadgeTypesEnum) {
    BadgeTypesEnum["COLOR"] = "color";
    BadgeTypesEnum["MONO"] = "mono";
})(BadgeTypesEnum || (BadgeTypesEnum = {}));
var Print = {
    standard: 'color',
    fast: 'zpl'
};
var BadgeSize = {
    single: '4x3',
    double: '4x6'
};
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = [];
        this._visits = [];
        this.badgeTypeMap = new Map([
            ['single_fast', BadgeTypesEnum.COLOR],
            ['single_standard', BadgeTypesEnum.COLOR],
            ['double_fast', BadgeTypesEnum.MONO],
            ['double_standard', BadgeTypesEnum.MONO]
        ]);
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (grade) {
        this._grades.push(grade);
    };
    Student.prototype.setVisit = function (visit) {
        this._visits.push(visit);
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object().values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) { return present; }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
