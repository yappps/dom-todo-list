var tasks = ["buy milk", "eat dinner", "nail javascript"]

// display existing task list
for (let i=0; i<tasks.length; i++){
    addNewItem(tasks[i]);
}

function addNewItem (todoContent) {
    var createElement = document.createElement("li"); 
    createElement.textContent = todoContent;
    createElement.addEventListener("click", markItDown);  
    document.getElementById("todo-list").appendChild(createElement); 
}

function markItDown(event){
    if (event.target.classList.contains('done')){
        event.target.classList.remove('done'); 
    } else {
        event.target.classList.add('done'); 
    }
}

var formItem = document.getElementsByTagName('form')[0]; 
formItem.addEventListener('submit',function (event) {
    event.preventDefault();
    var Content = document.getElementById('add-todo-list').value;
    if( Content.length !== 0 ){
        tasks.push(Content);
        addNewItem(Content)
        document.getElementById('add-todo-list').value =""
    } else {
        alert("Invalid Input"); 
    }
}); 

/*
// note: completedItems is an array not an element
var completedItems = document.getElementsByTagName('li');
for (let i = 0; i < completedItems.length; i++) {
    completedItems[i].addEventListener('click', function() {
        if (completedItems[i].classList.contains('done')){
            completedItems[i].classList.remove('done');
        } else {
            completedItems[i].classList.add('done');
        }
    });
}
*/ 