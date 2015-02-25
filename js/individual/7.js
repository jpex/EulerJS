/**
 * Sum square difference
 * Problem 7
 *
 *   By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
 *   we can see that the 6th prime is 13.
 *
 *   What is the 10 001st prime number?
 *
 * Excerpt: https://projecteuler.net/problem=7
**/

(function() {

  var nThPrime = 10001
    , limit    = 1000000
    , array    = []
    ;

  array = getPrimes(nThPrime, limit);
  outputAnswer(array[array.length - 1]);

  /**
   * function: getPrimes
   *
   *   Function mostly from http://stackoverflow.com/a/12287599/3099842
   *   Uses a prime sieve algorithm to get the first X number of 
   *    prime numbers.
  **/

  function getPrimes(max, limit) {
      var sieve  = []
        , primes = []
        , count  = 0
        , i
        , j
        ;

      for (i = 2; i <= limit; ++i) {
          if (!sieve[i]) {
              // i has not been marked -- it is prime
              primes.push(i);
              count++;
              for (j = i << 1; j <= limit; j += i) {
                  sieve[j] = true;
              }
          }
          if (count >= nThPrime) break;
      }
      return primes;
  }

})();

/**
 * This solution takes large pieces from solution 3.
**/