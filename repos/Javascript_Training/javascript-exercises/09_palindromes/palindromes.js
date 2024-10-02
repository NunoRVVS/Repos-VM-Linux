const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const originalStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');
    
    const reversedStr = originalStr.split('').reverse().join('');

    return (originalStr) ? (originalStr == reversedStr) : (originalStr != reversedStr);
};

// Do not edit below this line
module.exports = palindromes;
