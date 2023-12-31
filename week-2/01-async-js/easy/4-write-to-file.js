// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs= require('fs');
let content= "This is the data which we are entering into the file using the writefile operation.";

const filemodified= fs.writeFileSync("newfileassignment", content);
console.log("This is the text after the sync writefile function");

fs.readFile("newfileassignment", "utf-8", function(err, data){
    console.log(data);
})

const filemodified2= fs.writeFile("newfileassignment", content, err=>{
    if (err){
        console.error(err);
    }
console.log("this text is from the inside of the writefile async function");
});



fs.readFile("newfileassignment", "utf-8", function(err, data){
    console.log(data);
})
