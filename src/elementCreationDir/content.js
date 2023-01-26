import { divClass, divID } from "./creation";

export default function createContent(){

	const content = divID("content");

	const dummy1 =  divClass("dummy");
	const postIt = divID("PostIt");
	const dummy2 = divClass("dummy");

	content.append(dummy1,postIt,dummy2);

	return content;
}