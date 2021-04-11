

//1. Create a new txt file using the same fs module method we have learned before.
/////////////////////////////////////////////////////////////////////////////////////////
const fs= require('fs')

fs.writeFileSync('note.txt','This is new text file created in Node.js by yana dekel');


//2.Create a copy of the newly created txt file using a method from the fs module.
/////////////////////////////////////////////////////////////////////////////////////
fs.copyFileSync('note.txt', 'myFirstNote.txt');
console.log('note.text was copied to destination.text');
//////////////////////////////////////////////////////////////////////////////////
// 3. Rename one of the files using a method from the fs module.

fs.renameSync('note.txt', 'introToFs.txt');
console.log('note.text was change to new.text');
/////////////////////////////////////////////////////////////////////////////////////
// 4. Get a list of all the file names of the current directory using a method from the fs module.

// const fileSystem= "./ex 2.2 file_system/"

// ffs.readdirSync(fileSystem).forEach(file => {
//   console.log(file);
// });
/////////////////////////////////////////////////////////////////////////////////////////////////
//5. appendFile

fs.appendFileSync('introToFs.txt',"  now i'm officialiy using Node.js ;)")