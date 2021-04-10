describe('function hasDuplicates', () => {
    it('should return true if the length of the argument and return are different', () => {
        expect(hasDuplicate([1, 3, 2, 1])).toBeTruthy();
    });
    it('should return false if the length of the argument and return are the same', () => {
        expect(hasDuplicate([1, 5, -1, 4])).toBeFalsy();
    })
})

// describe('function vowelCount', () => {
//     it('should create a map of how many of each vowel are in the input string', () => {
//         const answer1 = new Map([
//             ['a', 1],
//             ['e', 2],
//             ['o', 1]
//         ]);
//         const answer2 = new Map(['o', 1])
//         const values1 = answer1.values();
//         expect(vowelCount('awesome')).toEqual(answer1);
//         expect(vowelCount('Colt')).toEqual(answer2);
//     })
// })