var School = /** @class */ (function () {
    function School() {
        this._areas = [];
        this._lecturers = [];
    }
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.addLecturer = function (lecturer) {
        this._lecturers.push(lecturer);
    };
    School.prototype.removeAreaByIndex = function (removeIndex) {
        this._areas.slice(removeIndex, 1);
    };
    School.prototype.removeLecturerByIndex = function (removeIndex) {
        this._lecturers.slice(removeIndex, 1);
    };
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    return School;
}());
var Lecturer = /** @class */ (function () {
    function Lecturer(name, surname, position, company, experience, courses, contacts) {
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.company = company;
        this.experience = experience;
        this.courses = courses;
        this.contacts = contacts;
    }
    return Lecturer;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "levels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (level) {
        this._levels.push(level);
    };
    Area.prototype.removeLevelByIndex = function (removeIndex) {
        this._levels.slice(removeIndex, 1);
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        this._name = name;
        this._description = description;
        this._groups = ['Hello world', "I'm TypeScript"];
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "groups", {
        get: function () {
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroupByIndex = function (removeIndex) {
        this._groups.slice(removeIndex, 1);
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._area = '';
        this._status = '';
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "area", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Group.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "directionNameGetter", {
        get: function () {
            return this.directionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "levelNameGetter", {
        get: function () {
            return this.levelName;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.removeStudentByIndex = function (removeIndex) {
        this._students.slice(removeIndex, 1);
    };
    Object.defineProperty(Group.prototype, "setStatus", {
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.showPerformance = function () {
        return this._students.toSorted(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
    };
    return Group;
}());
Array.prototype.toSorted = function (compareFn) {
    return this.slice().sort(compareFn);
};
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = [4];
        this._visits = [true];
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "setGrade", {
        set: function (mark) {
            this._grades.push(mark);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setVisit", {
        set: function (visit) {
            this._visits.push(visit);
        },
        enumerable: false,
        configurable: true
    });
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
