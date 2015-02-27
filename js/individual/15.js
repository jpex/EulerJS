/**
 * Lattice paths
 * Problem 15
 *
 *  Starting in the top left corner of a 2×2 grid, and only being able to move to 
 *  the right and down, there are exactly 6 routes to the bottom right corner.
 *   
 *      [image missing]
 *
 *  How many such routes are there through a 20×20 grid?
 *
 * Excerpt: https://projecteuler.net/problem=15
**/

(function() {

  var num, dem, f = [];

    dem = Math.pow(factorial(20), 2);
    num = factorial(20 * 2);

    console.log(num/dem);

  /**
   * Function: factorial
   *
   * Calculates the factorial for a given number. It 'loops' through
   *  itself based on the given number (e.g. 5, 5*4*3*2*1)
  **/
  function factorial (n) {
    if (n === 0 || n === 1) { return 1; }
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
  } 

})();