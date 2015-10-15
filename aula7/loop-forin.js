// loop for in
// é usado para percorrer elementos de um objeto

var arr = ['Darlan'];
var obj = {name: 'Darlan', age: 25, course: ['html', 'javascript']};

for (var key in obj) {
  console.log(key, obj[key]);
  if (key === 'course') {
    obj[key][1] = 'Javascript mano!!';
  }
}

console.log(JSON.stringify(obj));
