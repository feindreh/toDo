import { createToDoElement } from "../elementCreationDir/postItCreation";



export function displayToDos(toDos,node){
	// display toDos[array] => node
	//clear content
	deleteChildren(node);

	console.log(toDos);

	if(toDos.lenght === 0){
		//append example
		//return
	}

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