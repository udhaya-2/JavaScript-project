const display= document.querySelector(".display")
const ampm =document.querySelector(".ampm")
function displayTime(){
    let datetimes= new Date();
    let hr=datetimes.getHours();
    let mins=datetimes.getMinutes();
    let sec = datetimes.getSeconds();
    if(hr>12){
        hr=hr-12
        ampm.textContent="PM"
    }
    formet =`${String(hr).padStart(2,0)}:${String(mins).padStart(2,0)}:${String(sec).padStart(2,0)}`
    display.textContent=formet;
}
setInterval(displayTime,500)