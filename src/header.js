import createPrompt  from "./prompt/createPrompt";
import createCloseButton from "./prompt/closeButton";
import createNewButton from "./prompt/newButton";
import { divID } from "./functions/creation";


export default function createHeader(){

	const header = divID("header");

	const newButton = createNewButton();
	const prompt = createPrompt();
	const closeButton = createCloseButton();

	header.append(newButton,prompt,closeButton);

	return header;
}