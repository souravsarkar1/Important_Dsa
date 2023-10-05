// implementation of binary search 

function binarySearch(n, arr, target) {
    arr = arr.sort((a, b) => a - b);
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) return mid + 1;
        else if (arr[mid] > target) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
}


let ans = binarySearch(4, [1, 2, 3, 4], 4);
console.log(ans);