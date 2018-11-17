const assert = require("chai").assert;
const f = require("../exercises_settheory");

describe("Exercise01 test", function() {
    it("Exercise01 should return Set([2, 4, 8])", function() {
        let answer = new Set([2, 4, 8]);
        assert.deepEqual(f.exercise01(), answer);
    });
});

describe("Exercise02 test", function() {
    it("Exercise02 should return Set([1,2,3,4,5,6,8,9])", function() {
        let answer = new Set([1, 2, 3, 4, 5, 6, 8, 9]);
        assert.deepEqual(f.exercise02(), answer);
    });
});

describe("Exercise03 test", function() {
    it("Exercise03 should return Set([6])", function() {
        let answer = new Set([6]);
        assert.deepEqual(f.exercise03(), answer);
    });
});

describe("Exercise04 test", function() {
    it("Exercise04 should return Set([1, 3, 9])", function() {
        let answer = new Set([1, 3, 9]);
        assert.deepEqual(f.exercise04(), answer);
    });
});

describe("Exercise05 test", function() {
    it("Exercise05 should return Set([5, 7])", function() {
        let answer = new Set([5, 7]);
        assert.deepEqual(f.exercise05(), answer);
    });
});

describe("Exercise06 test", function() {
    it("Exercise06 should return Set([5, 7])", function() {
        let answer = new Set([5, 7]);
        assert.deepEqual(f.exercise06(), answer);
    });
});

describe("Exercise07 test", function() {
    it("Exercise07 should return Set([1, 3, 6, 9])", function() {
        let answer = new Set([1, 3, 6, 9]);
        assert.deepEqual(f.exercise07(), answer);
    });
});
