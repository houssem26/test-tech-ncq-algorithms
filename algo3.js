function algo3(arr) {
  // sort the input array by abs value 
  let sorted = arr
    .sort((a,b) => Math.abs(a.value) < Math.abs(b) ? 1 : -1)
  // compare if the sum for each element is superior when it's multiplied by 1 or -1
  let s = sorted.reduce((acc, curr) => {
    let positifSum = acc + curr;
    let negatifSum = acc - curr;
    if(Math.abs(positifSum) > Math.abs(negatifSum) ) {
      return negatifSum;
    }
    return positifSum;
  }, 0)
  return s;
}
