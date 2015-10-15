/*
  atividade loop

  fazer a tabuada do 2, exemplo

  2 x 0 = 0
  2 x 1 = 2
  2 x 2 = 4
  ...
  2 x 10 = 20

  // em seguida fazer a tabuada do 2 ao 10
  2 x 9 = 18
  ...
  3 x = 0
  3 x 1 = 3
  ...
  10 x 10 = 100
*/
for (var tabuada = 2; tabuada < 11; tabuada++) {
  for (var n = 0; n < 10; n++) {
    console.log('%s x %s = %s', tabuada, n, tabuada * n);
  }
}
