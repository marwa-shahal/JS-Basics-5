let name = document.getElementById("name")
name.addEventListener("change",()=>{
if (name.value == "Alex" || name.value == "Bob"){
    console.log("Hello "+name.value)
    alert("Hello "+ name.value)
}else{
    console.log("Hello Stranger")
    alert("Hello Stranger")
}
})