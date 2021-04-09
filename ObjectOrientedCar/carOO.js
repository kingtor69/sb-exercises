const partOne = document.querySelector('#part1');
const partTwo = document.querySelector('#part2');
const partThree = document.querySelector('#part3');
const partFour = document.querySelector('#part4');

function demo(partNum, obj, objClass, newObj) {
    const partId = `#part${partNum}`;
    const section = document.querySelector(partId);
    section.innerHTML += '<hr class = "dotted">';
    if (objClass !== "Garage") {

        const p1 = document.createElement('p');
        section.appendChild(p1);
        const p2 = document.createElement('p');
        section.appendChild(p2);
        p1.innerText = obj.toString();
        p2.innerText = obj.honk();
    }

    if (objClass === "Car" || objClass === "Motorcycle") {
        const thisP = document.createElement('p');
        section.appendChild(thisP);
        thisP.innerText = obj.numWheels;
    }

    if (objClass === "Motorcycle") {
        const thisP = document.createElement('p');
        section.appendChild(thisP);
        thisP.innerText = obj.revEngine();
    }

    if (objClass === "Garage") {
        const thisP1 = document.createElement('p');
        section.appendChild(thisP1);
        let vehiclesText = '[';
        if (obj.vehicles.length !== 0) {
            for (i = 1; i < (obj.vehicles.length - 1); i++) {
                vehiclesText += `${obj.vehicles[i]}, `
            }
            vehiclesText += `${obj.vehicles[(obj.vehicles.length-1)]}`
        }
        vehiclesText += ']';
        thisP1.innerText = vehiclesText;
        const thisP2 = document.createElement('p');
        section.appendChild(thisP2);
        thisP2.innerText = obj.add(newObj);
    }
}

// part One
class Vehicle {
    constructor(make, model, year, name) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.name = name;
    }

    honk() {
        let horn = "beep";
        let whoIsTalking = "";
        if (this.name === "Road Runner") {
            horn = "meep meep";
        }
        if (this.make === "Oldsmobile" || this.make === "Buick") {
            horn = "HONK";
        }
        if (this.name) {
            whoIsTalking = `${this.name} says `;
        } else {
            whoIsTalking = `Your ${this.make} ${this.model} says `;

        }
        return `${whoIsTalking} "${horn}!`;
    }
    toString() {
        let returnString = `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
        if (this.name) {
            returnString += ` named `;
            returnString += this.name;
        }
        returnString += `.`;
        return returnString;
    }
}

let notMyVehicle = new Vehicle("Honda", "Monster Truck", 1999);
let myVehicle = new Vehicle("Scion", "TC", 2006, "Sammy");
let katsVehicle = new Vehicle("Toyota", "Prius V", 2012, "Priscilla");
let myFirstVehicle = new Vehicle("Oldsmobile", "Cutlass Cruiser", 1996, "Bertha");
let funnyVehicle = new Vehicle("Loony Tunes", "Cartoon", 1966, "Road Runner");

demo(1, notMyVehicle);
demo(1, myFirstVehicle);
demo(1, funnyVehicle);


// part Two
class Car extends Vehicle {
    constructor(make, model, year, name) {
        super(make, model, year, name);
        const numWheels = 4;
        this.numWheels = numWheels
    }
}

const notMyCar = new Car("Honda", "Monster Truck", 1999);
const myCar = new Car("Scion", "TC", 2006, "Sammy");
const katsCar = new Car("Toyota", "Prius V", 2012, "Priscilla");
const myFirstCar = new Car("Oldsmobile", "Cutlass Cruiser", 1996, "Bertha");
const funnyCar = new Car("Loony Tunes", "Cartoon", 1966, "Road Runner");

demo(2, myCar, "Car");
demo(2, notMyCar, "Car");

// part Three
class Motorcycle extends Vehicle {
    constructor(make, model, year, name, numWheels) {
        super(make, model, year, name);
        this.numWheels = 2;
    }

    revEngine() {
        const crotchRockets = ["Suzuki", "Kawasaki", "Yamaha"]
        if (crotchRockets.includes(this.make)) {
            return "VREEE!!"
        } else if (this.make === "Harley" || this.make === "Harley Davidson") {
            return "VROOOM!!!"
        } else {
            return "VROOM!"
        }
    }

    honk() {
        const crotchRockets = ["Honda", "Suzuki", "Kawasaki", "Yamaha"]
        if (crotchRockets.includes(this.make)) {
            return "meep";
        } else if (this.make === "Harley" || this.make === "Harley Davidson") {
            return `I don't have a horn, I say ${this.revEngine()}`
        }
        return "beep!";
    }
}

const darrensMotorcycle = new Motorcycle("Honda", "Nighthawk", 1988);
const chucksMotorcycle = new Motorcycle("Harley", "Road King", 2020);
const crotchRocketMotorcycle = new Motorcycle("Suzuki", "GSX-S1000", 2016);

demo(3, darrensMotorcycle, "Motorcycle");
demo(3, chucksMotorcycle, "Motorcycle");
demo(3, crotchRocketMotorcycle, "Motorcycle");

// part 4
class Garage {
    constructor(capacity) {
        if (typeof capacity !== 'number') {
            throw new Error('capacity must be a number');
        } else if (!isFinite(capacity) || capacity <= 0) {
            throw new Error('capacity must be a positive, finite number');
        }
        this.capacity = capacity;
        this.vehicles = [];
    }

    // const vehicles = [];

    vehicle() {
        return this.vehicles;
    }

    add(vehicle) {
        // debugger;
        if (!(vehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in this garage. Get outta here. Scram!"
        }
        if (this.vehicles.length === this.capacity) {
            return "Sorry, we're full. Get outta here. Scram!"
        }
        if (vehicle instanceof Car) {
            this.vehicles.push('Car');
        } else if (vehicle instanceof Motorcycle) {
            this.vehicles.push('Motorcycle');
        }
        return "Vehicle added!"
    }
}


const garage = new Garage(2);
demo(4, garage, "Garage", new Car("Hyundai", "Elantra", 2015));
demo(4, garage, "Garage", "Taco");
demo(4, garage, "Garage", darrensMotorcycle);
demo(4, garage, "Garage", crotchRocketMotorcycle);