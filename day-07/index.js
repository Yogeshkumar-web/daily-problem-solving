const reduce = (nums, fn, init) => {
  let val = init;

  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

const nums = [1, 2, 3, 4];

const fn = (a, b) => a + b;

const init = 0;

console.log(reduce(nums, fn, init));
