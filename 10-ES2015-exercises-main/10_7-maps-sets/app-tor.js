function hasDuplicate(arr) {
    return [...new Set(arr)].length !== arr.length;
}
// Jasmine tests on this one pass

function vowelCount(str) {
    const returnMap = new Map();
    const vowelSet = new Set('aeiou');
    for (let i = 0; i < str.length; i++) {
        const ltr = str[i];
        if (vowelSet.has(ltr)) {
            if (returnMap.has(ltr)) {
                const val = returnMap.get(ltr);
                returnMap.set(ltr, val + 1);
            } else returnMap.set(ltr, 1)
        }
    }
    return returnMap;
}
// I gave up trying to figure out how to test this in Jasmine
// but it checked out fine in the console window