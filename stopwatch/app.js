let timer;
let second =0;
let minutes=0;
let hours=0;
let isrunning=false;
window.startstop=function startstop(){
    if(!isrunning){
        isrunning=true;
        timer = setInterval(updateTime,1000);
        document.getElementById("startstop").textContent="pause";
    }
    else{
            pause();
        }
    
}
function updateTime(){
    second++;
    if(second == 60){
        second=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    display();
}
function pause(){
    clearInterval(timer)
    isrunning = false;
    document.getElementById("startstop").textContent="start";
}

function reset(){
    pause();
    second=0;
    minutes=0;
    hours=0;
    display();
}
function display(){
    const display= document.querySelector(".display");
    const formatTime=`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    display.textContent=formatTime;
}
