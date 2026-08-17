class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(n, t) {
        for (let i=0 ; i<n.length ; i++){
            let tmp = t - n[i];
            let l = i+1;
            let r = n.length -1;
            while (l<= r){
                let mid = l + Math.floor((r - l) / 2);

                if (tmp === n[mid]) return [i+1, mid+1];
                else if (tmp > n[mid]) l = mid+1;
                else if (tmp < n[mid]) r = mid-1;
            }
        }
    }
}