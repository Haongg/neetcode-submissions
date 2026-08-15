class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequentNums = new Map();

        for (let i=0 ; i<nums.length ; i++){
            frequentNums.set(nums[i], (frequentNums.get(nums[i]) || 0) + 1);
        }

        const res = [...frequentNums.entries()].sort((a,b) => b[1] - a[1]);

        return res.slice(0,k).map(items => items[0]);
    }
}
