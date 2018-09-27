var words = ["ground", "control", "to", "major", "tom"];

var map = function(array, callback) {
  var outputArray = [];
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    var result = callback(word);
    outputArray.push(result);
  }
  console.log(outputArray);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

