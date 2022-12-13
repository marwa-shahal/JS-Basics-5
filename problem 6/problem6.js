let btn = document.getElementById("btn");
let result = "\n"
btn.addEventListener("click",()=>{
   for(let i=1; i<=12;i++){
     for(let j=1; j<=12; j++){
        result += i*j + " "
     }
     result += "\n"
     
   }
   console.log(result)
   alert(result)
})