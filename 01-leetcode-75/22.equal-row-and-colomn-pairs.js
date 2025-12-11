// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal. A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

function equalPairs(grid) {
    const n = grid.length;
    const rowCount = new Map();

    // Choose a delimiter that won't conflict with number characters.
    const DELIM = "#"; // numbers don't contain '#', safe to join with

    // 1) Record frequency of each row representation
    for (let r = 0; r < n; r++) {
        // build key by joining elements
        const key = grid[r].join(DELIM);
        rowCount.set(key, (rowCount.get(key) || 0) + 1);
    }

    // 2) For each column build its key and add matching row frequency
    let ans = 0;
    for (let c = 0; c < n; c++) {
        const colArr = new Array(n);
        for (let r = 0; r < n; r++) {
            colArr[r] = grid[r][c];
        }
        const key = colArr.join(DELIM);
        if (rowCount.has(key)) {
            ans += rowCount.get(key);
        }
    }

    return ans;
}
