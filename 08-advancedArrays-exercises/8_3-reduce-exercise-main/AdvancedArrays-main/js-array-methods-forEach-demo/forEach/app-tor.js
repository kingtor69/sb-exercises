const colors = ['teal', 'cyan', 'peach', 'purple'];
// debugger;
colors.forEach(console.log);
// the console.log (without parenthesese, which is weird) shows: 
    // teal 0 > Array(4)
    // cyan 1 > Array(4)
    // peach 2 > Array(4)
    // purple 3 > Array(4)

// colors.forEach(function(val){
//     console.log(val.toUpperCase());
// });
// shows us each name in UpperCase
// or like this:
function yell(str, i) {
    const caps = str.toUpperCase();
    console.log(`At index ${i}, we have ${caps}. Dammit.`);
}

colors.forEach(yell);

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
prices.forEach(function(price) {
    total+=price;
});
console.log(total);

console.log('writing our own forEach as a function:');
// -------------------------
function myForEach(arr,func) {
    let i = 0;
    for (let item of arr) {
        func(item, i);
        i++;
    }
}
// Colt did it with an old school for loop so it would do the i as it went

    // using what we did above:
myForEach(colors,yell);

// Colt also did it with the func embedded in the call instead of being an external function called to this myForEach function:

function coltsForEach(arr, callback) {
    for (let i=0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

coltsForEach (colors, function(color, i) {
    console.log(color.toUpperCase(), ', Colt styleeee, at index of:', i);
});