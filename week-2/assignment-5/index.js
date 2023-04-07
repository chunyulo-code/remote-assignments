function twoSum(nums, target) {
  let foundIndex = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] == target) {
        foundIndex.push(i, j);
        return foundIndex;
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); //Array [ 0, 1 ]
console.log(twoSum([11, 8, 13, 5], 13)); //Array [ 1, 3 ]

// demoArray_1 =[2, 7, 11, 15], 9
// demoArray_2 =[5, 11, 13, 8], 21
