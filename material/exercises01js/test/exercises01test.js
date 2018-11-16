/*eslint-env and, mocha */

const assert = require("chai").assert;
const f = require("../exercises01");

describe("Mean", function() {
    it("mean of [1, 1, 1, 1, 3, 4, 5] should return 2.29", function() {
        assert.equal(f.mean([1, 1, 1, 1, 3, 4, 5]), 2.29);
    });
});

describe("Variance", function() {
    it("Sample variance of [1,1,1,1,3,4,5,1,1,10,11] should return 13.87", function() {
        assert.equal(f.variance([1, 1, 1, 1, 3, 4, 5, 1, 1, 10, 11]), 13.87);
    });
});

describe("Standard deviation", function() {
    it("Sample standard deviation of [1,2,-2,4,-3] should return 2.88", function() {
        assert.equal(f.stddev([1, 2, -2, 4, -3]), 2.88);
    });
});
