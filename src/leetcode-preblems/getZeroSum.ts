function checkArr(arr: Array<number>, index: number): boolean {
    let num = arr[index];
    for (let i = 0; i < [num, -num].length; i++) {
        let array = arr;
        array[index] = [num, -num][i];
        if (arr.length > index + 1) { 
            if (checkArr(array, index + 1)) return true 
        }
        else {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            if (sum === 0) {
                return true;
            }
        };
    }
    return false
}

let arr1 = [-1, 4 ,3, -1, 4, 3, 10, 10]
console.log(checkArr(arr1, 0))
