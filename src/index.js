import "./style.css";
import header from "./elementCreationDir/header";
import content from "./elementCreationDir/content";
import { display } from "./domFunctions/toDoFunctions";
import {Logic,storageAvailable,loadLocalStorage}from "./objectDir/Logic";
import { makeBlackBox } from "./elementCreationDir/promptElement";

let storage = false;

if (storageAvailable("localStorage")) {
	storage = true;
}


if(storage){
	if(localStorage.length){loadLocalStorage();}
}



const container = document.querySelector("#container");

//append prompts
const blackBox = makeBlackBox();
container.append(blackBox);

//append actual content
container.append(header());
container.append(content());

Logic.queue.push("PostIt");
display(Logic);

export {storage};
