/**
 * function: getAnswer
 *
 * Returns an answer given to it.
**/

function getAnswer(answer) {
  return answer;
}


/**
 * function: outputAnswer
 *
 * Feeds a given answer into a div with the ID of 'answer'.
 *   Uses the getAnswer function.
**/

function outputAnswer(answer) {
  var div = document.getElementById('answer');
  div.innerHTML = getAnswer(answer);
}