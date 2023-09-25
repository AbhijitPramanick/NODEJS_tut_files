// ***** LECTURE 4 : READING INPUT AND WRITING OUTPUT *****
// https://youtu.be/VP55JN3y6uI?si=cf542niEDIf26joE

// console.log("Hello world, this is Node JS");
// console.log("Hello world, this is my first Node JS App");

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Please enter your name: ", (firstName) => {
//   console.log("The entered name is " + firstName);
//   rl.close();
// });
// rl.on("close", () => {
//   console.log("Interface closed");
//   process.exit(0);
// });

// --------------------------------------
// ***** LECTURE 5 : READING AND WRITING TO A FILE *****

//Reading from a file
const readline = require("readline");
const fs = require("fs");
const textIn = fs.readFileSync("./files/input.txt", "utf-8");
console.log(textIn);

//Writing to a file
