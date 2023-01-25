

import {createNewToDoButton,createNewProjectbutton} from "./newButton";
import { divClass, divID } from "../creation";


export default function createHeader(){

	const header = divID("header");

	const newToDoButton = createNewToDoButton();

	const newProjectButton = createNewProjectbutton();
	

	header.append(newToDoButton,newProjectButton);

	return header;
}
