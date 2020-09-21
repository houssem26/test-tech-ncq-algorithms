function algo1(N, A) {
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
    return c;
}
