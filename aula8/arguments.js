var sum = function() {
  var total = 0;
  for (var i in arguments) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(10, 20, 10, 15, 20));
