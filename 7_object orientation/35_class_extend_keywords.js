class Person {
    _firstName = "";
    _lastName = "";

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set firstName(name) {
        if (name === "") {
            console.error("first name cannot be blank");
        } else {
            this._firstName = name;
        }
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    whoAreYou() {
        return `Hi I'm ${this.fullName()}`
    }
}


let vanessa = new Person("Vanessa", "Suarez");
vanessa.fullName();
vanessa.firstName;
vanessa.lastName;
console.log(vanessa._lastName); // undefined because if private

// vanessa.firstName = ""; // first name cannot be blank
vanessa.firstName = "Laura";
console.log(vanessa.fullName()); // Laura Suarez
vanessa.whoAreYou(); // "Hi I'm Laura Suarez"


function ES5Person(first_name, second_name) {
    this.first_name = first_name;
    this.second_name = second_name;
}


ES5Person.prototype.fullName = function () {
    return this.first_name + " " + this.second_name;
};

ES5Person.prototype.whoAreYou = function () {
    return `Hi I'm ${this.fullName()}`;
}


class Student extends ES5Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName)
        this.course =course
    }


    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}`;
    }
}


class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName)
        this.course =course
    }


    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}`;
    }
}

let person1 = new Student("Vanessa", "Suarez", "JavaScript");
person1.whoAreYou(); // "Hi I'm Vanessa Suarez and I'm studyin JavaScript"


