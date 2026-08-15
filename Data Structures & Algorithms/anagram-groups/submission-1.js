class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];
        const temp = [...strs];
        const resMap = new Map();

        for (let i=0 ; i<temp.length ; i++){
            temp[i] = temp[i].split('').sort().join('');
            if (!resMap.has(temp[i])){
                resMap.set(temp[i],[strs[i]]);
            } else resMap.get(temp[i]).push(strs[i]);
        }

        return [...resMap.values()];
    }
}
