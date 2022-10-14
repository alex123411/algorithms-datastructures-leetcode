function productExceptSelf(nums: number[]): number[] {
    let output = new Array<number>(nums.length)
    let prefix = 1;
    let sufix = 1;

    let n = nums.length;

    output = nums.map(val => { return 1 })

    for (let i = 0; i < n; i++) {
        output[i] *= prefix;
        prefix *= nums[i];
        output[n-i-1] *= sufix;
        sufix *= nums[n-1-i];
    }

    return output
};

console.log(productExceptSelf([1, 2, 3, 4]))