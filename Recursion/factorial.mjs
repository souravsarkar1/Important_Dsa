// write the factrial recursively function

function factrialRecursive(n){
    if(n === 0) return 1;
    return factrialRecursive(n - 1) * n;
}

console.log(factrialRecursive(5));