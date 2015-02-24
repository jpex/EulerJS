/**
 * Multiples of 3 and 5
 * Problem 1
 *
 *   If we list all the natural numbers below 10 that are multiples of 3 or 5, 
 *   we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 *   Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * Excerpt: https://projecteuler.net/problem=1
**/

(function(){

  var ceiling     = 1000
    , multipleOne = 3
    , multipleTwo = 5
    , sum         = 0
    ;

  for (var i = 1; i < ceiling; i++) {
    if(i % multipleOne === 0 || i % multipleTwo === 0) sum = sum + i;
  }

  outputAnswer(sum);
})();