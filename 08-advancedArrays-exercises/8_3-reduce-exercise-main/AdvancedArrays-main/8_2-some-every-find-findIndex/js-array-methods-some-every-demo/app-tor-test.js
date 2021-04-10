describe('function mySome', function() {
    const fibonachi = [ 1, 1, 2, 3, 5, 8, 13, 21 ];
    const primesOverTwo = [ 3, 5, 7, 11, 13 ];

    it('should show whether any numbers in an array are even', function() {
        expect(mySome(fibonachi,(num)=>{return num % 2 === 0})).toEqual(true);
        expect(mySome(primesOverTwo,(num)=>{return num % 2 === 0})).toEqual(false);
    })
})

describe('function myEvery', function() {
    const fibonachi = [ 1, 1, 2, 3, 5, 8, 13, 21 ];
    const primesOverTwo = [ 3, 5, 7, 11, 13 ];

    it('should show whether all numbers in an array are odd', function() {
        expect(myEvery(fibonachi,(num)=>{return num % 2 !== 0})).toEqual(false);
        expect(myEvery(primesOverTwo,(num)=>{return num % 2 !== 0})).toEqual(true);
    })
})