import { readFile } from "fs";

readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

for (let i = 0; i <= 10000000000; i++) {
  if (i === 10000000000) {
    console.log("reached end");
  }
}
