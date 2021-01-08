function addUpTo(n) {
    let total = 0;
    for (let i = 1;i <= n; i++) {
        total += i;
    }
    return total;
}

let beforeTime = Date.now();
console.log(`Sum is : ${addUpTo(4000000000)}`);
let afterTime = Date.now();
console.log(`Time taken: ${(afterTime - beforeTime) / 1000} seconds.`)

