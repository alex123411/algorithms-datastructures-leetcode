function maxSubArray(nums: number[]): number {
    let sum = 0;
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > res) res = sum;
        if (sum < 0) sum = 0;
    }
    return res;
};

let nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(maxSubArray(nums1))