const btn_insert = document.getElementById('btn_insert')
const btn_clear = document.getElementById('btn_clear')
const txt_input = document.getElementById('input_todo')
const list = document.getElementById('todos')

btn_insert.addEventListener('click', () => {
    console.log(txt_input.value)
    addTodo(txt_input.value)
    txt_input.value = ""
    checkTasks()
})

function addTodo(value){
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(value))
    list.appendChild(li)
}


btn_clear.addEventListener('click', () => {
    const items = document.querySelectorAll('li')
    items.forEach( object => {
        list.removeChild(object)
    })
    checkTasks()
})


function checkTasks(){
    if(document.querySelectorAll('li').length == 0){
        document.getElementById('txt-available').innerText = 'No tasks left'
    } else{
        document.getElementById('txt-available').innerText = 'Tasks left to do:'
    }
}
