function generateRungsArray(n) {
    // generates array of possible solutions for all numbers inferior to n
    let arr = Array(n).fill(0);;
    for(let i=0; i<n; i++) {
        if(i===0) {
            arr[i]=1;
        } else if(i===1) {
            arr[i]=2;
        } else {
            arr[i] = arr[i-1] + arr[i-2]
        }
    }
    return arr;

}
function algo2(A,B) {
    let max = Math.max(...A);
    let possibleSolutions = generateRungsArray(max);
    const b = A.map((e,index) => {
        return possibleSolutions[e-1] % Math.pow(2, B[index])
    })
    return b;
}
