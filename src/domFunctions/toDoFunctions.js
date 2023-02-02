import { createDummyElement } from "../elementCreationDir/DummyCreation";
import { createToDoElement } from "../elementCreationDir/postItCreation";
import {Logic,saveLocalStorage} from "../objectDir/Logic";
import { storage } from "../index";
import { find } from "../objectDir/LogicFuntions";



export function display(parentNode){
	// display children[array] => parentNode
	parentNode.Projects.sort((a,b) => b.priority - a.priority);
	const children = parentNode.Projects;
	//clear content
	deleteChildren(document.querySelector("#PostIt"));

	//display stuff
	for(let toDo of children){
		//loop over children to get every toDo

		//create a toDoElement
		const toDoElement = createToDoElement(toDo);

		//append it
		document.querySelector("#PostIt").append(toDoElement);
	}

	document.querySelector("#PostIt").append(createDummyElement(parentNode));

	if(storage){
		saveLocalStorage();
	}
}

export function deleteChildren(parentNode){
	while (parentNode.firstChild) {
		parentNode.removeChild(parentNode.firstChild);
	}
}

export function refresh(){
	const buildQueue = Array.from(Logic.queue);
	buildQueue.shift();
	let buildObject = find(Logic,buildQueue);
	display(buildObject);
}
