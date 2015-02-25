/**
 * Largest palindrome product
 * Problem 4
 *
 *   A palindromic number reads the same both ways. The largest 
 *   palindrome made from the product of two 2-digit numbers is 
 *   9009 = 91 × 99.
 *
 *   Find the largest palindrome made from the product of two 
 *   3-digit numbers.
 *
 * Excerpt: https://projecteuler.net/problem=4
**/

(function() {

  var largestPalindrome = 0
    , temp              = 0
    , minBounds         = 100
    , maxBounds         = 999
    ;

  for (var i = minBounds; i <= maxBounds; i++) {
    for (var j = minBounds; j <= maxBounds; j++) {
      if (checkForPalindrome(i * j) === true) {
        temp = i * j;
        if (temp > largestPalindrome) largestPalindrome = temp;
      }
    } 
  }

  outputAnswer(largestPalindrome);

  /**
   * function: checkForPalindrome
   *
   *   Detrmines if the passed in value is a palindrome. Argument
   *   that is passed is converted from an integer to an array.
  **/

  function checkForPalindrome(value) {

    var array = value.toString().split('');

    /** 
     * Checks for lack of equality between first and last values in  
     * the array and exits the function with false if they are not equal.
     * Otherwise it continues to check for second and second to last,
     * third and third to last, etc.
    **/

    for (var i in array) {
      if (array[i] !== array[array.length - 1 - i]) return false;
    }
    return true;

  }

})();


/**
 * This is a brute force method. Not very good for large bounds.
**/