// functoin to reverse the stack

function reverseStck(stack, n, i, arr) {
    if (n === i) return arr;
    let fistelement = stack.shift();
    return reverseStck(stack, n, i + 1, [fistelement, ...arr]);
}

let ans = reverseStck([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 0, []);
console.log(ans);