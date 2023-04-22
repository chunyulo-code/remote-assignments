function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
}
// console.log("working");
delayedResult(4, 5, 3000, (result) => console.log(result));
delayedResult(-5, 10, 2000, (result) => alert(result));
