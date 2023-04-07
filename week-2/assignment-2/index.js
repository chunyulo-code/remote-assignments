//Declare a function called -- "max"
function calculate(args) {
  const { n1, n2, op } = args;
  if (!isNaN(n1) && !isNaN(n2)) {
    if (op == "+") return n1 + n2;
    else if (op == "-") return n1 - n2;
    else return "Not supported";
  } else return "n1 and n2 supposed to be numbers";
}

//Testing arrays
const obj_1 = { n1: 2, n2: 3, op: "+" };
const obj_2 = { n1: 5, n2: 2, op: "-" };
const obj_3 = { n1: 1, n2: 6, op: "x" };

//Tests
console.log(calculate(obj_1)); //output: 5
console.log(calculate(obj_2)); //output: 3
console.log(calculate(obj_3)); //output: Not supported
