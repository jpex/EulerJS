/**
 * Smallest multiple
 * Problem 5
 *
 *   2520 is the smallest number that can be divided by each of 
 *   the numbers from 1 to 10 without any remainder.
 *
 *   What is the smallest positive number that is evenly 
 *   divisible by all of the numbers from 1 to 20?
 *
 * Excerpt: https://projecteuler.net/problem=5
**/

(function() {

  outputAnswer(smallestMultiple(20, 10000000000));


  /**
   * function: smallestMultiple
   *
   *   First argument is for all divisible numbers from
   *     1 to n. Second argument is an upper limit for
   *     the loop to prevent infinite loops.
  **/

  function smallestMultiple(upTo, limit) {
    var i
      , j
      ;

    for(var i = upTo; i < limit; i = i + upTo) {
      if (i % (upTo - 1) === 0) {
        for (j = upTo - 2; j > 2; j--) {
          if (i % j !== 0) break;
        }
        if (j === 2) return i;
      }
    }

    /* If the loop can't find anything. */
    return "Nothing found.";
  }

})();


/**
 * The idea of this setup is to limit the number of times a loop
 * is applied. The index (i) only goes through the highest number
 * it has to be divisible through, then only goes through the lower
 * numbers if it's also divisible by (n - 1). It then loops from
 * highest to lowest to further reduce number of checks for incorrect
 * numbers.
**/