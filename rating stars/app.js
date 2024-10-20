const starRating= document.querySelector(".star-rating");
const stars= document.querySelectorAll(".star")
let currentrating=0;
starRating.addEventListener('mouseover',(e)=>{
    const star=e.target;
    if(star.classList.contains("star")){
        const rating=parseInt(star.dataset.rating,10);
        Highlightstar(rating);
    }
})
starRating.addEventListener('mouseleave',(e)=>{
    const rating= e.target
    Highlightstar(rating);
})
starRating.addEventListener('click',(e)=>{
    const star=e.target
   if(star.classList.contains("star")){
    currentrating=parseInt(star.dataset.rating,10);
    starRating.setAttribute= currentrating
    Highlightstar(currentrating)
    alert(`you rating ${currentrating}`)
   }
})

function Highlightstar(rating){
  stars.forEach((star,index)=>{
    if(index<rating){
        star.classList.add("star-highlight")
    }
    else{
        star.classList.remove("star-highlight")    
    }
  })
}