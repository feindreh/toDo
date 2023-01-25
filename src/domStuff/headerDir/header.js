
import createCloseButton from "./closeButton";
import createNewButton from "./newButton";
import { divID } from "../creation";


export default function createHeader(){

	const header = divID("header");

	const newButton = createNewButton();
	const closeButton = createCloseButton();

	header.append(newButton,closeButton);

	return header;
}