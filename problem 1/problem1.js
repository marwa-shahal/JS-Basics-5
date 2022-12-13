let name = document.getElementById("name")
name.addEventListener("change",()=>{
    console.log("Hello "+name.value)
    alert("Hello "+name.value)
})
