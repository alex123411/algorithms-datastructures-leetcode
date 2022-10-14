function isPalindrome(x: number): boolean {
    console.log(x.toString().charAt(x.toString().length -1))
    for(let i = 0; i < x.toString().length; i++){
        if(x.toString().charAt(i) != x.toString().charAt(x.toString().length -i -1)) return false;
    }
    return true;
};

console.log(isPalindrome(1221))