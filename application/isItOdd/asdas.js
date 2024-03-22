before(async () => {
    // Dynamically import Chai and calculator module
    const chaiModule = await import('chai');
    assert = chaiModule.assert;

    // Assuming calculator module is located in the same directory
    // calc = require('./isItOdd');
});

const chai = require('chai');
const assert = chai.assert;

describe('isItOdd', () => {
    it('shouldreturn odd',() => {
        assert.equal(6,5);
    })
})