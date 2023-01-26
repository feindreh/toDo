

import {escapeProjectButton} from "./ButtonCreation";
import { divID } from "./creation";


export default function createHeader(){

	const header = divID("header");


	const escapeButton = escapeProjectButton();
	

	header.append(escapeButton);

	return header;
}
