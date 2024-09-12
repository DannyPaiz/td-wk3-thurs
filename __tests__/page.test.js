#!/bin/node
const Page = require("../classes/page")
const { describe, it, test, expect } = require("@jest/globals");

// write your tests here
describe("creates an instance of page", () => {
    const page1 = new Page('Pride', 'and Predu');
    test("has a title and content", () => {
        expect(page1.title).toBe('Pride');
        expect(page1.content).toBe('and Predu');
    });
})

test("testing wordCount", () => {
    const page1 = new Page('Pride', 'and Predu');
    expect(page1.wordCount()).toBe(2);
})