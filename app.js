const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

//Funções


// Relogio

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();

    function addTodo(event){
    //Para evitar o evento submiting
        event.preventDefault()
    //To-do Div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
    //Criando Li
        const newTodo = document.createElement('li')
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
    //Limpar o valor do TodoInput
        todoInput.value = ""
    //Check Mark Botão
        const completedButton = document.createElement('button')
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn")
        todoDiv.appendChild(completedButton)
    //lixeira
        const trashButton = document.createElement('button')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn")
        todoDiv.appendChild(trashButton)
    //Append to list
        todoList.appendChild(todoDiv)
}

    function deleteCheck(e) {
    //Delete
        const item = e.target
        if(item.classList[0] === "trash-btn" ) {
        const todo = item.parentElement
        todo.classList.add("sumir")
        todo.addEventListener("transitionend", function(){
        todo.remove()
      })
    }

    //Check Mark
        if(item.classList[0] === "complete-btn") {
            const clear = item.parentElement
            clear.classList.toggle("completed")
    }
} 

