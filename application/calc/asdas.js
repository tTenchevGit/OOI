let assert, calc;

before(async () => {
    // Dynamically import Chai and calculator module
    const chaiModule = await import('chai');
    assert = chaiModule.assert;

    // Assuming calculator module is located in the same directory
    calc = require('./calc/calculator');
});

describe('calc Sum', () => {
    it('should return the sum of two numbers', () => {
        let first = 1;
        let second = 5;

        let result = calc(first, second);

        assert.equal(result, 6);
    });
});
