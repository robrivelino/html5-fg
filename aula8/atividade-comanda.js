/* atividade comanda
  usando um array como o abaixo:
  var arr = [
    {name: 'Coxinha', amount: 2, value: 2.5},
    {name: 'Coca', amount: 1, value: 7}
  ];

  crie funcoes para fazer um loop nesse array,
  e calcular o total da compra, e printar na tela tudo como abaixo

  Printar na tela:
  Comanda:
  Qtd.    Produto   Preco Unit.
  2       Coxinha   R$ 2,50
  1       Coca      R$ 7,00

  Total             R$ 12,00
*/

var Comanda = {
  items: [
    {name: 'Coxinha', amount: 2, value: 2.5},
    {name: 'Coca', amount: 1, value: 7.1}
  ],

  calcTotal: function() {
    var total = 0;
    Comanda.items.forEach(function(item, index) {
      var totalItem = item.amount * item.value;
      total += totalItem;
    });
    return total;
  },

  formatterAsReal: function(number) {
    return 'R$ '+ number.toFixed(2).replace('.', ',');
  },

  print: function() {
    console.log('Qtd. \t\tProduto \tPreco Unit.');
    Comanda.items.forEach(function(item) {
      console.log('%s \t\t%s \t\t%s', item.amount, item.name, Comanda.formatterAsReal(item.value));
    });
    console.log('\nTotal:\t\t\t\t%s', Comanda.formatterAsReal(Comanda.calcTotal()));
  }
};

Comanda.print();
