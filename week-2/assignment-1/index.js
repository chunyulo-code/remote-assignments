//Declare a function called -- "max"
function max(numbers) {
  let maxNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) maxNum = numbers[i];
  }
  return maxNum;
}

//Testing arrays
const arr_1 = [1, 2, 4, 5];
const arr_2 = [5, 2, 7, 1, 6];
const arr_3 = [-3, -7, -100, -21, -0.5];

//Tests
console.log(max(arr_1)); //output: 5
console.log(max(arr_2)); //output: 7
console.log(max(arr_3)); //output: -0.5
