function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return marge(mergeSort(left), mergeSort(right));
}
function marge(left, right) {
    let res = [];
    let i = 0;
    let j = 0;
    let m = left.length;
    let n = right.length;
    while (i < m && j < n) {
        if (left[i] < right[j]) res.push(left[i++]);
        else res.push(right[j++]);
    }
    while (i < m) res.push(left[i++]);
    while (j < n) res.push(right[j++]);
    return res;
}

let ans = mergeSort([9, 3, 4, 8, 5, 6, 7]);
console.log(ans);