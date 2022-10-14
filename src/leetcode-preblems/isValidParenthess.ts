function isValid(s: string): boolean {
    let arr = ["[]", "{}", "()"];
    let length = s.length;
    let substr = "";
    let deleted = new Boolean;
    for (let i = 0; i < length; i += 2) {
        deleted = false;
        for (let j = 0; j < s.length; j++) {
            substr = s.charAt(j) + s.charAt(j + 1);
            if (arr.includes(substr)) {
                s = s.slice(0, j) + s.slice(j + 2, s.length);
                deleted = true;
                break;
            }
        }
        if (!deleted) return false;
    }
    return true
};

console.log(isValid("[[{}({{}({[]})})]]"))

// class Solution {
//     public boolean isValid(String s) {
//         if(s.length() % 2 != 0) return false;
        
//         Stack<Character> stack = new Stack();
//         for(char c: s.toCharArray()) {
//             if(c == ')' && !stack.isEmpty() && stack.peek() == '(') {
//                 stack.pop();
//             }else if(c == '}' && !stack.isEmpty() && stack.peek() == '{') {
//                 stack.pop();
//             }else if(c == ']' && !stack.isEmpty() && stack.peek() == '[') {
//                 stack.pop();
//             }else{
//                 stack.push(c);
//             }
//         }
//         return stack.isEmpty();
//     }
// }