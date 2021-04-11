//What is the difference between import and require?

//Require:
// 1. Require is Non-lexical, it stays where they have put the file.
// 2.It can be called at any time and place in the program.
// 3.You can directly run the code with require statement.
// 4.f you want to use require module then you have to save file with ‘.js’ extension.
//5.You can have dynamic loading where the loaded module name isn't predefined /static, or where you conditionally load a module only if it's "truly required" (depending on certain code flow).
//6.Loading is synchronous. That means if you have multiple requires, they are loaded and processed one by one.

//Import

// 1.Import is lexical, it gets sorted to the top of the file.
// 2. It can’t be called conditionally, it always run in the beginning of the file.
// 3.To run a program containing import statement you have to use experimental module feature flag.
// 4.If you want to use import module then you have to save file with ‘.mjs’ extension.
// 5.You can use named imports to selectively load only the pieces you need. That can save memory.
// 6. Import can be asynchronous (and in current ES6 Module Loader, it in fact is) and can perform a little better



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//How can you enable using the import syntax using node js?
// To run a program containing import statement you have to use experimental module feature flag.
// If you want to use import module then you have to save file with ‘.mjs’ extension.


///////////////////////////////////////////////////////////////////////////////////////////////////////////





const {add,sub, sort} = require('./utils.js')

const sum = add(2,3);
const minus= sub(2,3);
const arr = sort([3,5,1,2]);

console.log(sum, minus, arr);