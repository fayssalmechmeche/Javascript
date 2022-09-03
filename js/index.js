// Notre application

'use strict'

const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')





// tableau

const storage = new ArrayStorage('tasks')
const tasks = storage.list


// function ajouter une tache

function addTasks(task){

    if (typeof task === 'string' && task) {
        const li = document.createElement('li')
        const remove = document.createElement('button')
    
        li.textContent = task
        remove.textContent = 'SUPPRIMER'
    
        remove.addEventListener('click', () => {
          const value = remove.parentNode.firstChild.textContent
          storage.remove(value)
          list.removeChild(remove.parentNode)
        })
    
        li.appendChild(remove)
    
        list.insertBefore(li, list.firstChild)
    
        return true
      }
      return false

}

// on ajoute des taches

tasks.forEach(task => addTasks(task))

// on gere l'ajout de tache avec le button ou le clavier
function newTask(){
    if(storage.list.indexOf(input.value) === -1 && addTasks(input.value)) {
        storage.set(input.value)
        input.value = ''
    }
    input.focus()


}
add.addEventListener('click', newTask)
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    newTask()
  }
})

// on clear les taches

clear.addEventListener('click',()=>{
    storage.clear()
     list.innerHTML =''
    
})




















    






