var arr= [
    [
        ['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']
        ], 
    [
        ['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']
        ]
    ];


function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 for(let i in arr){
     let tempObject = {};
     for(j in arr[i]){
         tempObject[arr[i][j][0]] = arr[i][j][1];
     }
     tranformEmployeeList.push(tempObject);
        
 }
 //Your code
 
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));