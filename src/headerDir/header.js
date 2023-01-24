import createPrompt  from "./createPrompt";
import createCloseButton from "./closeButton";
import createNewButton from "./newButton";
import { divID } from "../functions/creation";


export default function createHeader(){

	const header = divID("header");

	const newButton = createNewButton();
	const prompt = createPrompt();
	const closeButton = createCloseButton();

	header.append(newButton,prompt,closeButton);

	return header;
}