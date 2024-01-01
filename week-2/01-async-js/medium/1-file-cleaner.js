const fs = require('fs');


function removeExtraSpaces(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(content);
    const modifiedContent = content.replace(/\s+/g, ' ');
    fs.writeFileSync(filePath, modifiedContent);

    console.log(`Extra spaces removed and written back to ${filePath}`);
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Example usage:
const filePath = 'your_file.txt';

removeExtraSpaces(filePath);

const finalcontent =  fs.readFile("your_file.txt", "utf-8", function(err,data){
    console.log(data);
})
