import { divClass } from "../creation";


export function createToDoElement(toDo){
	//create Element with the struktur of the toDoElement
    

	const toDoElement = divClass(`toDoContainer-${toDo.type}`);
	toDoElement.addEventListener("click",()=>{
		console.log("container");
		console.log("toDos");
	});

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