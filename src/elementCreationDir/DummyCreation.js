import { divClass } from "./creation";
import{createNewProjectbutton} from "./ButtonCreation";

export function createDummyElement(parentNode){


	const container = divClass("shitIknow");

	const newProjectButton = createNewProjectbutton(parentNode);

	container.append(newProjectButton);

	return container;

}

