import { divClass } from "./creation";
import { createDeleteButton, createDiveButton, createEditButton } from "./ButtonCreation";
import { refresh } from "../domFunctions/toDoFunctions";

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


	const postItFooter = createPostItFooter(toDo);

	toDoElement.append(toDoMark,header,description,proxTimeP,proxTime,dueDateP,dueDate,postItFooter);
	

	return toDoElement;
}

function createPostItFooter(toDo){
	//priority,upButton,downButton,editButton,deleteButton

	const pFooter = divClass("pFooter");

	const priorityWrap = divClass("priorityWrap");

	const priority = divClass("priority");
	priority.innerText = `Priority: ${toDo.priority}`;

	const upButton = document.createElement("button");
	upButton.innerText = "Prio Up ";
	upButton.addEventListener(("click"),()=>{
		toDo.priority += 1;
		refresh();
	});

	const downButton = document.createElement("button");
	downButton.innerText = "Prio Down";
	downButton.addEventListener(("click"),()=>{
		toDo.priority -= 1;
		refresh();
	});

	priorityWrap.append(priority,upButton,downButton);

	const editButton = createEditButton(toDo);

	const deleteButton = createDeleteButton(toDo);

	if(toDo.type === "project"){
		const diveButton = createDiveButton(toDo);
		pFooter.append(diveButton);
	}

	pFooter.append(priorityWrap,editButton,deleteButton);

	return pFooter;

}