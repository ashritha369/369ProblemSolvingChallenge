The provided code is an efficient implementation of moving all zeroes in an array to the end while maintaining the relative order of the non-zero elements. Let's break it down step by step:

---

### **Code Walkthrough**

```
var moveZeroes = function (nums) {
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
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
console.log(moveZeroes([1, 0, 2, 0, 3])); // Output: [1, 2, 3, 0, 0]
console.log(moveZeroes([0, 0, 1]));        // Output: [1, 0, 0]

```

#### 1. **Pointer `j`:**

- `j` is initialized to `0` and represents the position where the next non-zero element should be placed.

#### 2. **Iterating Through the Array:**

- A `for` loop goes through each element in the array (`nums[i]`).
- For every non-zero element:
  - It swaps `nums[i]` with the element at position `j`.
  - Then, `j` is incremented to move the pointer for the next non-zero position.

#### 3. **Swapping Elements:**

- The swapping ensures that non-zero elements are moved to the front of the array without disturbing their order.
- Zeroes naturally "fall behind" as the loop progresses.

#### 4. **Return the Array:**

- The array `nums` is modified in place, and the rearranged array is returned.

---

### **Key Example**

#### Input:

```javascript
nums = [0, 1, 0, 3, 12];
```

#### Execution Steps:

1. **Initial State:**

   - `j = 0`
   - `nums = [0, 1, 0, 3, 12]`

2. **Iteration 1 (`i = 0`):**

   - `nums[i] = 0`, so no action is taken.
   - `j` remains `0`.

3. **Iteration 2 (`i = 1`):**

   - `nums[i] = 1` (non-zero).
   - Swap `nums[j]` and `nums[i]` → `[1, 0, 0, 3, 12]`.
   - Increment `j` → `j = 1`.

4. **Iteration 3 (`i = 2`):**

   - `nums[i] = 0`, so no action is taken.
   - `j` remains `1`.

5. **Iteration 4 (`i = 3`):**

   - `nums[i] = 3` (non-zero).
   - Swap `nums[j]` and `nums[i]` → `[1, 3, 0, 0, 12]`.
   - Increment `j` → `j = 2`.

6. **Iteration 5 (`i = 4`):**
   - `nums[i] = 12` (non-zero).
   - Swap `nums[j]` and `nums[i]` → `[1, 3, 12, 0, 0]`.
   - Increment `j` → `j = 3`.

#### Final Output:

```javascript
[1, 3, 12, 0, 0];
```

---

### **Why Is This Efficient?**

- **Single Pass:** The loop only iterates through the array once, making it \(O(n)\) in time complexity.
- **In-Place Operation:** No additional memory is used aside from a few variables, so the space complexity is \(O(1)\).

---

### **Other Test Cases:**

1. **Test Case 1:**

   ```javascript
   nums = [1, 0, 2, 0, 3];
   ```

   Execution Steps:

   - After processing: `[1, 2, 3, 0, 0]`.

2. **Test Case 2:**
   ```javascript
   nums = [0, 0, 1];
   ```
   Execution Steps:
   - After processing: `[1, 0, 0]`.

---

This implementation is concise, efficient, and commonly used in competitive programming or interviews for such problems.

Here's a structured **way of thinking** to arrive at the implementation you provided:

---

### **Goal:**

Move all zeroes to the end of the array while maintaining the relative order of non-zero elements.

---

### **Step-by-Step Thought Process:**

#### 1. **Recognize the Problem:**

- Zeroes need to move to the end.
- Non-zero elements must maintain their relative positions.

---

#### 2. **Key Observations:**

- You can achieve the goal in **one pass** if you use a pointer (`j`) to track the position of the next non-zero element.
- Swapping non-zero elements ensures that the non-zero elements are moved to the beginning in their original order.
- Zeroes will automatically "fall behind" without explicitly moving them.

---

#### 3. **Plan a Solution:**

- Use two variables:
  - `i` to iterate through the array.
  - `j` to track the position where the next non-zero element should go.
- When a non-zero element is found:
  - **Swap** it with the element at position `j` (even if `i === j`, the swap still works without side effects).
  - Increment `j` to prepare for the next non-zero element.

---

#### 4. **Implementation Logic:**

- Start with `j = 0`, meaning the first position where the next non-zero element should go is at index `0`.
- Loop through the array using `i`.
- For each `nums[i]`:
  - If it's non-zero, swap it with the element at position `j`.
  - Increment `j` after the swap.
- By the end of the loop:
  - All non-zero elements will be in their correct positions at the front.
  - All remaining positions (from `j` onward) will contain zeroes.

---

### **Core Insights in This Thought Process:**

1. **Use a Pointer (`j`) to Track Progress:**

   - You don't need to explicitly "move" zeroes.
   - Instead, focus on placing non-zero elements at the right positions.

2. **Leverage Swapping:**

   - Swapping ensures non-zero elements are moved to the front in a single pass.
   - Zeroes naturally end up at the back.

3. **Optimize with Single Pass:**
   - Avoid multiple loops or additional memory.
   - Use the input array itself for in-place updates.

---

This thought process focuses on clarity and efficiency while maintaining simplicity. It’s a pattern often seen in array manipulation problems and can be extended to other scenarios like partitioning arrays.
