const canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let len = flowerbed.length;

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 0) {
      let emptyLeft = i === 0 || flowerbed[i - 1] === 0;
      let emptyRight = i === lan - 1 || flowerbed[i + 1] === 0;

      if (emptyLeft && emptyRight) {
        flowerbed[i] = 1;
        count++;
        if (count >= n) return true;
      }
    }
  }
  return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
