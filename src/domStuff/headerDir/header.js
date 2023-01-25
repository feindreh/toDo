

import createNewButton from "./newButton";
import { divID } from "../creation";


export default function createHeader(){

	const header = divID("header");

	const newButton = createNewButton();
	

	header.append(newButton);

	return header;
}