/**
 * @param n {number}
 * @param res {string[]}
 * @param index {number}
 * @param path {string[]}
 * @constructor
 */
const DFS = (n, res, index, path) => {
    if (index === n) {
        res.push(path.join(''));
        return;
    }
    ['a', 'b'].forEach(letter => {
        path.push(letter);
        DFS(n, res, index + 1, path);
        path.pop();
    })
}

/**
 * Find all n-letter words composed by 'a' and 'b',
 *
 * @param n {number}
 * @returns {string[]} them in a list of strings in lexicographical order.
 */
function letterCombination(n) {
    const res = [];
    DFS(n, res, 0, []);
    return res;
}

const output = letterCombination(2);
console.log(output.toString())