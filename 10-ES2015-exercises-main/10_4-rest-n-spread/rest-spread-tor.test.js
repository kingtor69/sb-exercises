describe('refactor filterOutOdds to ES2015', () => {
    it('should output the same as the ES5 function', () => {
        expect(filterOutOddsTor(1,2,6,13,42,51)).toEqual(filterOutOdds(1,2,6,13,42,51));
    })

    it('should output even numbers from an array of numbers', () => {
        expect(filterOutOddsTor(1,2,6,13,42,51)).toEqual([2,6,42]);
    })
})

describe('find minimum number of an array with findMin', () => {
    it('should find the minimum number', () => {
        expect(findMin(1,4,12,-3)).toEqual(-3);
        expect(findMin(1,-1)).toEqual(-1);
        expect(findMin(3,1)).toEqual(1);
    })
}) 

describe('merge 2 objects into one with mergeObjects', () => {
    it('should merge two objects into one', () => {
        expect(mergeObjects({a:1, b:2}, {c:3, d:4})).toEqual({a:1, b:2, c:3, d:4});
    })
})

describe('double and return arguments', () => {
    it('should create one array with doubled values from an array and additional arguments', () => {
        expect(doubleAndReturnArgs([1,2,3],4,4)).toEqual([1,2,3,8,8]);
        expect(doubleAndReturnArgs([2],10,4)).toEqual([2, 20, 8]);
    })
})

describe('removeRandom', () => {
    it('should return an array one item shorter than input', () => {
        expect(removeRandom([1,2,3,4,5])).toHaveSize(4);
        expect(removeRandom(['pickles', 'bananas', 'peanut butter', 'sharp cheddar cheese'])).toHaveSize(3);
    })
    it('should include all but one elements of the original array in the output', () => {
        // how the fuck do I write that?
    })
})

describe('extend two arrays into one', () => {
    it('should output an array as long as both put together', () => {
        expect(extend([1,2,3,4,5], ['pickles', 'bananas', 'peanut butter', 'sharp cheddar cheese'])).toHaveSize(9);
    })
    it('should output both input arrays in one output array', () => {
        expect(extend([1,2,3,4,5], ['pickles', 'bananas', 'peanut butter', 'sharp cheddar cheese'])).toEqual([1,2,3,4,5, 'pickles', 'bananas', 'peanut butter', 'sharp cheddar cheese']);
    })
})

describe('add key and value to an object', () => {
    it('should output an object with an existing object plus one new key and value', () => {
        expect(addKeyVal({name: "beavis", friend: "butthead"}, "hobby", "arson")).toEqual({name: "beavis", friend: "butthead", hobby: "arson"});
    })
})

describe('remove key and corresponding value from an object', () => {
    it('should output an object with all but the specified key and corresponding value', () => {
        expect(removeKey({name: "beavis", friend: "butthead", hobby: "arson"}, "hobby")).toEqual({name: "beavis", friend: "butthead"});
    })
})

describe('combine two objects into one', () => {
    it('should output an object consisting of two input objects', () => {
        expect(combine({name: "beavis", friend: "butthead"}, {hobby: "arson", favoriteBodyPart: "bunghole"})).toEqual({name: "beavis", friend: "butthead", hobby: "arson", favoriteBodyPart: "bunghole"})
    })
})

describe('update and object with a new key and value', () => {
    it('should output an object with an existing object plus one new key and value', () => {
        expect(update({name: "beavis", friend: "butthead"}, "hobby", "arson")).toEqual({name: "beavis", friend: "butthead", hobby: "arson"});
    })
})

