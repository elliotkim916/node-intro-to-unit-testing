// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our fizzBuzzer function
describe('fizzBuzzer', function() {

    // test the normal case
    it('should return fizz-buzz, buzz, fizz, or the number inputted', function() {

        // range of normal inputs, including numbers that aren't divisible by 5
        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 4, expected: 4},
            {a: 3, expected: 'fizz'}
        ];

        // for each set of inputs, 'fizzBuzzer' should produce the expected value
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise an error if arg not number', function(){
        // range of bad inputs where none are numbers
        const badInputs = [
            ['a'],
            ['b'],
            ['c']
        ];

        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0], input[1])
            }).to.throw(Error);
        });
    });
});