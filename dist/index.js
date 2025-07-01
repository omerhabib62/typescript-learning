"use strict";
function diagonalDifference(matrix) {
    const n = matrix.length;
    let primarySum = 0;
    let secondarySum = 0;
    for (let i = 0; i < n; i++) {
        primarySum += matrix[i][i];
        secondarySum += matrix[i][n - 1 - i];
    }
    return Math.abs(primarySum - secondarySum);
}
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(diagonalDifference(matrix)); //
//# sourceMappingURL=index.js.map