`Given a sorted array arr[] with possibly duplicate elements, the task is to find indexes of the first and last occurrences of an element x in the given array. `


function firstoccurrence(n, arr, target) {
    arr.sort((a, b) => a - b);
    let l = 0;
    let r = n - 1;
    let res = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            res = mid;
            r = mid - 1;
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return res;
}

let ans = firstoccurrence(4,[1,2,3,4],4);
console.log(ans);