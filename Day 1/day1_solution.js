/*

 In order to complete the first challenge comment the code in the 

 */

// Import the datafile
const fs = require("fs");
// Get the data as an array from the file
const data = fs
  .readFileSync("day1.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));

// To view the data
console.log(data);
// let flag = 0;
let firstnum = 0;
let secondnum = 0;
let thirdnum = 0; //NOTE: Comment this line for the first challenge.
// let iterator = 0;

for (let i = 0; i < data.length - 2; i++) {
  let sum = 2020 - data[i];
  for (let j = i + 1; j < data.length - 1; j++) {
    if (data.includes(sum - data[j])) {
      firstnum = data[i];
      secondnum = data[j];
      thirdnum = sum - data[j];
      break;
    }
  }
}

/*

while (!flag === true) {
  if (data.includes(2020 - data[iterator])) {
    flag = 1;
    firstnum = data[iterator];
    secondnum = 2020 - data[iterator];
  }
  i++;
}

*/

console.log(firstnum, secondnum, firstnum + secondnum);
console.log(firstnum * secondnum);

// console.log(firstnum, secondnum, thirdnum, firstnum + secondnum + thirdnum);
// console.log(firstnum * secondnum * thirdnum);
