var ElectricCar = /** @class */ (function () {
    function ElectricCar() {
    }
    ElectricCar.prototype.charge = function () {
    };
    return ElectricCar;
}());
var PetrolCar = /** @class */ (function () {
    function PetrolCar() {
    }
    PetrolCar.prototype.fuel = function () {
    };
    return PetrolCar;
}());
function isElectricCar(car) {
    return car instanceof ElectricCar;
}
console.log(isElectricCar(new ElectricCar()));
