import { createToDoElement } from "./postItCreation";



export function displayToDos(toDos,node){
	// display toDos[array] => node
	
	//clear content
	deleteChildren(node);

	for(let toDo of toDos){
		//loop over toDos to get every toDo

		//create a toDoElement
		const toDoElement = createToDoElement(toDo);

		//append it
		node.append(toDoElement);
	}
}

export function deleteChildren(node){

	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}