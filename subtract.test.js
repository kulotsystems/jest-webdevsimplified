const subtract = require('./subtract.js');

test('properly subtracts two numbers', () => {
    expect(
        subtract(1, 2)
    ).toBe(-1);
});