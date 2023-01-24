import { divClass} from "../functions/creation";

export function createToDoElement(toDo){
	//create Element with the struktur of the toDoElement
    

	const toDoElement = divClass("toDoContainer");

	const header = divClass("toDo-Header");
	header.innerText = `${toDo.title}`;

	const description = divClass("toDo-Description");
	description.innerText = `${toDo.description}`;

	const proxTime = divClass("toDo-ProxTime");
	proxTime.innerText = `${toDo.proxTime}`;

	const dueDate = divClass("toDo-dueDate");
	dueDate.innerText = `${toDo.dueDate}`;

	toDoElement.append(header,description,proxTime,dueDate);
	
	return toDoElement;
}

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