module.exports = function toReadable (number) {
    const numbers = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    if (number === 0) {
        return 'zero';
    } 
    
    if (number <= 19) {
        return numbers[number];
    }

    const numbersArray = ('' + number).split('');
    if (numbersArray.length === 2) {
        return `${dozens[numbersArray[0]]} ${numbers[numbersArray[1]]}`.trim();
    }

    let humanReadableNumber = `${numbers[numbersArray[0]]} hundred `;
    number = number % 100;
    humanReadableNumber += (number <= 19 )
        ? numbers[number]
        : `${dozens[numbersArray[1]]} ${numbers[numbersArray[2]]}`
    ;
    return humanReadableNumber.trim();
}