import { createDummyElement } from "../elementCreationDir/DummyCreation";
import { createToDoElement } from "../elementCreationDir/postItCreation";
import {Logic} from "../objectDir/Logic";
import { divClass } from "../elementCreationDir/creation";



export function display(parentNode){
	// display children[array] => parentNode


	const children = parentNode.Projects;
	children.sort((a,b) => b.priority - a.priority);
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