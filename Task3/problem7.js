var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}

function assertObjectsEqual(actual, expected, testName){
 // your code here
 let actualStr = JSON.stringify(actual);
 let expectedStr = JSON.stringify(expected);
 
 if(actualStr == expectedStr){
     console.log("Passed");
 } else {
     console.log('Failed ' + testName + ' Expected' + expected + ', but got '+ actual);
 }
}

assertObjectsEqual(actual,expected, 'detects that two objects are equal');