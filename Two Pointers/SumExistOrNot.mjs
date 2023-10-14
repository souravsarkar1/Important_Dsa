// write a program to chek the sum is exist or not in the array

function sumExistOrNotInArray(arr, n, target) {
    arr = arr.sort((a, b) => a - b);
    let l = 0;
    let r = n - 1;
    while (l < r) {
        if (arr[l] + arr[r] === target) return true;
        else if (arr[l] + arr[r] > target) r--;
        else l++;
    }
    return false;
}

let ans = sumExistOrNotInArray([1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8], [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8].length, 100);
console.log(ans);