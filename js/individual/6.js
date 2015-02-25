/**
 * Sum square difference
 * Problem 6
 *
 *   The sum of the squares of the first ten natural numbers is,
 *
 *     1^2 + 2^2 + ... + 10^2 = 385
 *
 *   The square of the sum of the first ten natural numbers is,
 *
 *     (1 + 2 + ... + 10)^2 = 55^2 = 3025
 *
 *   Hence the difference between the sum of the squares of the 
 *     first ten natural numbers and the square of the sum is 
 *     3025 − 385 = 2640.
 *
 *   Find the difference between the sum of the squares of the 
 *   first one hundred natural numbers and the square of the sum.
 *
 * Excerpt: https://projecteuler.net/problem=6
**/

(function() {

  var num = 100;

  /**
   * function: sumOfSquares
   *
   *   Calculates the sum of squares for n natural numbers.
  **/

  function sumOfSquares(count) {
    var sum = 0;
    for(var i = 1; i <= count; i++) sum = sum + Math.pow(i, 2);
    return sum;
  }

  /**
   * function: squaresOfSum
   *
   *   Calculates the square of the sum for n natural numbers.
  **/

  function squaresOfSum(count) {
    var sum = 0;
    for(var i = 1; i <= count; i++) sum = sum + i;
    return Math.pow(sum, 2);
  }

  outputAnswer(squaresOfSum(num) - sumOfSquares(num));

})();