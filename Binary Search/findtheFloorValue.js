/**
 * Given a sorted array of integers and a target value, find the largest element in the array that is
 *  less than or equal to the target value. This element is called the "floor" value for the given target.
 */


function floorValue(n, arr, target) {
    arr.sort((a, b) => a - b);
    let l = 0, r = n - 1;
    let res = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) {
            res = arr[mid];
            break;  // Exit the loop if target is found
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
        else {
            res = arr[mid];
            l = mid + 1;
        }
    }
    return res;  // Return the floor value after the loop
}

let ans = floorValue(5, [1, 2, 3, 4, 5], -7);
console.log(ans);  // Output: 5
