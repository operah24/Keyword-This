//  1a
 var data = this;
console.log(data);
// The keyword "this" is window 

// 1b
function logThis(){
    return this;
}
console.log(logThis());
// The output is window because the keyword "this" is in the global context

// 1c
var instructor = {
    firstName:'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}
console.log(instructor.sayHi());
// The output is "Hello! Tim" because it is obeying implicit binding rule so the keyword "this" will refer to the parent object.

// 1d
var instructor ={
    firstName:'Tim',
    info:{
        catOwner:true,
        boatOwner:true
    },
    displayInfo:function(){
        console.log("Cat owner? " + this.catOwner)
    }
}
console.log(instructor.displayInfo())
// The output is "Cat owner? undefined" because the this keyword was not refering to the nearest parent object.

// 1e
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}
console.log(instructor.info.displayLocation());
// The output is "Oakland" because this keyword is refering to the nearest parent object

// 1f
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}
// The output is error

// 2a
function sumEvenArgument(){
    var arg = [].slice.call(arguments);
    
    return arg.reduce(function(acc,next){
        if(next % 2 === 0){
        return acc + next;
    }
    return acc
    },0)
    
}

// 2b
function arrayFrom(){
    return [].slice.call(arguments)
}

// 2c
function invokeMax(fn, num){
    var max = 0;
    return function(){
        if(max >= num){
            return "Maxed Out!"
        }
        max++
        return fn.apply(this,arguments) 
    }
}
function add(a, b){
    return a + b;
}
var addOnlyThreeTimes = invokeMax(add,3);

// 2d
function guessingGame(amount) {
    var answer = Math.floor(Math.random() * 10);
    var guesses = 0;
    return function(guess) {
      guesses++;
      if (guesses > amount) {
        return "You are all done playing!";
      } else if (answer < guess) {
        return "You're too high!";
      } else if (answer > guess) {
        return "You're too low!";
      } else if (answer === guess) {
        return "You got it!";
      }
    }
}
var game = guessingGame(5)
 



