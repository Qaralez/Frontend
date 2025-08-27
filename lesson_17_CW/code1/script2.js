const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");

// const textBlock = document.getElementsByClassName("text");
const textBlock = document.querySelectorAll(".text");
/*
btnBig.onclick = () =>{
    textBlock.forEach (b => b.style.fontSize ="2em");
}
btnNormal.onclick = () =>{
    textBlock.forEach (b => b.style.fontSize ="1em");
}
    */



btnBig.onclick = () =>{
    textBlock.forEach (b => b.classList.add("big"));
}
btnNormal.onclick = () =>{
    textBlock.forEach (b => b.classList.remove("big"));
}