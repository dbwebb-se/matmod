/*eslint-env and, mocha */

const assert = require("chai").assert;
const f = require("../exercises02");

describe("Factorial test 1", function() {
    it("factorial(0) should return 1", function() {
        assert.equal(f.factorial(0), 1);
    });
});

describe("Factorial test 2", function() {
    it("factorial(5) should return 120", function() {
        assert.equal(f.factorial(5), 120);
    });
});

describe("Factorial test 3", function() {
    it("factorial(10) should return 3 628 800", function() {
        assert.equal(f.factorial(10), 3628800);
    });
});

describe("Binomial test 1", function() {
    it("bin(40, 100, 0.5) should return 0.010", function() {
        assert.equal(f.bin(40, 100, 0.5), 0.01);
    });
});

describe("Binomial test 2", function() {
    it("bin(150, 200, 0.75) should return 0.065", function() {
        assert.equal(f.bin(150, 200, 0.75), 0.065);
    });
});

describe("Cumalative Binomial test 1", function() {
    it("cumulativeBin(40, 100, 0.5) should return 0.028", function() {
        assert.equal(f.cumulativeBin(40, 100, 0.5), 0.028);
    });
});

describe("Cumulative Binomial test 2", function() {
    it("cumulativeBin(150, 200, 0.75) should return 0.527", function() {
        assert.equal(f.cumulativeBin(150, 200, 0.75), 0.527);
    });
});

describe("Exercise 309", function() {
    it("exercise309 should return 0.222", function() {
        assert.equal(f.exercise309(), 0.222);
    });
});

describe("Exercise plane", function() {
    it("exercisePlane should return 0.791", function() {
        assert.equal(f.exercisePlane(), 0.791);
    });
});
