class ElectricCar {
    public engine: {
        power: string
    }

    public charge() {
    }
}

class PetrolCar {
    public engine: {
        gas: string
    }

    public fuel() {
    }
}

function isElectricCar(car: ElectricCar | PetrolCar): car is ElectricCar {
    return car instanceof ElectricCar
}

console.log(isElectricCar(new ElectricCar()));