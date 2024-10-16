const openModelButton=document.querySelector(".modelOpen");
const modal=document.querySelector(".model" );
const modelClosedButton=document.querySelector(".modelClosed");
openModelButton.addEventListener("click",()=>{
            modal.style.display="flex";
        });
modelClosedButton.addEventListener("click",()=>{
    modal.style.display="none";
})
modal.addEventListener("click",(event)=>{
    console.log(event);
    if(event.target==modal){
        modal.style.display="none";
    }
})