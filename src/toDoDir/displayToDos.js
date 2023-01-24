import { createToDoElement , addValueToToDoElement} from "./toDoFunctions";

export function displayToDos(toDos,node){

	// display toDos[array] => node
	

	for(let toDo of toDos){
		//loop over toDos to get every toDo

		//create a toDoElement
		const toDoElement = createToDoElement(toDo);

		//append it
		node.append(toDoElement);
	}
}