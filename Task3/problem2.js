const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here
//Your code goes here … replace this line with your code logic 
function printAllKeys(obj) {
 // your code here
 console.log(Object.keys(obj));
 
}
//console.log(userInput[0]);
let inputobject = JSON.parse(userInput[0]);

printAllKeys(inputobject);
//end-here
});



// input: {"name" : "RajiniKanth", "age" : 25, "hasPets" : true}











