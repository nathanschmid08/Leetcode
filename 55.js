/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // Can't reach this position
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
};
