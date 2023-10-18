class Main {
    constructor(amount, city) {
        this.amount = amount;
    }

    welcome() {
        console.log(this.amount);
    }

}

// We are partner: 
// Me: Manchurian, Noodles
// |
// You: Ice Cream, Chocolates

// User: Child class, Main: Parent Class
class User extends Main {
    constructor(name, age, amount) {
        super(amount, 'Mumbai');
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`My name is ${this.name}, age: ${this.age}`);
    }
    salary() {

    }
}

let user1 = new User("Satya", 27, '50,000');
user1.print();
user1.welcome();

let userObj = {
    name: "MyName",
    age: 25
}


const root = document.getElementById('root');
class Render {
    static createElement(tag, src = null, text, className) {
        const element = document.createElement(tag);
        if (src !== null) {
            element.src = src;
            element.alt = text;
        } else {
            element.innerText = text;
        }

        element.className = className;
        root.insertAdjacentElement('afterbegin', element)
    }
}

Render.createElement('img', 'https://images.pexels.com/photos/18343648/pexels-photo-18343648/free-photo-of-monstera-slovakia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', "Pexel Image 1", 'rounded')

Render.createElement('img', 'https://images.pexels.com/photos/6007864/pexels-photo-6007864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', "Pexel Image 2", 'square')

Render.createElement('h1', null, 'Hello JavaScript')
Render.createElement('h2', null, 'Hello H2 From JavaScript', 'blueText')


// const image1 = document.createElement('img');
// image1.src = 'https://images.pexels.com/photos/18343648/pexels-photo-18343648/free-photo-of-monstera-slovakia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
// root.insertAdjacentElement('afterbegin', image1)

// const image2 = document.createElement('img');
// image2.src = 'https://images.pexels.com/photos/6007864/pexels-photo-6007864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
// root.insertAdjacentElement('afterbegin', image2)




// class User  {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     print() {
//         console.log(`My name is ${this.name}, age: ${this.age}`);
//     }
// }



// let user1 = new User("Satya", 27);
// user1.print();

// let userObj = {
//     name: "MyName",
//     age: 25
// }