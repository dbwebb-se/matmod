#!/usr/bin/env python3
# -*- coding: utf-8 -*-
""" matmomd kmom03 """

# Write your name here
# Write your acronym here

from scipy.stats import norm

# Probability Functions

# norm.pdf(x, loc=μ, scale=σ)

# Pr(X=x), the probability density function, which describes the probability of
# a random variable taking on the value x, with  mean μ, standard deviation σ.


# norm.cdf(x, loc=μ, scale=σ)
#
# Pr(X≤x) the cumulative distribution function,
#  which describes the probability
# of a random variable falling in the interval (−∞, x],  with  mean μ, standard
# deviation σ.


def exercise01():
    """
    exercise01

    return
        The probability of Pr(X ≤ 1.2) when X is N(0,1)
        with 4 decimal precision
    """

    # Write your code here

    pass

def exercise02():
    """
    exercise02

    return
        The probability of Pr(X > 1.2) when X is N(0,1)
        with 4 decimal precision
    """

    # Write your code here

    pass


def exercise03():
    """
    exercise03

    return
        The probability of Pr(X ≤ 7) when X is N(5,2) with 4 decimal precision
    """

    # Write your code here

    pass


def exercise04():
    """
    exercise04

    return
        The probability of Pr(3 < X ≤ 5) when X is N(5,2)
        with 4 decimal precision
    """

    # Write your code here

    pass


def exercise05():
    """
    exercise05

    return
        The probability of Pr(X ≤ -1) when X is N(0,1) with 4 decimal precision

    Hint: Pr(X ≤ -x) = Pr(X > x)
    """

    # Write your code here

    pass

def exercise06(mean, std_dev, a, b):
    """
    exercise06

    args
        mean μ
        stdDev σ
        a lower bound
        b upper bound

    return
        the probability of Pr(a ≤ X ≤ b) when X is
         N(μ,σ) with 4 decimal precision
    """

    # Write your code here

    pass


def exercise07():
    """
    exercise07

    A coffee vending machine dispenses coffee, in a way such that the volume
    is normally distributed with mean 1.8 dl and standard deviation 0.1 dl.
    A coffee cup can hold up to 2.0 dl of coffee.

    Calculate and return the probability with 4 decimal precision that a cup
    will be overflowed

    return
        The probability of a cup will be overflown with 3 decimal precision.

    Hint:
    https://sv.wikipedia.org/wiki/Normalf%C3%B6rdelning#/media/File:Standard_deviation_diagram.svg
    """

    # Write your code here

    pass

def exercise08():
    """
    exercise08

    Let X and Y be two independent stochastic variables such that X is N(a,b)
    and Y is N(c,d). Then  Z = X+Y is N(a+c,sqrt(b^2 + d^2)),
    and Z = X-Y is N(a-b, sqrt(b^2+d^2))

    return
        the probability of Pr(X+Y ≤ 2) when X is N(2,3),
        and Y is N(1,4) with 4 decimal precision

    """

    #Write your code here

    pass

def exercise09():
    """
    exercise09

    The score of test A is normally distributed with mean 48 and standard
    deviation 5.

    The score of test B is normally distributed with mean 40 and standard
    deviation 4.

    Let X be the result from a random choosen person who took test A.
    Let Y be the result from a random choosen person who took test B.

    return
        The probability Pr(X > Y) with 4 decimal precision

    Hint. Pr(X > Y)= Pr(X-Y > 0)
    """

    #Write your code here

    pass
 