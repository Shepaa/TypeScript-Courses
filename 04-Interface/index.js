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
