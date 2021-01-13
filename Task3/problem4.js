var array = ['GUVI','I','am', 'GEEK'];

function transformFirstAndLast(arr) {
 let newObject = {};
 newObject[arr[0]] = arr[arr.length-1];
 return newObject;
}

var objectFromArray = transformFirstAndLast(array);
console.log(objectFromArray);