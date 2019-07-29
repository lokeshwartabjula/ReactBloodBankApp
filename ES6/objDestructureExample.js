//creating an object called project
let project = {"code":"CUB",'name':'e-passbook','manager':'Gokul'};

//taking a copy of the object project
//note that new reference is created by using object.assign
let clone =Object.assign(project);

console.log(clone);

let project2 = {"code":"CUB",'name':'e-passbook','manager':'Gokul'};
let manager = {"teamLead":"Ram"};

//to merge two objects into one use assign
let clone2 = Object.assign(project,manager);
console.log(clone2);
console.log(project2);


//Important
let employee = {"code":"CUB",'name':'e-passbook','manager':'Gokul','empName':'hello'};
let newEmployee ={};
newEmployee["empName"] = employee.empName;

console.log(newEmployee);
let newObj = {manager:{...employee}};

console.log(newObj);