#!/usr/bin/env python3
"""
test exercise 01 functions
"""

import unittest
import kmom03

class Testcase(unittest.TestCase):
    """
    Test class using python unittest
    """
    def test_exercise01(self):
        """ Probability of Pr(X <= 1.2) should be 0.8849" """
        self.assertEqual(kmom03.exercise01(), 0.8849)

    def test_exercise02(self):
        """ Probability of Pr(X > 1.2) should be 0.1151 """
        self.assertEqual(kmom03.exercise02(), 0.1151)

    def test_exercise03(self):
        """ Probability of Pr(X ≤ 7) when X is N(5,2) should be 0.8413 """
        self.assertEqual(kmom03.exercise03(), 0.8413)

    def test_exercise04(self):
        """ Probability of Pr(3 < X ≤ 5) when X is N(5,2) should be 0.3413 """
        self.assertEqual(kmom03.exercise04(), 0.3413)

    def test_exercise05(self):
        """ Pr(X ≤ -1) when X is N(0,1) should be 0.1587 """
        self.assertEqual(kmom03.exercise05(), 0.1587)

    def test_exercise06a(self):
        """ Pr(0 < X ≤ 1) when X is N(0,1) should be  0.3413 """
        self.assertEqual(kmom03.exercise06(0, 1, 0, 1), 0.3413)

    def test_exercise06b(self):
        """ Pr(-2 < X ≤ 11) when X is N(2,2) should be 0.977 """
        self.assertEqual(kmom03.exercise06(2, 2, -2, 11), 0.9772)

    def test_exercise06c(self):
        """ Pr(5.4 < X ≤ 6.78) when X is N(6.22, 1) should be 0.5062 """
        self.assertEqual(kmom03.exercise06(6.22, 1, 5.4, 6.78), 0.5062)

    def test_exercise06d(self):
        """ Pr(10 < X ≤ 0) when X is N(6.22,1) should be 0 """
        self.assertEqual(kmom03.exercise06(6.22, 1, 10, 0), 0)

    def test_exercise07(self):
        """ Probability of cup will be overflown is 0.023 """
        self.assertEqual(kmom03.exercise07(), 0.023)

    def test_exercise08(self):
        """ Pr(X+Y ≤ 2) should return 0.4207 """
        self.assertEqual(kmom03.exercise08(), 0.4207)

    def test_exercise09(self):
        """ Pr(X>Y) should return 0.8942 """
        self.assertEqual(kmom03.exercise09(), 0.8942)



if __name__ == '__main__':
    unittest.main()
