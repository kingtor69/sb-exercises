describe ('myFind function', ()=>{
    it('should work', () => {
        expect(myFind([1,2,3,4,5,6], (num)=>{
            return num % 2 === 0;
        })).toEqual(2);
        expect(myFind([1,2,3,4,5,6], (num)=>{
            return num > 10;
        })).toEqual(undefined);
    })
});

describe ('myFindIndex function', ()=>{
    it('should also work', () => {
        expect(myFindIndex([1,2,3,4,5,6], (num)=>{
            return num > 3;
        })).toEqual(3);
        expect(myFindIndex([1,2,3,4,5,6], (num) => {
            return num > 10;
        })).toEqual(-1);
    })
})

describe ('findIndex vs filter for splitting into less and more', ()=>{
    it('should get the same result using partition or partitionIndex functions', ()=>{
        expect(partition([1,2,3,4,5,6], 3)).toEqual(partitionFilter([1,2,3,4,5,6], 3))
    })
})