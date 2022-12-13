let btn= document.getElementById("btn");
let numElt = document.getElementById("num");
console.log(numElt)
let operatorElt = document.getElementById("operator");
let sum = 0 ; 
let mult = 1;
let ans = 1;
btn.addEventListener("click", ()=>{
    if (operatorElt.value =="+"){
        for (let i=1; i<=numElt.value;i++){
            sum += i;
        }
        ans = sum 
    }else{
        for (let i=1; i<=numElt.value;i++){
           mult = mult*i;
        }
        ans = mult
    }
    console.log(ans);
    alert(ans);
})