/*
 * matmod exercises_settheory
 */

"use strict";

Set.prototype.union = function(b) {
    return new Set([...this, ...b]);
};

Set.prototype.intersection = function(b) {
    return new Set([...this].filter(x => b.has(x)));
};

Set.prototype.difference = function(b) {
    return new Set([...this].filter(x => !b.has(x)));
};

/**
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * for documentation for the set object in Javascript
 *
 * Create the following sets
 * S = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * In the following exercises the complements are denoted with prefix C.
 * Thus, CA is the complement of A, C(A ∩ B) is the complement of A ∩ B.
 */

function exercise01() {
    // Create and return the set A ∩ B

    return new Set([]);
}

function exercise02() {
    // Create and return the set A ∪ B

    return new Set([]);
}

function exercise03() {
    // Create and return the set A ∩ CB

    return new Set([]);
}

function exercise04() {
    // Create and return the set CA ∩ B

    return new Set([]);
}

function exercise05() {
    // Create and return the set CA ∩ CB

    return new Set([]);
}

function exercise06() {
    // Create and return the set C (A ∪ B)

    return new Set([]);
}

function exercise07() {
    // Create and return the set (A ∩ CB) ∪ (CA ∩ B)

    return new Set([]);
}

module.exports.exercise01 = exercise01;
module.exports.exercise02 = exercise02;
module.exports.exercise03 = exercise03;
module.exports.exercise04 = exercise04;
module.exports.exercise05 = exercise05;
module.exports.exercise06 = exercise06;
module.exports.exercise07 = exercise07;
