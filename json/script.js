 //The JSON (JavaScript Object Notation) is a general format to represent values and objects.
 // JSON for data exchange when the client uses JavaScript and
 //  the server is written on Ruby/PHP/Java/Whatever.

//  JavaScript provides methods:
// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

// In short:
// JSON only saves simple data. It skips anything that can’t be written as plain text, like functions, symbols, or undefined.
// It skips a few things:
// Functions
// If your object has a function (like a method), JSON.stringify ignores it — because JSON is just for data, not actions.
// Symbols
// If your object uses special keys called symbols, they get skipped — because JSON only understands regular string keys.
// Undefined values
// If a property in your object is undefined, JSON skips that too — it’s like pretending it isn’t there.
let user = {
  sayHi() { // ignored function
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

alert( JSON.stringify(user) ); // {} (empty object)

//The great thing is that nested objects are supported and converted automatically.


//*******JSON.PARSE */
// To decode a JSON-string, we need another method named JSON.parse.
// The syntax:
// let value = JSON.parse(str[, reviver]);
// str
// JSON-string to parse.
// reviver
// Optional function(key,value) that will be called for each (key, value) pair and can transform the value.
// For instance:

// stringified array
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1


// Using reviver:
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);
alert( meetup.date.getDate() ); // Error!
// Whoops! An error!

// The value of meetup.date is a string, not a Date object. How could JSON.parse know that it should transform that string into a Date?
// Let’s pass to JSON.parse the reviving function as the second argument, that returns all values “as is”, but date will become a Date:

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
alert( meetup.date.getDate() ); // now works!

// Summary
// JSON is a data format that has its own independent standard and libraries for most programming languages.
// JSON supports plain objects, arrays, strings, numbers, booleans, and null.
// JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
// Both methods support transformer functions for smart reading/writing.
// If an object has toJSON (in date()), then it is called by JSON.stringify.

//new line added(testing);