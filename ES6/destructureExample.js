let [bookName,author] = ["Head first java","KathySierra"];//array destructured into strings

console.log(bookName);
console.log(author);

let [prefBook,...details] = ["Head First Java","Kathy Sierra","450.00","O'Riley"];
//destructured into string and array

console.log(prefBook);
console.log(details);

let [, ,...other] = ["Head First Java","Kathy Sierra","450.00","O'Riley"];
//the first two strings are ignored or excepted and other strings are stored in the other array

console.log(other);