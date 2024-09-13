const { Lion } = require('../classes/lion');
const { describe, it, test, expect } = require("@jest/globals");

describe("create an instance of Lion class.", () => {

    test("Test valid string name param", () => {
        const lion1 = new Lion('Rawr', 7, 1);
        expect(lion1.name).toBe('Rawr')
    })

    test("Test valid num age param", () => {
        const lion1 = new Lion('Rawr', 7, 1);
        expect(lion1.age).toBe(7)
    })

})