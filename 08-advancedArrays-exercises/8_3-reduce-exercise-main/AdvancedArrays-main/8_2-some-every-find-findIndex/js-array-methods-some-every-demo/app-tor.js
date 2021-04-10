function booleanEnglish (boolean) {
	return boolean ? 'YES' : 'NO';
}

function booleanDoesOrNot (boolean) {
	return boolean ? 'DOES' : 'DOES NOT';
}

function englishBoolean (yesOrNo) {
	if (yesOrNo === 'yes') {
		return true;
	} else if (yesOrNo === 'no') {
		return false;
	} else {
		return undefined;
	}
}

const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

let moreThan25Chars = booleanEnglish(words.some(function(word){
    return word.length > 25;
}));
console.log(`do any words have more than 25 characters? ${moreThan25Chars}`);

let mentionsThyroid = booleanEnglish(words.some(function(word){
	return word.indexOf('thyroid') !== -1;
}));
console.log(`do any words include the word "thyroid?" ${mentionsThyroid}`);

let allFiveOrMoreChars = booleanEnglish(words.every(function(w){
	return w.length >= 5;
}));
console.log(`are all words at least 5 characters long? ${allFiveOrMoreChars}`);

function allStrings(arr) {
	return arr.every(function(el) {
		return typeof el === 'string';
	});
}

let wordsAreAllStrings = booleanEnglish(allStrings(words));
console.log(`are all items in the 'words' array strings? ${wordsAreAllStrings}`);

// OK, let's actually use the HTML here:
const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
	const checkboxes = document.querySelectorAll('input[type="checkbox"')
	const allChecked = Array.from(checkboxes).every(checkbox => { return checkbox.checked});
	if(!allChecked){alert('You must agree to everything or you will die a lonely horrible death.')}
});

const fibonachi = [ 1, 1, 2, 3, 5, 8, 13, 21 ];
const primesOverTwo = [ 3, 5, 7, 11, 13 ];

function mySome (arr, callback) {
	for (i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			return true;
		}
	}
	return false;
}

function numIsEven(num) {
	return num % 2 === 0
};

let fibonachiHaveEvens = booleanDoesOrNot(mySome(fibonachi, numIsEven));

console.log(`this sequence of fibonachi ${fibonachiHaveEvens} have at least one even number`);
let primesOverTwoHaveEvens = booleanDoesOrNot(mySome(fibonachi, numIsEven));
console.log(`this sequence of prime numbers (greater than 2) ${primesOverTwoHaveEvens} have at least one even number`);

function myEvery (arr, callback) {
	for (i = 0; i < arr.length; i++) {
		if (!callback(arr[i], i, arr)) {
			return false;
		}
	}
	return true;
}

let fibonachiIsAllEven = booleanEnglish(myEvery(fibonachi, numIsEven));
console.log(`are all of these fibonachi numbers even? ${fibonachiIsAllEven}`);

let primesOverTwoAreAllEven = booleanEnglish(myEvery(primesOverTwo, numIsEven));
console.log(`are there any even numbers in this sequence of prime numbers? ${primesOverTwoAreAllEven}`);


