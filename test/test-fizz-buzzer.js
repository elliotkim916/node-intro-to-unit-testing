// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    describe('should return fizz-buzz, buzz, fizz, or the number inputted', function() {

        const normalCases = [
            {a: 15, expected: 'fizz-buzz'},
            {a: 4, expected: 4},
            {a: 3, expected: 'fizz'}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise an error if arg not number', function(){
        const badInputs = [
            ['a'],
            ['b'],
            ['c']
        ];

        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0], input[1])
            }).to.throw(Error);
        });
    });
});