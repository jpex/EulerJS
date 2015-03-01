/**
 * Number letter counts
 * Problem 17
 *
 *  If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
 *  then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 *  If all the numbers from 1 to 1000 (one thousand) inclusive were written out 
 *  in words, how many letters would be used? 
 *
 *  NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and 
 *  forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 
 *  letters. The use of "and" when writing out numbers is in compliance with 
 *  British usage.
 *
 * Excerpt: https://projecteuler.net/problem=17
**/

(function() {
  var array = [], sum = 0;

  for (var i = 1; i < 1000; i++) {
    array[i] = inWords(i).replace(/[^A-Z]/gi, "");
    sum = sum + array[i].length;
  }

  // One thousand is 11 characters. Not calculating this part.
  sum += 11;

  outputAnswer(sum);

  /**
   * function inWords
   * Only goes up to 999
  **/
  function inWords(number) {
    var a      = ['one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ']
      , b      = ['ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen ']
      , c      = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
      , n      = []
      , word   = ''
      , string = ''
      ;

    number.toString();
    number = ('000'+number).substr( -3 );
    number = number.split('');
    //console.log(number);

    if (number[0] !== '0') {
      string = string + a[Number(number[0]) - 1] + 'hundred';
      if ((number[1] !== '0') || (number[2] !== '0')) {
        //console.log(number[2]);
        string = string + ' and ';
      }
    }

    if (number[1] !== '0') {
      if (number[1] === '1') { 
        string = string + b[Number(number[2])]; 
      }
      else {
        string = string + c[Number(number[1])];
      }
    }

    if (number[2] !== '0' && number[1] !== '1') {
      string = string + ' ' + a[Number(number[2]) - 1];
    }
     

    return string;

  }

})();