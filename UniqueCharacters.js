//Write a JavaScript function to extract unique characters from a string.

const phrase = "thequickbrownfoxjumpsoverthelazydog";

function extractUniqueCharactersUsingSet(phrase) {
    const uniqueSet = new Set();
    let result = "";
  
    for (let i = 0; i < phrase.length; i++) {
      if (!uniqueSet.has(phrase[i])) {
        uniqueSet.add(phrase[i]);
        result += phrase[i];
      }
    }
  
    return result;
  }
  
  console.log(extractUniqueCharactersUsingSet(phrase));
