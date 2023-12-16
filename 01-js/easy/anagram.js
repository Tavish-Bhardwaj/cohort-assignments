/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
// let string1=str1.toLowercase();
// let string2=str.toLowercase();
  if(str1.length==str2.length){
    for(let i=0;i<str1.length;i++){
      let count=0;
      let strvalue= str1[i].toLowerCase();
      for(j=0;j<str2.length;j++){
        if(str2[j].toLowerCase()==strvalue){
          count++;
          break;
          
        }
        else{

          continue;
        }
      }
      if(count>0){
        continue;
      }
      else{
        return false;
      }

    }
    return true;

  }
  else{
    return false;
  }
}

module.exports = isAnagram;
