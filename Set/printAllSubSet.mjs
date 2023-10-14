function allSubSet(arr, subSetTillNow, ind) {
    if (ind === arr.length) {
        console.log(subSetTillNow);
        return;
    }
    // invoke
    allSubSet(arr, [...subSetTillNow, arr[ind]], ind + 1);
    //not invoke
    allSubSet(arr, subSetTillNow, ind + 1);
}

 allSubSet([1, 2, 3], [], 0);
