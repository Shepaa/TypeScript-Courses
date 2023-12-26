function filterArray(array, condition) {
    return array.filter(condition);
}
var numbers = [1, 2, 3, 4, 5];
var filteredNumbers = filterArray(numbers, function (num) { return num < 2; });
console.log(filteredNumbers);
