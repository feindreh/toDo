

import {escapeProjectButton} from "./ButtonCreation";
import { divID } from "./creation";


export default function createHeader(){

	const header = divID("header");


	const escapeButton = escapeProjectButton();
	const path = divID("path");
	

	header.append(escapeButton,path);

	return header;
}
