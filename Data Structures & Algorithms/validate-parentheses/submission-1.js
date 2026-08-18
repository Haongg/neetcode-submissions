class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack  = [];
        for (let b of s) {
            if (['[','{','('].includes(b)){
                stack.push(b);
            }
            else if (b === ')' && stack.pop() === '('){
                continue;
            }
            else if (b === '}' && stack.pop() === '{'){
                continue;
            }
            else if (b === ']' && stack.pop() === '['){
                continue;
            }
            else return false;
        }
        console.log(stack);
        if (stack.length !== 0) return false;

        return true;
    }
}
