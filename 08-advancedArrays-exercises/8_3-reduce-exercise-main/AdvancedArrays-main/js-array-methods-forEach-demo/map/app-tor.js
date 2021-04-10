const numbers = [21,37,64,99,142];
const negatives = numbers.map(function(num) {
    return num * -1;
});

const todos = [
    {
        id : 1,
        text : 'walk the dog',
        priority : 'high'
    },
    {
        id : 2,
        text : 'walk the chickens',
        priority : 'medium'
    },
    {
        id : 3,
        text : 'feed the cats',
        priority : 'low'
    },
    {
        id : 4,
        text : 'put out the fire in the garbage',
        priority : 'very high'
    }
];

const todoText = todos.map(function(todo) {
    return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
    return a.href;
});

// ------ home-made map function:
function double(n) {
    return n*2;
}

function myMap (arr, callback) {
    const returnArr = [];
    for (let i=0; i<arr.length; i++) {
        const val = callback(arr[i], i, arr);
       returnArr.push(val);        
    }
    return returnArr;
}

const myMappedArray = myMap(numbers, function(val){
    return val*2;
})

// I wanted to do this with:
// const myMappedArray = myMap(numbers, double(val));
// or
// const myMappedArray = myMap(numbers, function(val){
//     return double(val);
// })

console.log(`myMap function yields ${myMappedArray}`);

const letters = ['a','b','c','d','e'];
const repeatedStringsMyMap = myMap(letters, function (str, idx) {
    return str.repeat(idx);
});

console.log(`myMap function yields ${repeatedStringsMyMap}`);

const repeatedStringsJSMap = letters.map(function (str, idx) {
    return str.repeat(idx);
})

console.log(`JavaScript map yields ${repeatedStringsJSMap}`);

