/*
JavaScript Timers”, functions like setTimeout and setInterval are
 not part of the ECMAScript specs or any JavaScript engine implementations. 
 Timer functions are implemented by browsers and their implementations 
 will be different among different browsers. Timers are also 
 implemented natively by the Node.js runtime itself.

In Node, timers are part of the global object, 
which behaves similarly to the browser’s Window interface. 

*/


// example1.js
//with the use of anonymous Arrow function
setTimeout(
  () => {
    console.log('Hello after 4 seconds');
  },
  4 * 1000
);

//With the Use of inline function;
const func = () => {
  console.log('Hello after 4 seconds');
};
setTimeout(func, 4 * 1000);


//***********//Passing Arguments:
// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)

// example2.js
const rocks = who => {
  console.log(who + ' rocks');
};
setTimeout(rocks, 2 * 1000, 'Node.js');


/*
Timers Challenge #1
Using what you learned so far about setTimeout, print the following 2 messages after their corresponding delays.

Print the message “Hello after 4 seconds” after 4 seconds
Print the message “Hello after 8 seconds” after 8 seconds.
Constraints:
You can define only a single function in your solution, which includes inline functions. This means many setTimeout calls will have to use the exact same function.

Solution
Here’s how I’d solve this challenge:*/

// solution1.js
const theOneFunc = delay => {
  console.log('Hello after ' + delay + ' seconds');
};
setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);


/*
Repeating the execution of a function
What if I asked you to print a message every 4 seconds, forever?

While you can put setTimeout in a loop, the timers API offers the setInterval function as well, which would accomplish the requirement of doing something forever.

Here’s an example of setInterval:*/

// example3.js
setInterval(
  () => console.log('Hello every 3 seconds'),
  3000
);
// This example will print its message every 3 seconds. 
// Executing example3.js with the node command will make 
// Node print this message forever, until you kill the process (with CTRL+C).


/*
Cancelling Timers
Because calling a timer function schedules an action, that action can also be cancelled before it gets executed.

A call to setTimeout returns a timer “ID” and you can use that timer ID with a clearTimeout call to cancel that timer. Here’s an example:*/

// example4.js
const timerId = setTimeout(
  () => console.log('You will not see this one!'),
  0
);
clearTimeout(timerId);
// This simple timer is supposed to fire after 0 ms (making it immediate), 
// but it will not because we are capturing the timerId value 
// and canceling it right after with a clearTimeout call.