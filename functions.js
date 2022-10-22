// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting(first, last) {
    console.log(`Hi ${first} ${last} welcome to summercamp!`);
}
     printGreeting("Tom", "Doder");
     printGreeting("Susan","Boston");
     printGreeting("Steve", "Jobs");
// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function friends(first, second, third) {
    console.log(`My best friends are ${first}, ${second}, and ${third}`);
  }
  
  friends("Jack", "Max", "Will");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function payRange(name, min, max) {
    var range = max - min;
    console.log(`${name} has a pay range of ${range}`);
}
    payRange("Amazon", 45000, 250000);
// 4: Write a function that satifies the following interaction pattern:

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"


function kitchenStock(Coffee, Tortillas, Cheese, Salsa) {
    console.log(` ${Coffee} is stocked`);
    console.log(` ${Tortillas} - running LOW`);
    console.log(` ${Cheese} - OUT of stock!`);
    console.log(` ${Salsa} - running LOW`);
}
    kitchenStock("Coffee", "Tortillas", "Cheese", "Salsa");