/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

*/

const findDifference = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let onlyInNums1 = [...set1].filter((num) => !set2.has(num));
    let onlyInNums2 = [...set2].filter((num) => !set1.has(num));

    return [onlyInNums1, onlyInNums2];
};
