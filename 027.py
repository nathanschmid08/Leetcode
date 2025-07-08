class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0  # Pointer for the new length

        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]  # Copy non-val element forward
                k += 1  # Move to next position

        return k  # Length of array without val
