const fs = require("fs");
// Get the data as an array from the file
const data = fs
  .readFileSync("day2_input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => x);

// console.log(data);

const filtered = data.map((line) => {
  let i = 0;
  let low_limit = "";
  let high_limit = "";
  let string = "";
  let character_to_be_checked = "";
  while (line[i] !== "-") {
    //console.log(i, line[i]);
    low_limit = low_limit.concat(line[i]);
    i++;
  }
  //console.log(i, line[i]);
  i++;
  //   console.log(i, line[i]);
  while (line[i] !== " ") {
    //console.log(i, line[i]);
    high_limit = high_limit.concat(line[i]);
    i++;
  }
  i++;
  character_to_be_checked = line[i];
  while (line[i] !== " ") {
    i++;
  }
  i++;
  while (i < line.length) {
    string = string.concat(line[i]);
    i++;
  }
  console.log(i);
  //console.log("low", low_limit);
  return {
    low_limit: parseInt(low_limit),
    high_limit: parseInt(high_limit),
    string: string,
    character_to_be_checked: character_to_be_checked,
  };
});

console.log(filtered);

let count = 0;

filtered.forEach(
  ({ low_limit, high_limit, string, character_to_be_checked }) => {
    console.log("checks", string.split(character_to_be_checked).length - 1);
    if (
      string.split(character_to_be_checked).length - 1 <= high_limit &&
      string.split(character_to_be_checked).length - 1 >= low_limit
    ) {
      //   console.log(string.split(character_to_be_checked).length);
      count++;
    }
  }
);

console.log("total correct passwords", count);
