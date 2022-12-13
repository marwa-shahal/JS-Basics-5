let numElt = document.getElementById("num")
numElt.addEventListener("change", ()=>{
    let sum = 0
    for (let i = 0; i <= numElt.value; i++) {
        sum += i;
      }
    console.log(sum)
    alert(sum)
})