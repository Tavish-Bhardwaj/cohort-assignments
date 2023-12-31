// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require("fs");

console.log("This is before the read opearation");
const readData = fs.readFile("newfileassignment.txt", "utf-8", function (err, data) {
    console.log(data);
    console.log("This is inside the async readfile function block");
})

console.log("This is something after the read opearation");

const readData2 = fs.readFileSync("newfileassignment.txt", "utf-8");
console.log(readData2);
console.log("This is inside the sync readfile function block, lets see the execution");
