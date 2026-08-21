class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        let res = Array(t.length).fill(0);
        let stack = [];

        for (let i=0 ; i<t.length ; i++){
            let temp = t[i];

            while (stack.length>0 && temp>stack[stack.length-1][0]){
                let [stackT, stackIdx] = stack.pop();
                res[stackIdx] = i-stackIdx;
            }
            stack.push([t[i],i]);
        }

        return res;
    }
}
