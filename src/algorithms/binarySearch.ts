

export function BinarySearch(arr: Array<number>, num: number): number { // returns index of found value
    let start = 0;
    let end = arr.length-1;
    let middle = 0;
    
    while(start <= end){
        middle = Math.floor((start + end)/2)
        if (num === arr[middle]) return middle;
        num > arr[middle]? start = middle + 1:  end = middle - 1;
    }

    return -1
}