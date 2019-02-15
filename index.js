var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(name);
  return kittens;
}
function appendKitten(name){
  var newArray = kittens;
  newArray = newArray.concat(name);
  return newArray;
}
function prependKitten(name){
  var newArray[];
  newArray[0] = name;
  newArray = newArray.concat(name);
  return newArray;
}
//removeLastKitten()r
//removeFirstKitten()

// Add your functions and code here
