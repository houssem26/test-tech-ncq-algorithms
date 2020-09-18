let rawArrayInput = process.argv.slice(2)[0];
let arr = rawArrayInput.split(',')
console.log(arr)
arr[0] = arr[0].substring(1);
arr[arr.length-1] = arr[arr.length-1].slice(0, -1) 
arr = arr.filter(e=> e !==',').map(e => parseInt(e));

let sorted = arr.map((e, index) => ({index, value: e})).sort((a,b) => Math.abs(a.value) < Math.abs(b.value) ? 1 : -1)
let S = Array(parseInt(sorted.length)).fill(0);
let result = sorted.reduce((acc, curr) => {
  let positifSum = acc + curr.value;
  let negatifSum = acc - curr.value;
  if(Math.abs(positifSum) > Math.abs(negatifSum) ) {
    S[curr.index] = -1;
    return negatifSum;
  }
    S[curr.index] = 1;
  return positifSum;
}, 0)
console.log('Set', S)
console.log('result', result)