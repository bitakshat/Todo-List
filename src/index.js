

// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// adding clock
const timer = setInterval(() => {
	const CURRENT_TIME = new Date().toLocaleTimeString();
	const clock = document.querySelector('.render-clock').innerHTML = `${CURRENT_TIME}`
}, 1000);

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


// Functions
function addTodo(event) {
	// Prevents form from submitting;
	event.preventDefault();

	//todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add("todo"); 
	// create li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value + "-> " + new Date().toLocaleTimeString();
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	// checkmark button 
	const completedButton = document.createElement('button');
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);

	// check trash buton 
	const trashButton  = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);

	// APPEND TO LIST 
	todoList.appendChild(todoDiv)

	//clear todo input value
	todoInput.value = "";
}


function deleteCheck(e) {
	const item = e.target;
	//delete todo
	if(item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		//Animation
		console.log(item.parentElement);
		todo.classList.add('fall'); 
		todo.addEventListener('transitionend', function() {
			todo.remove();
		})
	}

	//check mark
	if(item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}

// rendering time component
setInterval(() => {
	const progress = document.querySelector('#timeprogress');
	const currentProgress = new Date().getSeconds();
	progress.setAttribute("value", currentProgress);
}, 1000);