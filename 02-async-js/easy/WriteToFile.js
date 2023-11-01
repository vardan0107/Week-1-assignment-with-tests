import { writeFile } from "fs";

writeFile("message.txt", "wrote to a file", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

for (let i = 0; i <= 1000; i++) {
  if (i === 1000) {
    //this will be logged first every time as writeFile is an async operation
    //and after completion callback funtion goes to a different queue(calleback queue),
    //waits for the JS thread to get freed up and event loop will monitor call stack and
    //the callback queue then put cb function to callstack whenever it gets freed up
    console.log("reached end");
  }
}
