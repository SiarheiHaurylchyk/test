function SeriesSum(n)
{
    if(n===0){
        return "0.00";
    }
    let delitel = 4;
    let res =0;
    for(let i = 0; i<=n;i++){
        if (i>1){
            res+= 1/delitel;
            delitel+=3;
        }

    }
    res+=1;
   return  res.toFixed(2).toString();
}

console.log(SeriesSum(2))