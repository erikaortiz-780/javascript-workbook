//Figure out & Write out global storage & name
//Figure out & Write out function names, purpose, method
//name, task, method
//The basic idea of Pig Latin is to take the first letters of the word up to the first vowel, move them to the back, and add 'ay' to the end of it.


//const vowel = ['a','e','i','o','u']
//const newWord= ''


//splitLetters, split all letters in a word, split function'
//findVowel, find the vowel variable, index of function
//moveAllLettersUpToVowel, find all leters up to vowel and move to the end;  push function?
//addAY, pass through a function to get newWord and add AY to end, return newWord and add AY

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//my code
let pigLatin = (str)=> {

  const Vowel = ["a","e","i","o","u"];

    // if a word starts with a vowel, just add "way"
    if (Vowel.indexOf(str[0]) > -1) {
        return str+"way";
    }

    //if a word doesn't start with a vowel..
   else {
       for (var i = 0; i<str.length; i++){
           if (Vowel.indexOf(str[i]) > -1){
             //get all the words before the vowel
               const beforeVowel = str.slice(0, i);
               //get the vowel and all the words after the vowel
               const vowelAndAfterVowel = str.slice(i, str.length);
              //add vowel cluster + nonvowel cluster +ay 
               str = vowelAndAfterVowel+beforeVowel+"ay";
               break;}
            }
    return str;}
}

pigLatin(str);

//end of my code

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
