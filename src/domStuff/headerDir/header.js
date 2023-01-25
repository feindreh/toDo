

import {createNewProjectbutton,escapeProjectButton,newlogButton} from "./ButtonCreation";
import { divClass, divID } from "../creation";


export default function createHeader(){

	const header = divID("header");



	const newProjectButton = createNewProjectbutton();
	const escapeButton = escapeProjectButton();
	const logButton = newlogButton();
	

	header.append(newProjectButton,escapeButton,logButton);

	return header;
}
