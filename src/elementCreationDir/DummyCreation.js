import { divClass } from "./creation";
import{createNewProjectbutton} from "./ButtonCreation";

export function createDummyElement(parentNode){


	const container = divClass("shitIknow");

	const newProjectButton = createNewProjectbutton(parentNode,"project");
	const newToDoButton = createNewProjectbutton(parentNode,"toDo");

	container.append(newProjectButton,newToDoButton);

	return container;

}

