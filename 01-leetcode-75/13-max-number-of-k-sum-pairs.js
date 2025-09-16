function maxOperations(nums, k) {
  const map = new Map();
  let count = 0;

  for (let num of nums) {
    let complement = k - num;

    if (map.has(complement) && map.get(complement) > 0) {
      count++;
      map.set(complement, map.get(complement) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  return count;
}
