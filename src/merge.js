const fs = require("fs");
const path = require("path");

const en = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./src/en.json"), "utf-8"),
);

const ko = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./src/ko.json"), "utf-8"),
);

const result = {};

en.forEach((ew, index) => {
  result[ew] = ko[index];
});

fs.writeFileSync("words.json", JSON.stringify(result, null, 2));
