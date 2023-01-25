import { divClass } from "./creation";
import { displayToDos } from "../domFunctions/toDoFunctions";
import{createNewProjectbutton} from "./ButtonCreation";

export function createDummyElement(parentNode){
   
	console.log(parentNode);

	const container = divClass("shitIknow");

	const newProjectButton = createNewProjectbutton();

	container.append(newProjectButton);

	return container;

}

