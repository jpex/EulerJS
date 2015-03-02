/**
 * Number letter counts
 * Problem 18
 *
 *  By starting at the top of the triangle below and moving to adjacent numbers 
 *  on the row below, the maximum total from top to bottom is 23.
 *
 *     3
 *     7 4
 *     2 4 6
 *     8 5 9 3
 *
 *  That is, 3 + 7 + 4 + 9 = 23.
 *
 *  Find the maximum total from top to bottom of the triangle below:
 *
 *                  75
 *                 95 64
 *                17 47 82
 *               18 35 87 10
 *              20 04 82 47 65
 *             19 01 23 75 03 34
 *            88 02 77 73 07 63 67
 *           99 65 04 28 06 16 70 92
 *          41 41 26 56 83 40 80 70 33
 *         41 48 72 33 47 32 37 16 94 29
 *        53 71 44 65 25 43 91 52 97 51 14
 *       70 11 33 28 77 73 17 78 39 68 17 57
 *      91 71 52 38 17 14 91 43 58 50 27 29 48
 *     63 66 04 68 89 53 67 30 73 16 69 87 40 31
 *    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 *
 * Excerpt: https://projecteuler.net/problem=17
**/

(function() {

  var triangle = '75 '+
                 '95 64 '+
                 '17 47 82 '+
                 '18 35 87 10 '+
                 '20 04 82 47 65 '+
                 '19 01 23 75 03 34 '+
                 '88 02 77 73 07 63 67 '+
                 '99 65 04 28 06 16 70 92 '+
                 '41 41 26 56 83 40 80 70 33 '+
                 '41 48 72 33 47 32 37 16 94 29 '+
                 '53 71 44 65 25 43 91 52 97 51 14 '+
                 '70 11 33 28 77 73 17 78 39 68 17 57 '+
                 '91 71 52 38 17 14 91 43 58 50 27 29 48 '+
                 '63 66 04 68 89 53 67 30 73 16 69 87 40 31 '+
                 '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'
    ;

  var rows = 0, sum = 0, total = 0, row = [], array = [] , k = 0;
  triangle = triangle.split(' ');


  /**
   *  Row count of triangle will be related to a triangular number.
   *  Loop through it until the nth value of the series is found.
  **/

  for (var n=1; n<=100; n++) {
    if ((n*(n+1)/2) == triangle.length) {
      rows = n;
    }
  }

  for (n=0; n<rows; n++) {
    row[n] = (n*(n+1)/2);
  }

  /* There are 2^(rows-1) possible combinations for the triangle */
  var numberOfCombinations = Math.pow(2,(rows-1)), c, c2;


  /**
   *  Using numberOfCombinations, this for loop creates an array of binaries
   *    to differentiate each possible combination.
  **/

  for(var i=0; i < numberOfCombinations; i++) {
    c = i.toString(2);
    c2 = ('000000000000000' + c).substr( -15 ).split('');
    array[i] = c2;
  }


  /**
   *  There are two options at each row:
   *
   *              /  r[x+1][y]
   *     r[x][y] |
   *              \  r[x+1][y+1]
   *
   *  This loop utilizes the binary array to sort through all of these
   *    possible options. 
  **/

  for(var i = 0; i < numberOfCombinations; i++) {
    sum = 0, k = 0;
    for (var j = 0; j < rows; j++) {
      if (parseInt(array[i][j]) === 1) { k = k + 1; }
      sum = sum + parseInt(triangle[ row[j] + k ]);
    }
    if (sum > total) { total = sum; console.log(total, i); }
  } 

  outputAnswer(total);
 
})();