function powersOfTwo(n){
    let res =[];
    if (n===0){
        return [1];
    }else {
        for (let i = 0; i <= n; i++) {
            res.push(Math.pow(2,i));
        }
        return res;
    }
}

console.log(powersOfTwo(4));