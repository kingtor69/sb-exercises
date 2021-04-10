describe('ES5 to ES2015 refactoring', () => {
    it('should give the same result as the old version', () => {
        expect(createInstructorTor("Colt", "Steele")).toEqual(createInstructor("Colt", "Steele"));
    })
})

describe('talking instructor', () => {
    it('should return the same response as the ES5 version', () => {
        expect(instructorSpeaks.sayHi()).toEqual(instructor.sayHi());     
        expect(instructorSpeaks.sayBye()).toEqual(instructor.sayBye());     
    })
})

describe('making animals talk', () => {
    it('should make the dog say woof', () => {
        expect(d.bark()).toEqual("Woooof!");
    })
    it('should make the sheep say baa', () => {
        expect(s.bleet()).toEqual("BAAAAaaaa");
    })
})