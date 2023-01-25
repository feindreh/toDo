import { divClass, divID } from "./creation";

export default function createContent(){

	const content = divID("content");
	const postit =  divID("PostIt");
	const dummy1 = divClass("dummy");
	const dummy2 = divClass("dummy");

	content.append(dummy1,postit,dummy2);

	return content;
}