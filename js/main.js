console.log('Class');

// keywords: are type of identifiers : let, cont, var, if/else, switch, function, class, import, export, new

// Procedural / Functional Programming
function print(name) {
    console.log('Hello ' + name);
}

print("Person 1")

// Class: Object oriented

class Welcome {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log('Hello ' + this.name);
    }
}

class Car {
    static model(name, series, variant) {
        console.log(`This a car model of ${name}, Model Number: ${series}, Variant: ${variant}`);
    }
}

// instance or object
let object1 = new Welcome('Satya')
object1.print()

let object2 = new Welcome('Prakash')
object2.print()

console.log(object1 instanceof Car);

// let bmw = new Car();
Car.model('BMW', 'DS-150', 'Diesel');
Car.model('BMW', 'EV-160', 'Electric')

// Car Company: 1000 units of car, 1 prototype


class Insert {
    #data = []; // private variable
    addToData(value) {
        const list = this.#data.push(value);
        this.#data;
        return this.#render(this.#data)
    }

    #render(data) { // private methods
        let items = ``;
        data.forEach((item, index) => {
            items += `<h2>${index + 1}. ${item}</h2>`
        })
        return items;
    }
}

const list = document.getElementById('list')


let insert = new Insert();
document.getElementById('btn')
    .addEventListener('click', () => {
        const input = document.getElementById('input').value;
        list.innerHTML = insert.addToData(input)
        document.getElementById('input').value = '';
    })
