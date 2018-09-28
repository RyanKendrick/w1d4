var countdownGenerator = function (x) {
  var counter = x + 1;

  return function() {
    counter--;
    if (counter > 0) {
      console.log("T-minus " + counter + '...')
    } else if (counter === 0) {
      console.log("Blast Off!")
    } else if (counter < 0) {
      console.log("Rockets already gone, bub!")
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!




