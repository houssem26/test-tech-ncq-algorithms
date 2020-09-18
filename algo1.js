const N = process.argv.slice(2)[0];
let rawArrayInput = process.argv.slice(2)[1];
let A = rawArrayInput.split('')
A.pop();
A.shift()
A = A.filter(e=> e !==',').map(e => parseInt(e));

let Counters = Array(parseInt(N)).fill(0);

let c=Counters.slice();
const maxCounters = (counters) => {
    const max = Math.max(...counters)
    return Array(counters.length).fill(max);
}
A.forEach(e => {
    if(1<=e && e<=Counters.length) {
        c[e-1] = c[e-1] +1;
} else {
    c = maxCounters(c)
}
})
console.log(c)
