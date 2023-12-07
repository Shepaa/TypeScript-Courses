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

interface IBook extends IAuthor {
    bookName?: string
    releaseYear?: number
}

interface IBookService extends IBook {
    getAuthorFullName(book: IBook): string;

    getBookName(book: IBook): string

    getReleaseYear(book: IBook): number

    getFullBookInformation(book: IBook): string
}


const bookService: IBookService = {
    getBookName(book: IBook): string {
        return book.bookName
    },
    getAuthorFullName(book: IBook): string {
        return book.authorName
    },
    getReleaseYear(book: IBook): number {
        return book.releaseYear
    },
    getFullBookInformation(book: IBook): string  {
        return `${book.authorName} it's the Author of the book ${book.bookName} was release at ${book.releaseYear} `
    }
}

