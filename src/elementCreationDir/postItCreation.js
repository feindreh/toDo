import { divClass } from "./creation";
import { createDiveButton } from "./ButtonCreation";

export function createToDoElement(toDo){
    
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

	const priority = divClass("priority");
	priority.innerText = `Priority: ${toDo.priority}`;

	const upButton = document.createElement("button");
	upButton.innerText = "Prio Up ";
	upButton.addEventListener(("click"),()=>{
		console.log("up");
	});

	const downButton = document.createElement("button");
	downButton.innerText = "Prio Down";
	downButton.addEventListener(("click"),()=>{
		console.log("down");
	});

	toDoElement.append(toDoMark,header,description,proxTimeP,proxTime,dueDateP,dueDate);
	
	if(toDo.type === "project"){
		const diveButton = createDiveButton(toDo);
		toDoElement.append(diveButton);
	}

	toDoElement.append(priority,upButton,downButton);

	return toDoElement;
}