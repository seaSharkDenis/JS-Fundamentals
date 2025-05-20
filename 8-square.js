const process = require("process");
const args = process.argv.slice(2);
if (isNaN(args[0]) || args[0] === undefined) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < parseInt(args[0])) {
    console.log("X".repeat(args[0]));
    i++;
  }
}