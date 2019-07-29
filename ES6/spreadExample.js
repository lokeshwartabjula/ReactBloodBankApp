
function printName(firstName, lastName)
{
    return (firstName+lastName).toUpperCase();
}

let name = ["ramesh","kumar"];

let result = printName(...name);
let result2 = printName(name[0],name[1]);

console.log(result);
console.log(result2);

console.log(printName(...name));