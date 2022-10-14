function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]]
    let output: number[][] = [];
    output.push([1]);
    for (let i = 1; i < numRows; i++) {
        let row: number[] = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) row.push(1);
            else {
                row.push(output[i - 1][j - 1] + output[i - 1][j])
            }
        }
        output.push(row)
    }
    return output
};