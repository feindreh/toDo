import { divClass } from "./creation";
import { display } from "../domFunctions/toDoFunctions";
import Logic from "../objectDir/Logic";

export function createToDoElement(toDo){
    

	const toDoElement = divClass(`toDoContainer-${toDo.type}`);
	if(toDo.type === "project"){
		toDoElement.addEventListener("click",()=>{
		// display projects
			display(toDo);
		});}

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