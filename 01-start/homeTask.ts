class School {
    directions: any = [];

    addDirection(direction: string):void {
        this.directions.push(direction);
    }
}

class Direction {
    levels: any = [];
    private readonly _name: string

    constructor(name: string) {
        this._name = name;
    }


    get name(): string {
        return this._name;
    }

    addLevel(level: number): void {
        this.levels.push(level);
    }
}

class Level {
    groups: any = [];
    private readonly _name: string;
    private readonly _program: string;

    constructor(name: string, program: string) {
        this._name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }


    addGroup(group: string): void {
        this.groups.push(group);
    }
}

class Group {
    _students: any = [];
    directionName: string
    levelName: number;

    constructor(directionName: string, levelName: number) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get students() {
        return this._students;
    }


    addStudent(student: string): void  {
        this._students.push(student);
    }

    showPerformance(): void {
        this.students.sort((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
    }
}

class Student {
    grades: any = {};
    attendance: any = [];
    firstName: string;
    lastName: string;
    birthYear: number;

    constructor(firstName: string, lastName: string, birthYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }

    markAttendance(present: string): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues = Object().values(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade =
            gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage =
            (this.attendance.filter((present) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}


