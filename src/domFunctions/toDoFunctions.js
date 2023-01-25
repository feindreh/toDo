import { createDummyElement } from "../elementCreationDir/DummyCreation";
import { createToDoElement } from "../elementCreationDir/postItCreation";



export function displaychildren(children,parentNode){
	// display children[array] => parentNode
	//clear content
	deleteChildren(parentNode);

	if(children.length === 0){
		parentNode.append(createDummyElement(parentNode));
		return;
	}

	for(let toDo of children){
		//loop over children to get every toDo

		//create a toDoElement
		const toDoElement = createToDoElement(toDo);

		//append it
		parentNode.append(toDoElement);
	}
}

export function deleteChildren(parentNode){

	while (parentNode.firstChild) {
		parentNode.removeChild(parentNode.firstChild);
	}
}