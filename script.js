const btn = document.querySelector("#btn")
const head1 = document.querySelector("#head1")
btn.addEventListener("click",()=>{
if(btn.innerHTML === "DARK"){
    document.body.style.backgroundColor="black"
    btn.innerHTML = "LIGHT"
   document.body.style.color="white"
}else{
    document.body.style.backgroundColor="white"
     btn.innerHTML = "DARK"
        document.body.style.color="black"
}

if(head1.innerHTML === "THEME CHANGED"){
    document.body.style.backgroundColorcolor="red"
    head1.innerHTML = "THEME CHANGING"
   document.body.style.color="blue"
}else{
    document.body.style.backgroundColor="blue"
     head1.innerHTML = "THEME CHANGED"
        document.body.style.color="red"
}
})



