function addLength(str) {
    let arr = str.split("");
    let str1 = "";
    let res =[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!==" "){
            str1+=arr[i];
        }
        else {
            str1+=" "+str1.length;
            res.push(str1);
            str1="";
        }
    }
    res.push(str1+" "+str1.length)
    return res
}

console.log(addLength('apple ban'))