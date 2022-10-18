export function romanToInteger(str) {
    let roman_numbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0,
        letter = str.split('');
    for (let i = 0; i < letter.length; i++) {
        if (roman_numbers[letter[i]] < roman_numbers[letter[i + 1]]) {
            result = result - roman_numbers[letter[i]];
        } else {
            result = result + roman_numbers[letter[i]];
        }
    }
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
