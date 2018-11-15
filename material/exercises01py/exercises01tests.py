
"""
matmod exercises01 tests
"""

import unittest
from exercises01 import mean, variance, stddev



class Exercises01Test(unittest.TestCase):
    """
    Test exercise01.py
    """
    def test_mean(self):
        """ mean of [1, 1, 1, 1, 3, 4, 5] should return 2.29 """
        self.assertEqual(mean([1, 1, 1, 1, 3, 4, 5]), 2.29)

    def test_variance(self):
        """ sample variance of [1, 1, 1, 1, 3, 4, 5] should return 13.87 """
        self.assertEqual(variance([1, 1, 1, 1, 3, 4, 5, 1, 1, 10, 11]), 13.87)

    def test_stddev(self):
        """ sample standard deviation of [1,2,-2,4,-3] should return 2.88"""
        self.assertEqual(stddev([1, 2, -2, 4, -3]), 2.88)

if __name__ == "__main__":
    unittest.main()
