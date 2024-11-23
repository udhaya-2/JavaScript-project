let input= document.querySelector('#input-box')
let button = document.getElementById('adds')
let completed=document.querySelector('.completed')
let uncompleted=document.querySelector('.uncompleted')
let complete=0
let count=0
let todos=[]


// const read= new read()
button.addEventListener('click',()=>{
    if(input.value.trim()==''){
        return
    }
    else{
        todos.push({text:input.value,completed:false})
        count = todos.length
        addtodo(input.value)
        input.value=''}
})
function Delete(todo){
        complete--
        count--
        if(complete <0)
            complete=0
        completed.innerHTML=complete
        if(todo >=0 && todo < todos.length){
            todos.splice(todo,1)
          }
      addtodo()
}

function addtodo(){
    if (count<0)
        uncompleted.innerHTML=0
    else
       uncompleted.innerHTML=count
    const tasklist= document.getElementById('Tasklist')
    tasklist.innerHTML=''
    todos.forEach((todo ,index)=>{
    tasklist.innerHTML+=`<li class="list-style" style="list-style:none;"><span style="text-decoration:${todo.completed ? 'line-through':''}"> ${todo.text}</span>
    <button class="delete"  role ="button" onclick="Delete(${index})">Delete</button>
    <button class="finish" onclick="finish(${index})" id="finish">Finish</button>
       </li>   `
   })
   }
function finish(index){
      complete++
      count--
      completed.innerHTML=complete
      todos[index].completed = !todos[index].completed;
      addtodo();
}

