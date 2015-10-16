var maskify = function(str) {
  var last4reg = /.{0,4}$/;
  var last4 = str.match(last4reg)[0];
  return str.replace(/./g, '#').replace(last4reg, last4);
};

/*
process.stdout.write('\033c'); // limpa os logs anteriores
console.log(maskify('leoljalksdjf lkajsdl;kfja;lksdjf'));
// console.log(maskify('mussum ipsum cacilds'));
*/
