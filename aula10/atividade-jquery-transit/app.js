var $square = $('.square');

// documentacao: http://ricostacruz.com/jquery.transit/

$square.on('click', function(e) {
  $current = $(e.target);
  var easing = $current.hasClass('linear') ? 'linear' : 'cubic-bezier(.61,-0.56,.45,1.44)';
  $current
    // aparece/desaparece
    // .transit({opacity: 0}, 400)
    // .transit({opacity: 1});

    // rotate, com incremento
    // .transit({rotate: '+=45deg'})
    // rotate, e volta
    // .transit({rotate: '360deg', 'background': '#00F', scale: 2}, 2000)
    // .transit({rotate: 0, 'background': '#f00', scale: 1})

    // example with ease e callback
    .transit({rotate: '+=90'}, 1000, easing, function() {
      console.log('finish');
    });
    // .transit({rotate: 0})
});
