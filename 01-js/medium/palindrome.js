/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // return true;
  // let count=0;
  // let finalstring = str.toLowerCase();


  // for (let j=0; j<finalstring.length;j++){
  //   if(finalstring[j]==" " || finalstring[j].charCodeAt()>122 || finalstring[j].charCodeAt()<97){
  //     finalstring.splice(j,1);
      
  //   }
  //   else{
  //     continue;
    
  // }
  // for(let i=0;i<=str.length/2;i++){
   

  //     if(finalstring[i]==finalstring.length-(i+1)){
  //       count++;
  //     }
  //     if (count==str.length/2){
  //       return true;
//       }
//       else{
//         return false;
//       }
//   }
    
// }

// function isPalindrome(str) {
 
// }

let finalString = str.toLowerCase().replace(/[^a-z]/g, '');

for (let i = 0; i < finalString.length / 2; i++) {
  if (finalString[i] !== finalString[finalString.length - (i + 1)]) {
    return false;
  }
}

return true;


}
module.exports = isPalindrome;
