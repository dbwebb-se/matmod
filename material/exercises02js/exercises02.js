/*
 * matmod exercises02
 */

"use strict";

function factorial(n) {
    /**
     * Returns the factorial of the integer n
     * @param  {number} n integer
     * @return {number} n!=n*(n-1)*(n-2)*...*3*2*1
     */

    // Todo: Write code here

    return n;
}

function bin(n, N, p) {
    /**
     * Return the probability of binomial distribution Pr(X = x)
     * @param  {number} n number of trial
     * @param  {number} N size of population
     * @param  {number} p propability of success
     * @return {number} probability of exactly n successful trials with population N with
     * probability p with 3 decimal precision
     */

    // Todo: Write code here

    return [n, N, p];
}

function cumulativeBin(n, N, p) {
    /**
     * Return the probability binomial distribution Pr(X <= x)
     * @param  {number} n number of trial
     * @param  {number} N size of population
     * @param  {number} p propability of success
     * @return {number} probability of n or less successful trial with population N with
     * probability p with 3 decimal precision
     */

    // Todo: Write code here

    return [n, N, p];
}

function exercise309() {
    /**
     * En undersökning visar att en tredjedel av alla barn får huvudlöss.
     * Slumpmässigt väljer vi tre barn.
     * Vad är sannolikheten att exakt två av barnen av de valda barnen får huvudlöss?
     *
     * Returnerna ditt svar med 3 decimaler
     */

    // Todo: Write code here

    return 0;
}

function exercisePlane() {
    /**
     * Ett flygbolag säljer 65 biljetter till ett flygplan som har kapacitet för
     * 60 passagerare. Sannolikheten att en passagerare inte dyker upp är 0.1.
     * Vad är sannolikheten att flygplanet inte blir överbelastat?
     *
     * Returnera svaret med 3 decimaler
     */

    // Todo: Write code here

    return 0;
}

module.exports.factorial = factorial;
module.exports.bin = bin;
module.exports.cumulative_bin = cumulativeBin;
module.exports.exercise309 = exercise309;
module.exports.exercisePlane = exercisePlane;
