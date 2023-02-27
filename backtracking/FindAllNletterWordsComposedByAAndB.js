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

function letterCombination(n) {
    const res = [];
    DFS(n, res, 0, []);
    return res;
}

const output = letterCombination(2);
console.log(output.toString())