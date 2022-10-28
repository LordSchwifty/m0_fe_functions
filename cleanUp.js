// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion () {
 console.log("Hello, what is your name?");
 console.log("My name is Tom Doder");
}

nameQuestion();
// I changed the code to add another ```console.log``` that gives the answer to the questio
// 

// EX 2:
function addThreeNums(num1, num2, num3) {
var sum = num1 + num2 + num3; 
return sum;
}
  
 console.log(addThreeNums(1, 2, 3));
 console.log(addThreeNums(4, 2, 7));
// I changed the number element to num1,num2,num3 to help identify the numbers better
// and i changed the execution code to "return sum" and then i changed the final part to
// "console.log" statement

// EX 3:
function makeFreshPesto() {
 console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  
 console.log("Pulse basil and pine nuts");
  
 console.log("Add garlic and cheeses");
  
 console.log("Slowly pour in oil");
  
 console.log("Season");
}

makeFreshPesto();
// Part of the function was meant for the next example so I removed it. I also
// noticed that the syntax for "function" was incorrect so I changed it. I also
// reformated the function.

//  EX 4:

function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;
 console.log(`the average is: ${avg}`);
}
       
average(2,3);
     //ordered the code. Put the curly brackets in the correct places. Took the period off
//the end of the "console.log statement" and rewrote the last statement.