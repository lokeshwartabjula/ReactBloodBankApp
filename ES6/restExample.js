function sumNumber(...numbers)
{
    let total = 0;

    //Rest converts the paramesters into an array and passing it into a method
    console.log(numbers[0]);
    console.log(numbers.length);

    
    numbers.forEach(eachNumber => total+=eachNumber);
    return total;
}

let sumOfOneToFive = sumNumber(1,2,3,4,5);
console.log(sumOfOneToFive);

let sumOfEightToTen = sumNumber(8,9,10);
console.log(sumOfEightToTen);