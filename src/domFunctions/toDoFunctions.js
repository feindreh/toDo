import { createDummyElement } from "../elementCreationDir/DummyCreation";
import { createToDoElement } from "../elementCreationDir/postItCreation";



export function display(parentNode){
	// display children[array] => parentNode


	const children = parentNode.Projects;
	
	//clear content
	deleteChildren();

	//display stuff
	for(let toDo of children){
		//loop over children to get every toDo

		//create a toDoElement
		const toDoElement = createToDoElement(toDo);

		//append it
		document.querySelector("#PostIt").append(toDoElement);
	}

	document.querySelector("#PostIt").append(createDummyElement(parentNode));

}

export function deleteChildren(){
	const parentNode = document.querySelector("#PostIt");
	while (parentNode.firstChild) {
		parentNode.removeChild(parentNode.firstChild);
	}
}