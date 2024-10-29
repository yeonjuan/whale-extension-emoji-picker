const fs = require("fs");
const path = require("path");

const origin = JSON.parse(
  fs.readFileSync(
    path.resolve(process.cwd(), "./src/emoji-origin.json"),
    "utf-8",
  ),
);

const words = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./words.json"), "utf-8"),
);

const categories = {
  "Smileys & Emotion": 1,
  "People & Body": 2,
  Component: 3,
  "Animals & Nature": 3,
  "Food & Drink": 4,
  "Travel & Places": 5,
  Activities: 6,
  Objects: 7,
  Symbols: 8,
  Flags: 9,
};

origin.forEach((item) => {
  item.name = {
    en: item.name,
    ko: item.name
      .split(/[: \-]/)
      .filter(Boolean)
      .map((e) => {
        if (/[0-9]/.test(e)) {
          return e;
        }
        return words[e.toLowerCase()];
      })
      .filter(Boolean)
      .join(" "),
  };
  delete item.subgroup;
  delete item.category;
  delete item.codes;
  if (item.group === "Component") {
    item.delete = true;
  }

  item.group = categories[item.group];
  item.gr = item.group;
  delete item.group;
  item.ch = item.char;
  delete item.char;
  item.n = item.name;
  delete item.name;
});

fs.writeFileSync(
  "last.json",
  JSON.stringify(
    origin.filter((origin) => !origin.delete),
    null,
    2,
  ),
);
