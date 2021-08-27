const {translate} = require("./index");

describe('translate', () => {
    test('words that start with a vowel', () => {
        expect(translate('apple')).toBe('appleway');
    });

    test('words that start with a capital Vowel', () => {
        expect(translate('Option')).toBe('optionway');
    });

    test('words that start with a consonant', () => {
        expect(translate('book')).toBe('ookbay');
    });

    test('words that start with more than one consonant', () => {
        expect(translate('thorough')).toBe('oroughthay');
    });
})