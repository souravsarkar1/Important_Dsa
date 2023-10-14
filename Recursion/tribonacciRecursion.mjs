// write a code to find tribonacci of the number 

function tribonacci(number) {
    if (number <= 1) return number;
    if(number === 2) return 1;

    return tribonacci(number - 1) + tribonacci(number - 2) + tribonacci(number - 3);

}

let ans = tribonacci(4);
console.log(ans);