import { createDummyElement } from "../elementCreationDir/DummyCreation";
import { createToDoElement } from "../elementCreationDir/postItCreation";
import {Logic,saveLocalStorage} from "../objectDir/Logic";
import { divClass } from "../elementCreationDir/creation";
import { storage } from "..";
import { find } from "../objectDir/LogicFuntions";



export function display(parentNode){
	// display children[array] => parentNode
	if(storage){
		saveLocalStorage();
	}
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
	showPath();
}

export function deleteChildren(parentNode){
	while (parentNode.firstChild) {
		parentNode.removeChild(parentNode.firstChild);
	}
}

export function showPath(){
	deleteChildren(document.querySelector("#path"));
	const container = document.querySelector("#path");
	for(let i = 0; i<Logic.queue.length;i++){
		const step = divClass("path");
		step.innerText = `${Logic.queue[i]}`;
		container.append(step);
	}
}

export function refresh(){
	const buildQueue = Array.from(Logic.queue);
	buildQueue.shift();
	let buildObject = find(Logic,buildQueue);
	display(buildObject);
}
