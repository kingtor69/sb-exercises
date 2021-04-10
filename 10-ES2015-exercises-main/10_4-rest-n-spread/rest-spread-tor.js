// ES5 code, assignments and suggested tests copied/pasted from Springboard
// http://curric.rithmschool.com/springboard/exercises/js-rest-spread/
// 2021 February 16 1204mst

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

function filterOutOddsTor(...nums) {
    return nums.filter((num) => num % 2 === 0);
};

/*
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/
function findMin(...nums) {
    return nums.reduce((min, nxt) => nxt < min ? nxt : min);
};

/*
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

/*
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/
const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...(nums.map((n)=>n*2))];

/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random()*items.length);
    items.splice(randomIndex, 1);
    return items;
}
// I re-factored this, but I think it's more awkward as an arrow function. YMMV

/** Return a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    const newObj = {};
    newObj[key] = val;
    return {
        ...obj,
        ...newObj
    };
}
// this is another that I find more awkward as an arrow function, but here it is anyway

/** Return a new object with a key removed. */
const removeKey= (obj, key) => {
    const returnObject = {};
    for (let oldKey in obj) {
        if (oldKey !== key) {
            returnObject[oldKey] = obj[oldKey];
        }
    }
    return returnObject;
}
// it seems like there's a way to use a ternary value on that if statement, but I didn't get it and decided it was OK as is

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    const retObj = { ...obj };
    retObj[key]=val;
    return retObj;
}
// this is the same as addKeyVal, but I looked in the solution and they have the same code. I did this one a little differently just to mix it up. ;)