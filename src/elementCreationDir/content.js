import { divClass, divID } from "./creation";

export default function createContent(){

	const content = divID("content");
	const postit =  divID("PostIt");
	const path = divID("path");
	const dummy2 = divClass("dummy");

	content.append(path,postit,dummy2);

	return content;
}