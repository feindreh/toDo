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