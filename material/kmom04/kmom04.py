#!/usr/bin/env python3
# -*- coding: utf-8 -*-

""" matmomd kmom04 """

# Write your name here
# Write your acronym here



def exercise01(a,b,n):
    """
    exercise01

    Write a function which determines if a is congruent to b modulo n

    args
        a integer
        b integer
        c positive integer

    return
        True if a is congruent to b modulo n, false otherwise
    """

    # Write your code here

    pass

def exercise02(n):
    """
    exercise02

    Write a function which determines if integer n is a prime number.
    

    args
        n positive integer

    return
        True if n is a prime number, false otherwise
    """

    # Write your code here

    pass


def exercise03(n):
    """
    exercise03

    Write a function to decompose the integer n=pq into prime factors p,q.


    You are free to any method

    See
    https://en.wikipedia.org/wiki/Integer_factorization#Factoring_algorithms
    for a list of algorithms

    Note that Pollard-Rhos method will be used in exercise05.

    args
        n composite integer

    return
        Return the prime factors in an array in ascending order
    """

    # Write your code here

    pass


def exercise04(n):
    """
    exercise04

    Write a function which produces an array of all primes less than n


    arg
        n integer

    return
        array of prime numbers less than n in ascending order
    """

    # Write your code here

    pass


def exercise05(n):
    """
    Implement Pollard-Rho's algorithm to factor integer n=pq into prime factors
    p,q
    
    return
        Prime factors [p,q] in ascending order.

    """

    # Write your code here

    pass

def exercise06(n):
    """
    Write a function which determines if n is square number i.e, there exists
    integer k such that n = k^2.

    return
        True if n is square number, false otherwise
    """

    # Write your code here

    pass

def exercise07(n):
    """
    Decompose n=pq into prime factor using the method "difference of squares"

    return
        Prime factors [p,q] in ascending order.
    """

    # Write your code here

    pass

def exercise08():
    """
    exercise08

    Bob publishes his public RSA keys
    n = 2038667
    e = 103

    Alice wants to send the message m = 892383

    What ciphertext does Alice send to Bob? 

    return
        Encrypted message c    
    
    """

    # Write your code here

    pass

def exercise09():
    """

    exercise09

    Find the decoding key d with public encryption key (2038667, 103),
    i.e solve the equation d*e = 1 (mod (p-1)*(q-1))

    Hint:
    https://rosettacode.org/wiki/Modular_inverse

    return
        decoding key d
    """

    # Write your code here

    pass

def exercise10():
    """
    exercise10

    Same public key as in exercise08

    Eve intercepts encrypted message c = 317730 from Bob to Alice
    Help Eve decrypt the message

    return
        Decrypted message m

    """

    # Write your code here

    pass

