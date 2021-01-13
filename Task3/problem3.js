var obj = {
    name: 'ISRO', 
    age: 35, 
    role: 'Scientist'
    
};
convertObjectToList(obj);

function convertObjectToList(obj) {
 // your code here
 var outArray=[];
for(var i in obj)
    outArray.push([i , obj[i]]);
    
console.log(outArray)
 
}