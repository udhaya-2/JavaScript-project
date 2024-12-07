let input= document.querySelector('#input-box')
let button = document.getElementById('adds')
let list = document.getElementById('Tasklist')
document.addEventListener("DOMContentLoaded",()=>{
   const listitem=JSON.parse(localStorage.getItem("listitem"))
   listitem.forEach((item)=>{
      const li= document.createElement('li')
      const divEL = document.createElement('div')
      const deleteEl = document.createElement("button")
      const spanvalue= document.createElement("span")
      const checkboxEL = document.createElement("input")
      checkboxEL.type='checkbox'
      li.className ="list-style"
      spanvalue.textContent =item.listitem
      deleteEl.innerHTML=`&#10005;`
      deleteEl.className="delete"
      deleteEl.setAttribute('onclick','colseEL(event)')
      checkboxEL.setAttribute('onclick','finish(event)');
      divEL.append(checkboxEL,spanvalue)
      li.append(divEL,deleteEl)
      list.append(li)
   }
   )
})
function handlelist(){
      if (input.value==="")
         return;
      const li= document.createElement('li')
      const divEL = document.createElement('div')
      const deleteEl = document.createElement("button")
      const spanvalue= document.createElement("span")
      const checkboxEL = document.createElement("input")
      checkboxEL.type='checkbox'
      li.className ="list-style"
      spanvalue.textContent =input.value
      deleteEl.innerHTML=`&#10005;`
      deleteEl.className="delete"
      deleteEl.setAttribute('onclick','colseEL(event)')
      checkboxEL.setAttribute('onclick','finish(event)');
      divEL.append(checkboxEL,spanvalue)
      li.append(divEL,deleteEl)
      list.append(li)
      const storelist = localStorage.setItem("listitem",JSON.stringify([...JSON.parse(localStorage.getItem("listitem") || "[]"),{listitem: input.value}]))
      input.value=""
}
function finish(event){
         let read = event.target.nextSibling;
         if(read.style.textDecoration==='line-through')
            read.style.textDecoration=''
         else
            read.style.textDecoration='line-through'  
      }
input.addEventListener("keyup",(event)=>{
   if(event.key==="Enter")
      handlelist();
})
button.addEventListener('click',handlelist)
function colseEL(event){
     let close = event.target.parentNode;
     close.remove()
}
