var arr = [0, 1, 2, 3, 4, 5, 'a', 10];

// arr.filter(function(value) {
//   return value >= 0;
// });

// console.log(arr);


var myFn = function(callback) {
  var time = parseInt(Math.random() *  5000);
  setTimeout(callback, time);
}

myFn(function() {
  console.log('yoooooo');
})

myFn(function() {
  console.log('hahahauhaua');
})
