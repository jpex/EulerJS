/**
 * Summation of primes
 * Problem 10
 *
 *   The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 *   Find the sum of all the primes below two million.
 *
 * Excerpt: https://projecteuler.net/problem=10
**/

(function() {

  var limit  = 2000000
    , primes = getPrimes(limit)
    , sum    = 0
    ;

  for (var i in primes) sum = sum + primes[i];

  outputAnswer(sum);

  function getPrimes(limit) {
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
      }
      return primes;
  }

})();
