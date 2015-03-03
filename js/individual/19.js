/**
 * Counting Sundays
 * Problem 19
 *
 *  You are given the following information, but you may prefer to do 
 *    some research for yourself.
 *
 *     
 *    * 1 Jan 1900 was a Monday.
 *    * Thirty days has September,
 *    * April, June and November.
 *    * All the rest have thirty-one,
 *    * Saving February alone,
 *    * Which has twenty-eight, rain or shine.
 *    * And on leap years, twenty-nine.
 *    * A leap year occurs on any year evenly divisible by 4, 
 *      but not on a century unless it is divisible by 400.
 *
 *  How many Sundays fell on the first of the month during the twentieth 
 *  century (1 Jan 1901 to 31 Dec 2000)?
 *
 * Excerpt: https://projecteuler.net/problem=19
**/

(function() {

  /* Numbers are the start of each respective month. */
  var norm = [1, 32, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]
    , leap = [1, 32, 61, 92, 122, 153, 183, 214, 245, 275, 306, 336]
    , year = [norm, leap];

  var sunday = 0, firstSunday = 7, yearCount = 0, i = 0;

  for (yearCount = 1; yearCount < 100; yearCount++) {


    /** 
     *  Before determining if the first day of any month in a year, the code
     *  must first check for leap years and move the first sunday of the year
     *  depending on what year it is.
    **/

    if (yearCount % 4 === 0) { i = 1; } 
    else { i = 0; }

    if (yearCount % 5 === 0) {
      if (firstSunday === 1) { firstSunday = 6; } 
      else if (firstSunday === 0) { firstSunday = 5; }
      else { firstSunday = firstSunday - 2; } 
    } 

    else { 
      if (firstSunday === 0) { firstSunday = 6; }
      else { firstSunday = firstSunday - 1; }
    } 


    /**
     *  Loops through every month in the century to see if the first day
     *  lands on a sunday.
    **/

    for (j=0; j<12; j++) {
      if (year[i][j] % 7 === firstSunday) { sunday++; }
    }

  }

  outputAnswer(sunday);

 
})();