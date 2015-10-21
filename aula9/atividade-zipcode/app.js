var $inputZipcode = $('input[name="zipcode"]');
var $buttonSearchZipcode = $('#search-zipcode');
var $addressInputs = $('.address-filled.hidden');

$inputZipcode.mask('00000-000');

$inputZipcode.val('09942-100');

$buttonSearchZipcode.on('click', function(e) {
  var regZipcode = /\d{5}-\d{3}/;
  var zipcode = $inputZipcode.val();
  if (regZipcode.test(zipcode)) {
    $.ajax({
      url: 'http://cep.correiocontrol.com.br/'+zipcode.replace('-', '')+'.json',
      success: function(address) {
        $addressInputs.find('[name="address"]').val(address.logradouro);
        $addressInputs.find('[name="neighborhood"]').val(address.bairro);
        $addressInputs.find('[name="city"]').val(address.localidade);
        $addressInputs.find('[name="state"]').val(address.uf);
        $addressInputs.fadeIn();
      },
      error: function(res) {
        alert('Endereço não encontrado.')
      }
    })
  }

  // como impedir que o evento se propague
  // e no caso desse button, acaba submetendo o form
  // e dando reload na pagina
  //
  // e.preventDefault();
  return false;
});
