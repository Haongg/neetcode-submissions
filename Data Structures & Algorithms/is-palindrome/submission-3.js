class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.toLowerCase().match(/[a-z0-9]/g) != null) {
            s = s.toLowerCase().match(/[a-z0-9]/g).join('');
            }
        else return true;

        let left = 0;
        let right = s.length -1;

        while (left < right){
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
