// 1.
function isString(value: unknown): value is string {
    return typeof value === 'string'
}

// 2.
function filterArrayByString(array: any[]): string[] {
    return array.filter(isString)
}

// 3.1
const carParts = {
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
}

// 3.2
function fixCarParts(carParts: any) {
    return 'suspensionSystem' in carParts ?
        carParts.suspensionSystem.springs &&
        carParts.suspensionSystem.shockAbsorber &&
        carParts.suspensionSystem.springs : "This car haven't any suspension system"
}

// 4.

function isObject(value: any): value is object {
    return typeof value === "object"
}

function checkNameInObject(obj: object): obj is { name: string } {
    return 'name' in obj
}

function checkSurnameInObject(obj: object): obj is { surname: string } {
    return 'surname' in obj
}

function sayHelloUser(user: any) {
    if (isObject(user) && checkNameInObject(user) && checkSurnameInObject(user)) {
        console.log(`Hello ${user.name} ${user.surname}`)
    }
}


// 5.
function stringOrNumberOperation(value: string | number) {
    if (typeof value === "string") {
        value.charAt(2)
    } else {
        value.toFixed()
    }
}

// 6.1
function isFunction(value: any): value is Function {
    return typeof value === 'function'
}

// 6.2
function runFunction(func: any): void {
    if (isFunction(func)) {
        func();
    } else {
        console.log("Not a function");
    }
}

// 7.
class ElectricityCar {
    brand: string
    chargeReserve: number;
    yearRealise: number;

    charge() {
        console.log("I'm charging...")
    }
}

class HybridCar {
    fuelType: string

    refuel() {
        console.log("I'm refueling...")
    }
}

function isElectricityCar(car: ElectricityCar | HybridCar): car is ElectricityCar {
    return car instanceof ElectricityCar;
}

function startCar(car: ElectricityCar | HybridCar) {
    if (isElectricityCar(car)) {
        car.charge()
        return car
    } else {
        car.refuel()
    }
}