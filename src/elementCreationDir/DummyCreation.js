import { divClass } from "./creation";
import { displayToDos } from "../domFunctions/toDoFunctions";


export function createDummyElement(){
   

	const container = divClass("shitIknow");

	const newToDoButton = document.createElement("button");
	newToDoButton.innerText = "New To Do";

	const newProjectButton = document.createElement("button");
	newProjectButton.innerText = "New Project";

	container.append(newToDoButton,newProjectButton);

	return container;

}