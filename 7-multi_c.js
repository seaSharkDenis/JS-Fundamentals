const process = require("process");
const args = process.argv.slice(2);
if (isNaN(args[0])) {
  console.log("Missing number of occurences");
} else {
  let i = 0;
  while (i < parseInt(args[0])) {
    console.log("C is fun");
    i++;
  }
}