class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p1 = m - 1;         // Pointer to the end of nums1's meaningful part
        int p2 = n - 1;         // Pointer to the end of nums2
        int p = m + n - 1;      // Pointer to the end of nums1 (full size)

        // Merge in reverse order
        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        // If there are leftover elements in nums2 (nums1 leftovers are already in place)
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    }
};
