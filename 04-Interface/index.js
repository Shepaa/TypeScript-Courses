var calcObj = {
    add: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};
function calculate(calc, action, operandA, operandB) {
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
var bookService = {
    getBookName: function (book) {
        return book.bookName;
    },
    getAuthorFullName: function (book) {
        return book.authorName;
    },
    getReleaseYear: function (book) {
        return book.releaseYear;
    },
    getFullBookInformation: function (book) {
        return "".concat(book.authorName, " it's the Author of the book ").concat(book.bookName, " was release at ").concat(book.releaseYear, " ");
    }
};
