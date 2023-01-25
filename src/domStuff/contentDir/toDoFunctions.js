import { divClass} from "../creation";

export function createToDoElement(toDo){
	//create Element with the struktur of the toDoElement
    

	const toDoElement = divClass(`toDoContainer-${toDo.type}`);

	const toDoMark = divClass("toDoMark");
	toDoMark.innerText = "To Do:";

	const header = divClass("toDo-Header");
	header.innerText = `${toDo.title}`;

	const description = divClass("toDo-Description");
	description.innerText = `${toDo.description}`;

	const proxTimeP = document.createElement("div");
	proxTimeP.innerText = "aproximate time to finish";

	const proxTime = divClass("toDo-ProxTime");
	proxTime.innerText = `${toDo.proxTime}`;

	const dueDateP = document.createElement("div");
	dueDateP.innerText = "Should be done till";

	const dueDate = divClass("toDo-dueDate");
	dueDate.innerText = `${toDo.dueDate}`;

	toDoElement.append(toDoMark,header,description,proxTimeP,proxTime,dueDateP,dueDate);
	
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