const squares = require('./main');

test('Area of a square with size 10 equals 100', function() {
    expect(squares.area(10)).toBe(100);
})

test('Area of a square with size 5 equals 25', function() {
    expect(squares.area(5)).toBe(25);
})