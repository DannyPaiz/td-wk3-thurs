
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Getters
    tellAge() {
        return this.age;
    }

    // Setters || Manipulators
    // ++ might be a good question?
    birthday() {
        return this.age += 1;
    }
    
    // Methods
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}

module.exports = {
    Person,
}