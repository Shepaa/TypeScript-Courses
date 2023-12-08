interface ICalc {
    add(a: number, b: number): number;

    minus(a: number, b: number): number;

    multiply(a: number, b: number): number;

    divide(a: number, b: number): number;
}

const calcObj: ICalc = {
    add(a: number, b: number): number {
        return a + b
    },
    minus(a: number, b: number): number {
        return a - b
    },
    divide(a: number, b: number): number {
        return a / b
    },
    multiply(a: number, b: number): number {
        return a * b
    }
}

function calculate(calc: ICalc, action: string, operandA: number, operandB: number) {
    switch (action) {
        case 'add':
            return calc.add(operandA, operandB);
        case 'minus':
            return calc.minus(operandA, operandB);
        case 'multiply':
            return calc.multiply(operandA, operandB);
        case 'divide':
            return calc.divide(operandA, operandB);
        default:
            throw new Error('Невідома операція');
    }
}

console.log(calculate(calcObj, 'add', 2, 2));


interface IAuthor {
    authorName?: string
}

interface IBook  {
    bookName?: string
    releaseYear?: number
    author: IAuthor
}

interface IBookService {
    getAuthorFullName(): string;
    getBookName(): string;
    getReleaseYear(): number;
    getFullBookInformation(): string | number;
}

const book: IBook = {
    bookName: 'Sample Book',
    releaseYear: 2023,
    author: {
        authorName: 'John Doe',
    },
}

const bookService: IBookService = {
    getAuthorFullName(): string {
        return book.author.authorName;
    },

    getBookName(): string {
        return book.bookName;
    },

    getReleaseYear(): number {
        return book.releaseYear;
    },

    getFullBookInformation(): string | number {
        return `${this.getBookName()} by ${this.getAuthorFullName()}, released in ${this.getReleaseYear()}`;
    },
};

