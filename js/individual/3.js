/**
 * Largest prime factor
 * Problem 3
 *
 *   The prime factors of 13195 are 5, 7, 13 and 29.
 *
 *   What is the largest prime factor of the number 600851475143 ?
 *
 * Excerpt: https://projecteuler.net/problem=3
**/

(function() {

  outputAnswer(largestPrimeFactor(10000, 600851475143));

  /**
   * function: getPrimes
   *
   *   Function mostly from http://stackoverflow.com/a/12287599/3099842
   *   Uses a prime sieve algorithm to get the first X number of 
   *    prime numbers.
  **/

  function getPrimes(max) {
      var sieve  = []
        , primes = []
        , i
        , j
        ;

      for (i = 2; i <= max; ++i) {
          if (!sieve[i]) {
              // i has not been marked -- it is prime
              primes.push(i);
              for (j = i << 1; j <= max; j += i) {
                  sieve[j] = true;
              }
          }
      }
      return primes;
  }

  /**
   * function: largestPrimeFactor
   *
   *   Loops through a given number to divide it by prime numbers.
   *   Needs an array of prime numbers first. Gets this from
   *    getPrimes().
  **/

  function largestPrimeFactor(amountOfPrimeNumbersToGet, number) {
    var primes = [];
    primes = getPrimes(amountOfPrimeNumbersToGet);

    for (var i in primes) {
      if (number % primes[i] === 0) {
        if (number/primes[i] !== 1) {
          number = number/primes[i];
        }
      }
    }

    return number;
  }

})();


/**
 * Prime factors are prime numbers that divide the integer exactly.
 *   13195 / 5 / 7 / 13 / 29 = 1
 * Problem basically wants the largest prime number that's divisible
 *   by the given number.
**/