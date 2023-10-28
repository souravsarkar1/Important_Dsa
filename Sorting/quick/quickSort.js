function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let unsortedArray = [9, 8, 7, 6, 5, 5, 4, 3, 2, 1];
let sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
