function findMin(nums: number[]): number {

    let n = nums.length - 1;

    if (nums[0] < nums[n]) return nums[0];
    if (n === 0) return nums[0];

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[i + 1]) {

            return nums[i + 1]
        }
    }

    return nums[0]
};

console.log(findMin([3, 2]))