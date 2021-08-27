

function translate(word) {
    var wordStr = word.toLowerCase();
    var char = "";

    if (wordStr.slice(0,1).match(/[aeiou]/)) {
        wordStr = wordStr + "way";
    }

    else {
        
        while (wordStr.slice(0, 1).match(/[^aeiou]/)) {
            char += wordStr.slice(0,1);
            wordStr = wordStr.slice(1, wordStr.length);
        }
        wordStr = wordStr + char + "ay";
    }

    return wordStr;

}
console.log(translate('Thorough'));

module.exports = {translate};