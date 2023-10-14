// 

function canHelp(n, m) {
    if (n === m) return true;
    else if (m > n) return false;
    else return (canHelp(n, m * 10) || canHelp(n, m * 20));
}

let ans = canHelp(100,1);
console.log(ans);