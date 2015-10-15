/*
  link do kata no codewars: http://www.codewars.com/kata/56170e844da7c6f647000063
  Kids drink toddy.
  Teens drink coke.
  Young adults drink beer.
  Adults drink whisky.

  Make a function that receive age, and return what they drink.

  Rules: Children under 14 old.
  Teens under 18 old.
  Young under 21 old.
  Adults have 21 or more.

  Example:

  peopleWithAgeDrink(13); // => drink toddy
  peopleWithAgeDrink(17); // => drink coke
  peopleWithAgeDrink(18); // => drink beer
  peopleWithAgeDrink(20); // => drink beer
  peopleWithAgeDrink(30); // => drink whisky
 */
var peopleWithAgeDrink = function(age) {
  var drink;
  if (age < 14)
    drink = 'toddy';
  else if (age < 18)
    drink = 'coke';
  else if (age < 21)
    drink = 'beer';
  else
    drink = 'whisky';

  return 'drink '+drink;
}

console.log(peopleWithAgeDrink(13);
