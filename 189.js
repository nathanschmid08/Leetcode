/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length; // handle cases where k > nums.length

    // Helper to reverse part of the array
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverse(0, nums.length - 1);        // Reverse whole array
    reverse(0, k - 1);                  // Reverse first k elements
    reverse(k, nums.length - 1);        // Reverse the rest
};
