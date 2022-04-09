class Vehicle {
    constructor(make, model, year) {
        for (let value of [make, model, year]) {
            if (value.length === 0 ) {
                throw new Error("Make and model must be included")
            } else if (!Number.isInteger(year) || year < 1900) {
                throw new Error("A valid year must be included")
            }
        this.make = make;
        this.model = model;
        this.year = year;
        }
    }
    honk() {
        return "Beep!";
    }
    toString() {
        const {make, model, year} = this;
        return `The vehicle is a ${year} ${make} ${model}.`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }

}


class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

/**
 * Class to hold vehicle objects
 */
class Garage {
    constructor(capacity) {
        if (!Number.isFinite(capacity) || capacity < 1) {
            throw new Error ("At least 1 vehicle must be able to fit (in theory)");
        }
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(vehicle) {
        const { vehicles, capacity } = this;
        
        if ( vehicles.length === capacity ) {
            return "Sorry, we're full.";
        } else if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!"
        } else {
            vehicles.push(vehicle);
            return "Vehicle added!";
        }
    }
}

const firstCar = new Car("Mazda", "3", 2006)
const nextCar = new Car("Toytoa", "Rav4", 2014)
const ninja = new Motorcycle("Kawasaki", "Ninja", 2023)

const myGarage = new Garage(2)
myGarage.add(firstCar)
myGarage.add(nextCar)