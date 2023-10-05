/*
 * Problem Description:
Given a sorted array of integers nums and a target integer target, find the smallest number in the array that is greater than or equal to target. This number is called the ceiling of the target.

Problem Explanation:
You are given a sorted array of integers. The array is already sorted in ascending order. Your task is to find the smallest number in the array that is greater than or equal to a given target number. If there is no such number, you need to return a special value to indicate that the target is greater than all elements in the array.
 */

function ceilingValu(n, arr, target) {
    arr.sort((a, b) => a - b);
    let l = 0;
    let r = n - 1;
    let res = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) res = arr[mid];
        else if (arr[mid] > target) {
            res = arr[mid];
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return res;
}

let ans = ceilingValu(4, [1, 4, 4, 5], 3);
console.log(ans);