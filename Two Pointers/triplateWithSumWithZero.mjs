// write a function to find all the triplate sum of zero

function triplateSum(arr, n) {
    arr = arr.sort((a, b) => a - b);
    let l, r;
    let obj = {};
    for (let i = 0; i < n - 2; i++) {
        l = i + 1;
        r = n - 1;
        while (l < r) {
            let triplet = arr[i] + arr[l] + arr[r];
            if (triplet === 0) {
                let tripletArr = [arr[i], arr[l], arr[r]].sort((a, b) => a - b);
                let key = tripletArr.join(',');
                obj[key] = 1;
                l++;
                r--;
            } else if (triplet > 0) {
                r--;
            } else {
                l++;
            }
        }
    }
    for (let key in obj) {
        console.log(key.split(',').map(Number));
    }
}

triplateSum([-1, 0, 1, 2, -1, -4], 6);
