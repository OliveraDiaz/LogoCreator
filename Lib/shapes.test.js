const shapes = require('./shapes');

// test circle logo.
describe('Circle', () => {
    describe('render', () => {
        it('should return a string', () => {
            const circle = new shapes.Circle();
            expect(typeof circle.render()).toBe('string');
        });
    });
});

// test square logo.
describe('Square', () => {
    describe('render', () => {
        it('should return a string', () => {
            const square = new shapes.Square();
            expect(typeof square.render()).toBe('string');
        });
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('should return a string', () => {
            const triangle = new shapes.Triangle();
            expect(typeof triangle.render()).toBe('string');
        });
    });
});