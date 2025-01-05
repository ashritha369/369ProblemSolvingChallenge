// nums=[array];
//0's end
// maintain relative order
let moveZeroes = function (nums) {
  let tempZero;
  let j = 0;
  let zeroCount = 0;
  let initialZeroCount = nums.filter((num) => num === 0).length;

  //   check if it is zero
  while (nums[j] === 0) {
    //first store in tempZero;
    tempZero = nums[j];
    // shift digits to left:
    for (let i = j; i < nums.length; i++) {
      nums[i] = nums[i + 1];
    }
    // after shifting you get this and at the end you put zero;
    nums[nums.length - 1] = tempZero;
    zeroCount++;
    if (zeroCount === initialZeroCount) {
      return;
    }
    //
  }
  //   if not zero move the pointer to next
  j++;
  return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
