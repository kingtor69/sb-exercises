console.log('// 8.2.9 "filter:"');

const words = [
    'immunoelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopseudohydpoparathyroidism',
    'unimaginatively',
    'antidisestablishmentarianism'];

const containsVowel = function(word){
    for (let ltr of word) {
        if (isVowel(ltr)) return true;
    }
    return false;
}

const isVowel = function(ltr){
    return 'aeiou'.indexOf(ltr) !== -1;
}

const longWords = words.filter(function(word){
    return word.length >= 20;
});

const cOrUWords = words.filter(function(w){
    return w[0] === 'u' || w[0] === 'c';
});

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word) {
    return !containsVowel(word);
});

// yeah, yeah, yeah, we know the 'y' in 'crypt' and 'cysts' are vowels. sh. 

console.log(`// 8.1.10 "map and filter"`);
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});

const unchecked = Array.from(allCheckboxes).filter(function(box){
    return !box.checked;
});



const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
});

const stillToDo = unchecked.map(function(nocheckbox){
    return nocheckbox.parentElement.innerText;
});

console.log(`This morning, you had ${allCheckboxes.length} things you wanted to get done today.`);
if (checked.length === allCheckboxes.length) {
    console.log(`And you nailed it. Boo-yah!`);
    console.log(`Sleep well.`);
} else if (checked.length >= (0.5*allCheckboxes.length)) {
    console.log(`Congratulations. You completed ${checked.length} of them: `);
    listCompleted();
    console.log('');
    console.log(`Tomorrow morning you'll have ${unchecked.length} roll-over items: `);
    listUnCompleted();
    console.log(`Sleep well.`);
} else if (checked.length !== 0) {
    console.log(`You only completed ${checked.length} of them: `);
    listCompleted();
    console.log(`I have faith you can do better tomorrow.`);
    console.log('');
    console.log(`Tomorrow morning you'll have ${unchecked.length} roll-over items: `)
    listUnCompleted();
    console.log(`Sleep well. You'll need it.`);
} else {
    console.log(`You didn't do any of them. What is wrong with you, man?`);
    console.log('');
    console.log(`Tomorrow morning you'll have the whole damn list waiting for you: `)
    listUnCompleted();
    console.log(`Good luck getting any sleep.`);
}

function listCompleted() {
    for (let i=0; i<checked.length; i++){
        console.log(`#${i+1}: ${completedItems[i]}`);
    };
};

function listUnCompleted() {
    for (let i=0; i<unchecked.length; i++){
        console.log(`#${i+1}: ${stillToDo[i]}`);
    };
};

// or, Colt made one function that does a lot of this:
function extractCompletedTasks(){
    // const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    // that's commented out because we already have it from above
    return Array.from(allCheckboxes)
    .filter(function(box) {
        return box.checked;
    })
    .map(function(checkbox) {
        return checkbox.parentElement.innerText;
    });
}


console.log(`// 8.1.11 myOwnFilter function:`);
function myFilter (arr, callback) {
    const filteredArray = [];
    // let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
}

// called with: 
// myFilter (arr, callback);
// and to be totally accurate, filter does pass the index of each step, although I'm not sure if I'm doing that the way he means because I don't remember using it at all before now

const theFinalWords = myFilter (words, function(word) {
    return containsVowel(word);
});

console.log(`The Last Words on the subject: `);
for (let word of theFinalWords) {
    console.log(`   ${word}`);
}

// here's what Colt meant with passing the index: 
function coltsFilter(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
}

// and how we would use that index:
const everyOtherWord = coltsFilter(words, function(word, i){
    return i % 2 === 0;
});

// Yeah, OK, so it would be like this using the filter method: 
const everyOtherFilteredWord = words.filter(function(word, i){
    return i % 2 === 0;
});