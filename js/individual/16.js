/**
 * Power digit sum
 * Problem 16
 *
 *  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 *  What is the sum of the digits of the number 21000?
 *
 * Excerpt: https://projecteuler.net/problem=16
**/

(function() {

  var start = 2, pow = 1000, leftOver = 0, sum = 0, array = [], i, exp, temp = 0;
  /**
   *  2^1000 is 302 digits long. Add one more for leftOver value. Array could be 
   *  large without changeing the final answer.
  **/
  array.length = 303;
  array[0] = 2;

  /* Setting the values in the array as 0 instead of undefined. */
  for (i=1; i<array.length-1; i++) { array[i] = 0; }

  /** 
   *  Loop finds the value of each digit in 2^1000. First loop runs through the array
   *  by exponent (i.e. first loop run 2^0, second 2^1, until 2^1000) while inner loop
   *  gets the value for each part of the designated array.
  **/
  for(exp=1; exp < pow; exp++) {
    for (i = 0; i < array.length-1; i++) {
      temp = parseInt(array[i]) * 2;
      if (temp > 9) { /* Pass the teneths value (leftOver of 1) so array[i+1] has it. */
        array[i] = parseInt((temp % 10) + leftOver);
        leftOver = 1;
      }
      else {
        array[i] = parseInt(temp + leftOver);
        leftOver = 0;
      }
    }
  }

  /* Sum up the array to find sum of digits in 2^1000 */
  for (i = 0; i < array.length - 1; i++) {
    sum += array[i];
  }

  outputAnswer(sum);

})();

/** 
 *  There is no out of the box method to acquiring such a large number in javascript.
 *  The options are to either import a library to handle the calculation, or string together
 *  a means of calculating the value through arrays. The concept is similar to problem 13 with
 *  the modulo 10 concept of bringing left overs into the new part of the array.
**/