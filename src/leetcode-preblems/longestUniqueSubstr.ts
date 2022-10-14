function lengthOfLongestSubstring1(s: string): number {
    let longestSubstr = "";
    let substr = "";
    for (let i = 0; i < s.length; i++) {
        if (substr.includes(s.charAt(i))) {
            substr = substr.split(s.charAt(i))[1];
        }
        substr += s.charAt(i);
        console.log(substr)
        if (substr.length > longestSubstr.length) longestSubstr = substr;
    }
    return longestSubstr.length
};

// Map 

function lengthOfLongestSubstring2(s: string): number {
    let left = 0;
    let right = 0;
    let length = 0;
    let myMap = new Map<string, number>();
    
    while(right <  s.length){
        let char = s.charAt(right);

        if(myMap.has(char)) {
            left = Math.max(myMap.get(char)! + 1, left)
        }

        myMap.set(char, right)

        length = Math.max(length, right - left + 1)
        
        right++;
    }
    
    return length
};