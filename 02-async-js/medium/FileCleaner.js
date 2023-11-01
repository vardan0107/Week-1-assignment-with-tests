var fs = require("fs");

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;

  const tranformedData = data
    .split(" ")
    .filter((e) => e.trim())
    .join(" ");

  fs.writeFile("./file.txt", tranformedData, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
