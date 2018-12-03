#!/usr/bin/env python3
"""
test exercise 01 functions
"""

import unittest
import kmom04


class Testcase(unittest.TestCase):
    """
    Test class using python unittest
    """

    # Tests exercise01

    def test_exercise01a(self):
        """ Exercise01 test 1: 25 is congruent to 5 modulo 10 """
        self.assertEqual(kmom04.exercise01(25, 5, 10), True)

    def test_exercise01b(self):
        """ Exercise01 test 2: 13 is congruent to 3 modulo 5 """
        self.assertEqual(kmom04.exercise01(13, 3, 5), True)

    def test_exercise01c(self):
        """ Exercise01 test 3: 100 is not congruent to 11 modulo 18 """
        self.assertEqual(kmom04.exercise01(100, 11, 18), False)

    def test_exercise01d(self):
        """ Exercise01 test 4: -3 is not congruent to 12 modulo 18 """
        self.assertEqual(kmom04.exercise01(-3, 12, 18), False)

    # Tests exercise02

    def test_exercise02a(self):
        """ Exercise02 test 1: 13 is a prime number """
        self.assertEqual(kmom04.exercise02(13), True)

    def test_exercise02b(self):
        """ Exercise02 test 2: 89 is a prime number """
        self.assertEqual(kmom04.exercise02(89), True)

    def test_exercise02c(self):
        """ Exercise02 test 3: 426269 is not a prime number """
        self.assertEqual(kmom04.exercise02(426269), False)

    def test_exercise02d(self):
        """ Exercise02 test 4: 2 is a prime number """
        self.assertEqual(kmom04.exercise02(2), True)

    # Tests exercise03

    def test_exercise03a(self):
        """ Exercise03 test 1: 191095 = 5*38219 """
        self.assertEqual(kmom04.exercise03(191095), [5, 38219])

    def test_exercise03b(self):
        """ Exercise03 test 2: 3218899 = 17*189347 """
        self.assertEqual(kmom04.exercise03(3218899), [17, 189347])

    def test_exercise03c(self):
        """ Exercise03 test 4: 721763173 = 31*23282683 """
        self.assertEqual(kmom04.exercise03(721763173), [31, 23282683])

    # Tests exercise04

    def test_exercise04a(self):
        """ Exercise04 test 1: Prime numbers less than 10 """
        self.assertEqual(kmom04.exercise04(10), [2, 3, 5, 7])

    def test_exercise04b(self):
        """ Exercise04 test 2: Prime numbers less than 100 """
        self.assertEqual(kmom04.exercise04(100), [2, 3, 5, 7, 11,
                                                  13, 17, 19, 23, 29,
                                                  31, 37, 41, 43, 47,
                                                  53, 59, 61, 67, 71,
                                                  73, 79, 83, 89, 97])

    # Tests exercise05

    def test_exercise05a(self):
        """ Exercise05 test 1: 187=11*17 """
        self.assertEqual(kmom04.exercise05(187), [11, 17])

    def test_exercise05b(self):
        """ Exercise05 test 2: 10967535067=104723*104729 """
        self.assertEqual(kmom04.exercise05(10967535067), [104723, 104729])

    # Tests exercise06

    def test_exercise06a(self):
        """ Exercise06 test 1: 4 is a perfect square """
        self.assertEqual(kmom04.exercise06(4), True)

    def test_exercise06b(self):
        """ Exercise06 test 1: 1166400 is a perfect square """
        self.assertEqual(kmom04.exercise06(1166400), True)

    def test_exercise06c(self):
        """ Exercise06 test 1: 99 is a not perfect square """
        self.assertEqual(kmom04.exercise06(99), False)

    # Tests exercise07

    def test_exercise07a(self):
        """ Exercise07 test 1: 191095 = 5*38219 """
        self.assertEqual(kmom04.exercise07(191095), [5, 38219])

    def test_exercise07b(self):
        """ Exercise07 test 2: 3218899 = 17*189347 """
        self.assertEqual(kmom04.exercise07(3218899), [17, 189347])

    def test_exercise07c(self):
        """ Exercise07 test 4: 721763173 = 31*23282683 """
        self.assertEqual(kmom04.exercise07(721763173), [31, 23282683])

    # Test exercise08

    def test_exercise08(self):
        """ Exercise08: c = 45293 """
        self.assertEqual(kmom04.exercise08(), 45293)

    # Tests exercise09

    def test_exercise09(self):
        """ Exercise09: d = 851094 """
        self.assertEqual(kmom04.exercise09(), 851094)

    # Tests exercise10

    def test_exercise10(self):
        """ Exercise10: m = 851094 """
        self.assertEqual(kmom04.exercise10(), 1357125)


if __name__ == '__main__':
    unittest.main()
