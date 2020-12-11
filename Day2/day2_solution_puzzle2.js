const fs = require("fs");
// Get the data as an array from the file
const data = fs
  .readFileSync("day2_input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => x);

// console.log(data);

const filtered = data.map((line) => {
  let i = 0;
  let firstposition = "";
  let secondposition = "";
  let string = "";
  let character_to_be_checked = "";
  while (line[i] !== "-") {
    //console.log(i, line[i]);
    firstposition = firstposition.concat(line[i]);
    i++;
  }
  //console.log(i, line[i]);
  i++;
  //   console.log(i, line[i]);
  while (line[i] !== " ") {
    //console.log(i, line[i]);
    secondposition = secondposition.concat(line[i]);
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
  //console.log("low", firstposition);
  return {
    firstposition: parseInt(firstposition),
    secondposition: parseInt(secondposition),
    string: string,
    character_to_be_checked: character_to_be_checked,
  };
});

// console.log(filtered);

let count = 0;

filtered.forEach(
  ({ firstposition, secondposition, string, character_to_be_checked }) => {
    if (
      (!(string[firstposition - 1] === character_to_be_checked) &&
        string[secondposition - 1] === character_to_be_checked) ||
      (string[firstposition - 1] === character_to_be_checked &&
        !(string[secondposition - 1] === character_to_be_checked))
    ) {
      count++;
    }
  }
);

console.log("total correct passwords", count);
