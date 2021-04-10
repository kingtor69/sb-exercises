// function to be rewritten downloaded from Springboard 
// http://curric.rithmschool.com/springboard/exercises/js-arrow-functions/ 
// on 2021 February 15 1810mst

// rewrite using ES2015 features:
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  
  // code by Tor Kingdon:
const doubleTor = (arr) => arr.map((val) => val * 2)

const squaredEvensTor = (nums) => 
  numbers.map((num) => 
  num ** 2).filter((sqr) => 
  sqr % 2 === 0);