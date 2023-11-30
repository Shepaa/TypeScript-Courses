class School {
    _areas: string[] = [];
    _lecturers: Lecturer[] = [];

    addArea(area: string): void {
        this._areas.push(area)
    }

    addLecturer(lecturer: Lecturer): void {
        this._lecturers.push(lecturer)
    }

    removeAreaByIndex(removeIndex: number): void {
        this._areas.slice(removeIndex, 1)
    }

    removeLecturerByIndex(removeIndex: number): void {
        this._lecturers.slice(removeIndex, 1)
    }

    get areas(): string[] {
        return this._areas;
    }

    get lecturers(): Lecturer[] {
        return this._lecturers;
    }
}

class Lecturer {
    name: string;
    surname: string;
    position: string;
    company: string;
    experience: number;
    courses: string[];
    contacts: string[];

    constructor(name: string, surname: string, position: string, company: string, experience: number, courses: string[], contacts: string[]) {
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.company = company;
        this.experience = experience;
        this.courses = courses;
        this.contacts = contacts;
    }
}

class Area {
    _levels: number[] = [];
    _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name
    }

    get levels(): number[] {
        return this._levels
    }

    addLevel(level: number): void {
        this._levels.push(level)
    }

    removeLevelByIndex(removeIndex: number): void {
        this._levels.slice(removeIndex, 1)
    }
}

class Level {
    _name: string;
    _groups: string[];
    _description: string;

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
        this._groups = ['Hello world', "I'm TypeScript"]
    }

    get name(): string {
        return this._name
    }

    get groups(): string[] {
        return this._groups
    }

    get description(): string {
        return this._description
    }

    addGroup(group: string): void {
        this._groups.push(group)
    }

    removeGroupByIndex(removeIndex: number): void {
        this._groups.slice(removeIndex, 1)
    }
}


class Group {
    _area: string = '';
    _status: string = '';
    _students: string[] = [];
    directionName: string;
    levelName: string;

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get area(): string {
        return this._area
    };

    get status(): string {
        return this._status
    }

    get students(): string[] {
        return this._students
    }

    get directionNameGetter(): string {
        return this.directionName
    }

    get levelNameGetter(): string {
        return this.levelName
    }

    addStudent(student: string): void {
        this._students.push(student)
    }

    removeStudentByIndex(removeIndex: number): void {
        this._students.slice(removeIndex, 1)
    }

    set setStatus(status: string) {
        this._status = status
    }

    showPerformance(): string[] {
        return this._students.toSorted((a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating());
    }
}

Array.prototype.toSorted = function <T>(compareFn: (a: T, b: T) => number): T[] {
    return this.slice().sort(compareFn);
};

interface Array<T> {
    toSorted(compareFn: (a: T, b: T) => number): T[];
}


class Student {
    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: [workName: number] = [4];
    _visits: [lesson: boolean] = [true];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    set setGrade(mark: number) {
        this._grades.push(mark)
    }

    set setVisit(visit: boolean) {
        this._visits.push(visit)
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = Object().values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade: number = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}

