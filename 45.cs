public class Solution {
    public int Jump(int[] nums) {
        int jumps = 0;
        int farthest = 0;
        int end = 0;

        for (int i = 0; i < nums.Length - 1; i++) {
            farthest = Math.Max(farthest, i + nums[i]);

            if (i == end) {
                jumps++;
                end = farthest;
            }
        }

        return jumps;
    }
}
