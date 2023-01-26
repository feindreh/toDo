

import {newlogButton} from "./ButtonCreation";
import { divID } from "./creation";


export default function createHeader(){

	const header = divID("header");



	const logButton = newlogButton();
	

	header.append(,logButton);

	return header;
}
