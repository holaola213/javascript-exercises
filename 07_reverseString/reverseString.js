const reverseString = function(word) {
    const reverse = Array.from(word);
    const newWord = reverse.reverse().join('');
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
