const Bag = require('./Bag')
describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        const bag = new Bag(21)
        expect(bag.weight).toBe(21)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
    //returns error if bag is too heavy
    test('bag is over max weight', () => {
        expect(() => new Bag(25)).toThrowError('bag is over the limit of 23kg');
    })
})