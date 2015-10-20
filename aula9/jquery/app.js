var $title = $('h1');

$title.on('mousedown mouseup mouseleave', function(e) {
  if (e.type !== 'mouseleave') {
    $title.text(e.type);
  }
  else {
    $title.text($title.data().text);
  }
});

var url = 'http://cep.correiocontrol.com.br/099421000.json'
var success = function(response) {
  console.log(response);
};

var error = function(response) {
  console.log(response);
}

$.get(url, success, error);
