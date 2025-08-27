function getTimeString(){
    let date= new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    return `${twoDigit(hour)}:${twoDigit(min)}:${twoDigit(sec)}`
    
}
function setClock(){
    let clock = document.getElementById('clock');
    clock.innerText = getTimeString();
    //console.dir(clock);
}
function twoDigit(value){
    return String(value).padStart(2,0);
}
setInterval(setClock, 1000);
getTimeString();
setClock();
