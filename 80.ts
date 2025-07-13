function removeDuplicates(nums: number[]): number {
    let i = 0;  // write index

    for (let num of nums) {
        if (i < 2 || num !== nums[i - 2]) {
            nums[i] = num;
            i++;
        }
    }

    return i;
}
