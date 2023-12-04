type Grade = {
    workName: string,
    mark: boolean,
}
type Visit = {
    lesson: string,
    present: boolean,
}
type PrintType = keyof typeof Print;
type BadgeSizeType = keyof typeof BadgeSize;

enum BadgeTypesEnum {
    COLOR = 'color',
    MONO = 'mono'
}
const Print = {
    standard: 'color',
    fast: 'zpl'
}
const BadgeSize = {
    single: '4x3',
    double: '4x6'
}

type BadgeData = `${BadgeSizeType}_${PrintType}`

class Student {
    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: Grade[] = [];
    _visits: Visit[] = [];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    badgeTypeMap: Map<BadgeData, BadgeTypesEnum> = new Map<BadgeData, BadgeTypesEnum>([
        ['single_fast', BadgeTypesEnum.COLOR],
        ['single_standard', BadgeTypesEnum.COLOR],
        ['double_fast', BadgeTypesEnum.MONO],
        ['double_standard', BadgeTypesEnum.MONO]
    ])

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    setGrade(grade: Grade): void {
        this._grades.push(grade);
    }

    setVisit(visit: Visit): void {
        this._visits.push(visit);
    }

    getPerformanceRating(): number {
        const gradeValues = Object().values(this._grades);
        if (!gradeValues.length) return 0;
        const averageGrade: number = gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage: number = (this._visits.filter(present => present).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
}