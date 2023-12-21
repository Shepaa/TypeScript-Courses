var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function isString(value) {
    return typeof value === 'string';
}
function filterArrayByString(array) {
    return array.filter(isString);
}
// console.log(filterArrayByString(["I love TypeScript", 2]));
var carParts = {
    suspensionSystem: {
        struts: "old",
        shockAbsorber: 'new',
        springs: 'average'
    },
    engine: {
        Cylinder: "new",
        Piston: 'old',
        Crankshaft: 'average',
        Camshaft: 'old',
        SparkPlug: 'old',
        FuelInjector: "new",
        ExhaustManifold: 'average',
        IntakeManifold: "new",
        CylinderHead: 'average',
        EngineBlock: 'average',
    }
};
function fixCarParts(carParts) {
    return 'suspensionSystem' in carParts ?
        carParts.suspensionSystem.springs &&
            carParts.suspensionSystem.shockAbsorber &&
            carParts.suspensionSystem.springs : "This car haven't any suspension system";
}
// console.log(fixCarParts(carParts))
function stringOrNumberOperation(value) {
    if (typeof value === "string") {
        value.charAt(2);
    }
    else {
        value.toFixed();
    }
}
var ElectricityCar = /** @class */ (function () {
    function ElectricityCar() {
    }
    ElectricityCar.prototype.charge = function () {
        console.log("I'm charging...");
    };
    return ElectricityCar;
}());
var HybridCar = /** @class */ (function (_super) {
    __extends(HybridCar, _super);
    function HybridCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HybridCar.prototype.refuel = function () {
        console.log("I'm refueling...");
    };
    return HybridCar;
}(ElectricityCar));
function isElectricityCar(car) {
    return car instanceof ElectricityCar;
}
console.log(isElectricityCar(new ElectricityCar()));
function startCar(car) {
}
