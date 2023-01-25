

import {createNewProjectbutton} from "./newButton";
import { divClass, divID } from "../creation";


export default function createHeader(){

	const header = divID("header");



	const newProjectButton = createNewProjectbutton();
	

	header.append(newProjectButton);

	return header;
}
