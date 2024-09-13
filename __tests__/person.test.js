#!/bin/node
const { Person } = require("../classes/person");
const { describe, it, test, expect } = require("@jest/globals");

describe("create instance of Person class", () => {

    test("Test valid string name param", () => {
    const p1 = new Person('Doe', 24);
        expect(p1.name).toBe('Doe');
    })

    test("Test valid number age param", () => {
    const p1 = new Person('Doe', 24);

        expect(p1.age).toBe(24);
    })

    test("Test greet() func return string with name", () => {
    const p1 = new Person('Doe', 24);

        expect(p1.greet()).toBe('Hello, my name is Doe.')
    })

    test("test tellAge() func return string with age", () => {
    const p1 = new Person('Doe', 24);
        expect(
            p1.tellAge()
        ).toBe(24);
    })

    // Manipulating original object
    test("test birthday() func incrementation", () => {
    const p1 = new Person('Doe', 24);

        expect( () => {
            p1.birthday(p1.age).toBe(25);
        })
    })

    /**
     * without GETTERS/SETTERS no testing that yet
Test that the name and age have been set to the correct values.
Test that the greet() method returns the expected string.
Test that to the tellAge() method returns the expected String.
Test that age is incremented by 1 when the birthday() method is invoked.
In index.js, create a Person class that meets all the requirements outlined above.
Click “Test” to see if your tests have been passed!
     */
})