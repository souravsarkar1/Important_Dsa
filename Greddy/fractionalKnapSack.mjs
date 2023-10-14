function fractioanlKnapSack(capacity, n, weights, values) {
    let ratios = [];
    for (let i = 0; i < n; i++) {
        ratios[i] = { index: i, ratio: (values[i] / weights[i]) };
    }
    ratios.sort((a, b) => a.ratio - b.ratio);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let index = ratios[i].index;
        if (weights[index] <= capacity) {
            ans += values[index];
            capacity -= weights[index];
        }
        else {
            ans += ratios[i].ratio * capacity;
        }
    }
    console.log(ans);
}
let input = `50 
3
60 100 120 
10 20 30`

input = input.split('\n');

let capacity = +input[0];
let n = +input[1];
let value = input[2].split(' ').map(Number);
let weights = input[3].split(' ').map(Number);
fractioanlKnapSack(capacity, n,weights, value);