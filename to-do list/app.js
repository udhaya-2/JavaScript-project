let input= document.querySelector('#input-box')
let button = document.getElementById('adds')
let todos=[]
// const read= new read()
button.addEventListener('click',()=>{
    if(input.value.trim()==''){
        return
    }
    else{
        todos.push({text:input.value,completed:false})
        addtodo(input.value)
        input.value=''}
})
function Delete(todo){
        if(todo >=0 && todo < todos.length){
            todos.splice(todo,1)
          }
      addtodo()
}

function addtodo(){
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
      todos[index].completed = !todos[index].completed;
      addtodo();
      
}

