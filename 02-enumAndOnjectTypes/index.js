var Enum;
(function (Enum) {
    Enum["Zero"] = "Zero";
    Enum["First"] = "First";
    Enum["Second"] = "Second";
})(Enum || (Enum = {}));
var number;
function setNum(value) {
    number = value;
}
setNum(Enum.Second);
console.log(number);
