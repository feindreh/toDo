import { createDummyElement } from "../elementCreationDir/DummyCreation";
import { createToDoElement } from "../elementCreationDir/postItCreation";



export function displayToDos(toDos,node){
	// display toDos[array] => node
	//clear content
	deleteChildren(node);

	if(toDos.length === 0){
		node.append(createDummyElement());
		return;
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