function replace(s){
    let str = "aeiouAEIOU";
    let res= "";
     s.split("").filter(e=>{
        if (str.includes(e)){
            res+="!";
        }
        else {
         res+=e
        }
       })
    return res;
}

console.log(replace("ABCDE"))