var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;  // Slow pointer for unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1; // Length of unique elements
};
