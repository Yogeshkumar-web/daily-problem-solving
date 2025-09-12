function moveZeroes(nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  while (pos < nums.length) {
    nums[pos] = 0;
    pos++;
  }
}

let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

let nums2 = [0];
moveZeroes(nums2);
console.log(nums2);
