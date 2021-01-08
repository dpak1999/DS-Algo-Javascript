function addUpTo(n) {
    return n * (n+1)/ 2;
}

let beforeTime = Date.now();
console.log(`Sum is : ${addUpTo(4000000000)}`);
let afterTime = Date.now();
console.log(`Time taken: ${(afterTime - beforeTime) / 1000} seconds.`)