

import {createNewProjectbutton,escapeProjectButton,newlogButton} from "./ButtonCreation";
import { divID } from "../creation";


export default function createHeader(){

	const header = divID("header");



	const newProjectButton = createNewProjectbutton();
	const escapeButton = escapeProjectButton();
	const logButton = newlogButton();
	

	header.append(newProjectButton,escapeButton,logButton);

	return header;
}
