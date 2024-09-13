#!/bin/node
const { doubleValues, addTwo } = require("../classes/index");
const {describe, it, test, expect} = require('@jest/globals');

describe("test for double values in array", () => {
    it('exception handling', () => {
        expect( ()=> {
            doubleValues([1,0,2,3,'1'])
        }).toThrow("Array can only contain numbers")
    })
})

describe("test for addTwo function, correct sum returned", () => {
    it('return correct sum', () => {
        expect(addTwo(1,3)).toBe(4)
    })
})