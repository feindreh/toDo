

import {createNewProjectbutton,escapeProjectButton} from "./newButton";
import { divClass, divID } from "../creation";


export default function createHeader(){

	const header = divID("header");



	const newProjectButton = createNewProjectbutton();
	const escapeButton = escapeProjectButton();
	

	header.append(newProjectButton,escapeButton);

	return header;
}
