const assert = require('chai').assert;
const app = require('../kmom03.js');

describe('exercise01', function() {
    it('Probability of Pr(X <= 1.2) should be 0.8849', function() {
        assert.equal(app.exercise01(), 0.8849);
    });
});

describe('exercise02', function() {
    it('Probability of Pr(X > 1.2) should be 0.1151', function() {
        assert.equal(app.exercise02(), 0.1151);
    });
});

describe('exercise03', function() {
    it('Probability of Pr(X ≤ 7) when X is N(5,2) should be 0.8413', function() {
        assert.equal(app.exercise03(), 0.8413);
    });
});

describe('exercise04', function() {
    it('Probability of Pr(3 < X ≤ 5) when X is N(5,2) should be 0.3413', function() {
        assert.equal(app.exercise04(), 0.3413);
    });
});

describe('exercise05', function() {
    it('Pr(X ≤ -1) when X is N(0,1) should be 0.1587', function() {
        assert.equal(app.exercise05(), 0.1587);
    });
});

describe('exercise06 test 1 (4)', function() {
    it('Pr(0 < X ≤ 1) when X is N(0,1) should be  0.3413', function() {
        assert.equal(app.exercise06(0, 1, 0, 1), 0.3413);
    });
});

describe('exercise06 test 2 (4)', function() {
    it('Pr(-2 < X ≤ 11) when X is N(2,2) should be 0.9772', function() {
        assert.equal(app.exercise06(2, 2, -2, 11), 0.9772);
    });
});

describe('exercise06 test 3 (4)', function() {
    it('Pr(5.4 < X ≤ 6.78) when X is N(6.22, 1) should be 0.5062', function() {
        assert.equal(app.exercise06(6.22, 1, 5.4, 6.78), 0.5062);
    });
});

describe('exercise06 test 4 (4)', function() {
    it('Pr(10 < X ≤ 0) when X is N(6.22,1) should be 0', function() {
        assert.equal(app.exercise06(6.22, 1, 10, 0), 0);
    });
});

describe('exercise07', function() {
    it('Probability of cup will be overflown is 0.023', function() {
        assert.equal(app.exercise07(), 0.023);
    });
});

describe('exercise08', function() {
    it('Pr(X+Y ≤ 2) should return 0.4207', function() {
        assert.equal(app.exercise08(), 0.4207);
    });
});

describe('exercise09', function() {
    it('Pr(X>Y) should return 0.8942', function() {
        assert.equal(app.exercise09(), 0.8942);
    });
});
