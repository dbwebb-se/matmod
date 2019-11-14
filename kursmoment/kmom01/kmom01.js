/*
 * MA1487 Matematisk modellering
 * Kursmoment 01
 *
 * Exercise 01-10 Set theory
 * Exercise 11-14 Probability
 * Exercise 15-18 Combinatorics and Probability
 */


/**
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * for documentation for the set object in JavaScript
 *
 * In the following exercises the complements are denoted with prefix C.
 * Thus, CA is the complement of A, C(A ∩ B) is the complement of A ∩ B.
 *
 * The set U is the universal set.
 */


/**
 * Exercise01
 * Create the following sets
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * Compute and the return the set A ∩ B
 *
 * @returns {Set} the set A ∩ B
 */
function exercise01() {
    return new Set([]);
}


/**
 * Exercise02
 * Create the following sets
 * A = {1,3,5,7,9}
 * B = {1,2,3,4,5,6,7,8,9,10}
 *
 * Compute and return the set A ∪ B
 *
 * @returns {Set} the set A ∪ B
 */
function exercise02() {
    return new Set([]);
}

/**
 * Exercise03
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set A ∩ CB
 */
function exercise03() {
    return new Set([]);
}


/**
 * Exercise04
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set A ∩ CB
 */
function exercise04() {
    return new Set([]);
}


/**
 * Exercise05
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set CA ∩ CB
 */
function exercise05() {
    return new Set([]);
}

/**
 * Exercise06
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set C(A ∪ B)
 */
function exercise06() {
    return new Set([]);
}

/**
 * Exercise07
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set (A ∩ CB)∪(CA ∩ B)
 */
function exercise07() {
    return new Set([]);
}

/**
 * Exercise 08
 * Write a function to detemine if A is a proper subset of B
 *
 * @returns {Boolean} true if A is a proper subset of B, otherwise false
 */
function exercise08(A, B) {
    return null
}

/**
 * Exercise09
 * Let A and B be sets. Write a function that returns the number of
 * elements in the set A ∪ B
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Number} the number of elements in the set A ∪ B
 *
 */
function exercise09(A, B) {
    return null
}

/**
 * Exercise10
 * Two sets A and B are disjoint if they have no elements in common
 * Write a function to determine if A and B are disjoint
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Boolean} true if A and B are disjoint, otherwise false
 */
function exercise10() {
    return null
}


/**
 * Exercise12
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice exactly p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show exactly p dots with 3 decimal precision
 */
function exercise11(n, p) {
    return null
}

/**
 * Exercise12
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows p or less dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show p dots or less
 * with 3 decimal precision
 */
function exercise12(n, p) {
    return null
}

/**
 * Exercise13
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows at least p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show at least p dots
 * with 3 decimal precision
 */
function exercise13(n, p) {
    return null
}

/**
 * Exercise14
 * A regular six sided dice is tossed 100000 times.
 * Compute the relative frequence of observering a 5 or 6 when tossing a
 * dice with 3 decimal precision
 *
 * @returns {Number}    The relative frequency a dice will show a 5 or 6 with 3 decimal precision
 */
function exercise14() {
    return null
}


/**
 * Exercise15
 * Write a function that returns n factorial (n!)
 *
 * @param {Number} n
 * @return {Number} n-factorial (n!)
 */

function exercise15(n) {
    return null
}


/**
 * Exercise16
 * Write a function that returns the number of ways you can choose k from n
 * options with respect to order
 *
 * @param {Number} n
 * @param {NUmber} k
 * @return {Number}
 */
function exercise16(n, k) {
    return null
}


/**
 * Exercise17
 * Write a function that return the number of ways you can choose k from n
 * options without respect to order (combinations)
 *
 * @param {Number} n
 * @param {Number} k
 * @return {Number}
 */
function exercise17(n, k) {
    return null
}



/**
 * Exercise16
 * Given a group of n persons and another group of m persons.
 * Five persons are choosen randomly from both groups.
 * Compute the probability 3 persons are chosen from group 1 and 2 persons are
 * choosen from group 2. Return the answer with 3-decimal precision
 *
 * @param {Number} n total number of people in group 1
 * @param {Number} m total number of people in from group 2
 * @return {Number} Probability described above
 */
function exercise18() {
    return null
}


module.exports.exercise01 = exercise01;
module.exports.exercise02 = exercise02;
module.exports.exercise03 = exercise03;
module.exports.exercise04 = exercise04;
module.exports.exercise05 = exercise05;
module.exports.exercise06 = exercise06;
module.exports.exercise07 = exercise07;
module.exports.exercise08 = exercise08;
module.exports.exercise09 = exercise09;
module.exports.exercise10 = exercise10;
module.exports.exercise11 = exercise11;
module.exports.exercise12 = exercise12;
module.exports.exercise13 = exercise13;
module.exports.exercise14 = exercise14;
module.exports.exercise15 = exercise15;
module.exports.exercise16 = exercise16;
module.exports.exercise17 = exercise17;
module.exports.exercise18 = exercise18;
