const N = process.argv.slice(2)[0];
let a = Array(N).fill(0);
for(let i=0; i<N; i++) {
    if(i===0) {
        a[i]=1;
    } else if(i===1) {
        a[i]=2;
    } else {
        a[i] = a[i-1] + a[i-2]
    }
}
const rungs = (n) => {
    
    return n <3 ? n : rungs(n-1)+rungs(n-2) 
}
console.log('possible solutions', a[N-1])