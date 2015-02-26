/**
 * Special Pythagorean triplet
 * Problem 9
 *
 *   A Pythagorean triplet is a set of three natural numbers, 
 *     a < b < c, for which,
 *
 *     a^2 + b^2 = c^2
 *
 *   For example, 3^2 + 4^2 = 9 + 16 = 2^5 = 5^2.
 *
 *   There exists exactly one Pythagorean triplet for which 
 *     a + b + c = 1000.
 *   Find the product abc.
 *
 * Excerpt: https://projecteuler.net/problem=9
**/

(function() {

  var desired = 1000
    , array = tripletFinder(desired)
    ;

  outputAnswer(array[0] * array[1] * array[2]);


  /**
   * function: tripletFinder
   *
   *   Using the given assumptions:
   *     a < b < c
   *     a^2 + b^2 = c^2
   *   Returns an array of a, b, and c.
  **/

  function tripletFinder(desired) {
    var a, b, c, array = [];

    for (a = 1; a < (desired / 3); a++) {
      for (b = (a + 1); b < (desired / 2); b++) {
        for (c = (b + 1); c < desired; c++) {
          if (a + b + c === desired) {
            if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) return array = [a, b, c];
          }
        }
      }
    }
    return "No solution found.";

  }

})();
