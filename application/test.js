before(async () => {
    // Dynamically import Chai and calculator module
    const chaiModule = await import('chai');
    assert = chaiModule.assert;

    // Assuming calculator module is located in the same directory
    // calc = require('./isItOdd');
});
const lookupChar = require('./lookupChar'); // Importing the lookupChar function from the local module

describe('lookupChar', () => { // Describing a group of test cases for the lookupChar function
    it('should return undefined for invalid input types', () => { // Describing the first test case
        assert.equal(lookupChar(5, 2), undefined); // Asserting that the result of lookupChar(5, 2) should be undefined
        
        assert.equal(lookupChar('test', 'index'), undefined); // Asserting that the result of lookupChar('test', 'index') should be undefined
        
        assert.equal(lookupChar(5, 'index'), undefined); // Asserting that the result of lookupChar(5, 'index') should be undefined
    });

    it('should return "Incorrect index" for out of bounds indices', () => { // Describing the second test case
        assert.equal(lookupChar('test', -1), 'Incorrect index'); // Asserting that the result of lookupChar('test', -1) should be "Incorrect index"
        
        assert.equal(lookupChar('test', 10), 'Incorrect index'); // Asserting that the result of lookupChar('test', 10) should be "Incorrect index"
        
        assert.equal(lookupChar('test', 4), 'Incorrect index'); // Asserting that the result of lookupChar('test', 4) should be "Incorrect index"
    });

    it('should return correct character for valid inputs', () => { // Describing the third test case
        assert.equal(lookupChar('test', 1), 'e'); // Asserting that the result of lookupChar('test', 1) should be 'e'
        
        assert.equal(lookupChar('test', 0), 't'); // Asserting that the result of lookupChar('test', 0) should be 't'
        
        assert.equal(lookupChar('test', 3), 't'); // Asserting that the result of lookupChar('test', 3) should be 't'
    });
});
