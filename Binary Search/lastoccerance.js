`Given an array of N elements, print the elements in the same relative order as given by removing all the occurrences of elements except the last occurrence. `

function lastOccurrence(n, arr, target) {
    arr.sort((a, b) => a - b);
    let l = 0;
    let r = n - 1;
    let res = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) {
            res = mid;
            l = mid + 1;
        }
        else if (arr[mid] > target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return res;
}

let ans = lastOccurrence(5,[5,5,5,5,5],6);
console.log(ans);