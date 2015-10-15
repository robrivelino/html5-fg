// atividade regex, validar cpf, contendo pontos e hifens, exemplo
// 000.000.000-00

// validar telefone fixo / celular
// exemplo: 0000-0000 ou 00000-000

var regCPF = /^(\d{2,3}\.\d{3}\.\d{3}\-\d{2}|\d{10,11})$/;
/*
  \d{3}   // 3 numeros
  \.      // ponto
  \-      // hifen
*/

var cpf = '000.000.000-00';
console.log('cpf is %s', regCPF.test(cpf));

var phone = '90000-0000';
var regPhone = /^([7-9])?\d{4}\-\d{4}$/;

console.log('phone is %s', regPhone.test(phone));
