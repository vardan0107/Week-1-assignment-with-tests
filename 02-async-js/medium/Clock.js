let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();

setInterval(function () {
  const formattedTime = `${String(hour).padStart(2, "0")}:${String(
    minute
  ).padStart(2, "0")}::${String(second).padStart(2, "0")}`;

  const format2 = `${String(hour % 12).padStart(2, "0")}:${String(
    minute
  ).padStart(2, "0")}::${String(second).padStart(2, "0")} ${
    hour > 12 ? "PM" : "AM"
  }`;

  console.log(formattedTime);
  console.log(format2);
  if (second < 59) {
    second++;
  } else if (second === 59) {
    second = 0;
    minute++;
  }

  if (minute === 59) {
    minute = 0;
    hour++;
  }

  if (hour === 24) {
    hour = 0;
  }
}, 1000);
