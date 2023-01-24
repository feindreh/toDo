import { divID } from "../functions/creation";

export default function createContent(){

	const content = divID("content");

	content.append();

	return content;
}