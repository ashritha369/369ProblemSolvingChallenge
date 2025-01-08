// nums=[array];
//0's end
// maintain relative order

// CORRECT WAY 1
// Right SOlution
let moveZeroess = function (nums) {
  let lastNonZeroIndex = 0;

  // Move all non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    // oh okay it is non zero
    if (nums[i] !== 0) {
      // nums[0],nums[1],nums[2]=nums[i](non zero elements)
      // they literally creating the array elements one by one
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
    //   nums=[1,3,12]
  }

  // Fill the rest of the array with zeroes
  // i=3 (previously incremented lastNonZeoIndex value-see above line )
  // nums.length: 5
  // so from 3 index to 4th index(lessthan symbol), fill zeroes
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Test the function
let nums = [0, 1, 0, 3, 12];
moveZeroess(nums);

// Number of Other Ways
// CORRECT WAY 2
let moveZeroes = function (nums) {
  let count = 0; // Count of zeroes

  for (let i = 0; i < nums.length; ) {
    if (nums[i] === 0) {
      nums.splice(i, 1); // Remove the zero at index i
      count++; // Increment the zero count
    } else {
      i++; // Move to the next element only if no zero was removed
    }
  }

  // Add the counted zeroes to the end of the array
  for (let i = 0; i < count; i++) {
    nums.push(0); // Push zeroes at the end
  }
};

// Test the function
let numss = [0, 1, 0, 3, 12];
moveZeroes(nums);

// CORRECT WAY 3

var move0s = function (nums) {
  let j = 0; // Pointer to track the position of the next non-zero element

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap the non-zero element with the position at pointer `j`
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++; // Increment the pointer
    }
  }

  return nums;
};

// Test Cases
console.log(move0s([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
