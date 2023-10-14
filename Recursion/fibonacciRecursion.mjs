// wrote the fibonacci recursion code

function fibonacciRecursion(n){
    if(n <=1) return n;
    return fibonacciRecursion(n-1) + fibonacciRecursion(n-2);
}

let ans = fibonacciRecursion(50);
console.log(ans);