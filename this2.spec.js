// 2a
describe("sumEvenArguments", function(){
    it("takes all of the arguments", function(){
        expect(sumEvenArgument(1,2,3,4)).toEqual(jasmine.any(Number))
    })
    it("returns the sum of the even ones", function(){
        expect(sumEvenArgument(1,2,3,4)).toEqual(6)
    })
    it("returns the sum of the even ones", function(){
        expect(sumEvenArgument(1,2,3)).toEqual(2)
    })
})
// 2b
describe("arrayFrom", function(){
    it("takes in an array-like-object", function(){
        expect(arrayFrom(1,2,3,4)).toEqual(jasmine.any(Object))
    })
    it("converts it into array", function(){
        expect(arrayFrom(1,2,3,4)).toEqual([1,2,3,4])
    })
})
// 2c
describe("invokeMax", function(){
    function add(a,b){
        return a+b
    }
    it("returns a function that calls another function ", function(){
        var addOnlyThreeTimes = invokeMax(add,3);
        expect(addOnlyThreeTimes(2,3)).toEqual(5)
        expect(addOnlyThreeTimes(2,3)).toEqual(5)
        expect(addOnlyThreeTimes(2,3)).toEqual(5)
        expect(addOnlyThreeTimes(2,3)).toBe("Maxed Out!")
    })
})
