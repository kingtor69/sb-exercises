// # Destructuring exercise
console.log("let's do dis");
// starter code and instructions copied and pasted from Springboard
// http://curric.rithmschool.com/springboard/exercises/js-destructuring/
// 2021 February 17 2301mst
// some minor changes to variable names to avoid declation conflicts made by Tor Kingdon

// answers sent to html via DOM, that coding by Tor Kingdon

// ## Object Destructuring 1
const answerDiv = document.querySelector('.answers');
answerDiv.innerHTML = "<h4>Object Destructuring 1</h4>";

// what does the following code return/print?
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?
answerDiv.innerHTML += "<p>numPlanets <i>// 8</i></p>"
answerDiv.innerHTML += "<p>yearNeptuneDiscovered <i>// 1846</i></p>"


// ## Object Destructuring 2
answerDiv.innerHTML += "<h4>Object Destructuring 2</h4>";
// what does the following code return/print?
let planetFacts = {
    numberPlanets: 8,
    neptuneDiscoveryYear: 1846,
    marsDiscoveryYear: 1659
};

let { numberPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // ?
answerDiv.innerHTML += "<p>discoveryYears <i>// [ 1846, 1659 ]</i></p>"

// ## Object Destructuring 3
answerDiv.innerHTML += "<h4>Object Destructuring 3</h4>";
// what does the following code return/print?
function getUserData({ firstName, favoriteColor = "green" }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }) // ?
getUserData({ firstName: "Melissa" }) // ?
getUserData({}) // ?
answerDiv.innerHTML += "<p>getUserData({ firstName: &quot; Alejandro &quot;, favoriteColor: &quot; purple &quot; }) <i>// Your name is Alejandra and you like purple</i></p>"
answerDiv.innerHTML += "<p>getUserData({ firstName: &quot;Melissa&quot; }) <i>// Your name is Melissa and you like green</i></p>"
answerDiv.innerHTML += "<p>getUserData({}) <i>// Your name is undefined and you like green</i></p>"

// ## Array Destructuring 1
answerDiv.innerHTML += "<h4>Array Destructuring 1</h4>";
// what does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?
answerDiv.innerHTML += '<p>first <i>// "Maya"</i></p>'
answerDiv.innerHTML += '<p>second <i>// "Marisa"</i></p>'
answerDiv.innerHTML += '<p>third <i>// "Chi"</i></p>'

// ## Array Destructuring 2
answerDiv.innerHTML += "<h4>Array Destructuring 2</h4>";
// what does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?
answerDiv.innerHTML += '<p> <i>// "Raindrops on roses"</i></p>'
answerDiv.innerHTML += '<p> <i>// "Whiskers on kittens"</i></p>'
answerDiv.innerHTML += '<p> <i>// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]</i></p>'

// ## Array Destructuring 3
answerDiv.innerHTML += "<h4>Array Destructuring 3</h4>";
// what does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?
answerDiv.innerHTML += "<p> <i>// [10, 30, 20]</i></p>"

// ## ES2015
var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
answerDiv.innerHTML += '<ol><li id="obj"></li><li id="a"></li><li id="b"></li></ol>';
const liObj = answerDiv.querySelector('#obj');
const liA = answerDiv.querySelector('#a');
const liB = answerDiv.querySelector('#b');
liObj.innerText = `{numbers: {...}} `;
liA.innerText = `1 `;
liB.innerText = `2 `;

/* Write an ES2015 Version */
// following code by Tor Kingdon

const iObject = {
    numbers: {
        aay: 1,
        bee: 2
    }
};

const { numbers: { aay, bee } } = iObject;
liObj.innerHTML += `<i>  // {numbers: {...}}</i>`;
liA.innerHTML += `<i>  // 1</i>`;
liB.innerHTML += `<i>  // 2</i>`;



const iIObject = liObj.querySelector('i');
const iAay = liA.querySelector('i');
const iBee = liB.querySelector('i');