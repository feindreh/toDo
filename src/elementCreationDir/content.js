import { divClass, divID } from "./creation";

export default function createContent(){

	const content = divID("content");
	const dummy1 =  divClass("dummy");
	const path = divID("path");
	const dummy2 = divClass("dummy");

	content.append(dummy1,postit,dummy2);

	return content;
}