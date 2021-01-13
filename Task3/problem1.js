var obj = { name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
 let keys = Object.keys(obj);
 let outArray = [];
 for(var i in keys)
    outArray.push(obj[keys[i]]);
 console.log(outArray);

}

printAllValues(obj);