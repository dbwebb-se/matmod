
"""
matmod exercises02 tests
"""

import unittest
import exercises02 as f

class Exercises01Test(unittest.TestCase):
    """
    Test exercise02.py
    """
    def test_factorial1(self):
        """ my_factorial(0) should return 1"""
        self.assertEqual(f.my_factorial(0), 1)

    def test_factorial2(self):
        """ my_factorial(5) should return 120"""
        self.assertEqual(f.my_factorial(5), 120)

    def test_factorial3(self):
        """ my_factorial(10) should return 3628800"""
        self.assertEqual(f.my_factorial(10), 3628800)

    def test_binomial1(self):
        """ my_bin(40, 100, 0.5) should return 0.011 """
        self.assertEqual(f.my_bin(40, 100, 0.5), 0.011)

    def test_binomial2(self):
        """ my_bin(150, 200, 0.75) should return 0.065 """
        self.assertEqual(f.my_bin(150, 200, 0.75), 0.065)

    def test_cumulative_binomial1(self):
        """ cumulative_bin(40, 100, 0.5) should return 0.028 """
        self.assertEqual(f.cumulative_bin(40, 100, 0.5), 0.028)

    def test_cumulative_binomial2(self):
        """ cumulative_bin(150, 200, 0.75) should return 0.527 """
        self.assertEqual(f.cumulative_bin(150, 200, 0.75), 0.527)

    def test_exercise309(self):
        """ exercise309 should return 0.222 """
        self.assertEqual(f.exercise309(), 0.222)

    def test_exercise_plane(self):
        """ exercise_plane should return 0.791 """
        self.assertEqual(f.exercise_plane(), 0.791)

if __name__ == "__main__":
    unittest.main()
