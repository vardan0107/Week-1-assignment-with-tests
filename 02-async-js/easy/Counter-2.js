let i = 0;

function executor() {
  console.log(i);
  i++;
  timeout();
}
function timeout() {
  setTimeout(executor, 1000);
}

timeout();
