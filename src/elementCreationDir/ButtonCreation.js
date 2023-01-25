import Logic from "../objectDir/Logic";
import { getValues, hide,show} from "../domFunctions/promptFunctions";
import { createProjectPrompt } from "./promptElement";
import {deleteChildren, display} from "../domFunctions/toDoFunctions";
import { projectFactory } from "../objectDir/LogicFuntions";


export function createNewToDoButton(){
	const Button = document.createElement("button");
	Button.innerText = "make new toDo";
	return Button;
}

export function createNewProjectbutton(parentNode){
	console.log("newProjectButton",parentNode);
	const Button = document.createElement("button");
	Button.innerText = "new Project";

	Button.addEventListener("click",()=>{
		show(document.querySelector("#blackBox"));
		document.querySelector("#PostIt").append(createProjectPrompt(parentNode));
	});

	return Button;
}

export function escapeProjectButton(){
	const Button = document.createElement("button");
	Button.innerText = "escapeProject";
	return Button;
}

export function newlogButton(){
	const logButton = document.createElement("button");
	logButton.type = "button";
	logButton.id = "logButton";
	logButton.innerText = "logButton";
	logButton.addEventListener("click", () => {
		console.log(Logic);
	});
	return logButton;
}

export function createCloseButton(parentNode){
	console.log("createCloseButton",parentNode);
	const Button = document.createElement("button");
	Button.setAttribute("id","closeItBaby");
	Button.innerText = "add this to Do";


	Button.addEventListener("click",()=>{

		let values = getValues("projectPrompt");
		console.log(values);
		let obj = projectFactory(values);
		console.log(obj);

		parentNode.Projects.push(obj);

		deleteChildren();
		hide(document.querySelector("#blackBox"));
		console.log("display:",parentNode);
		display(parentNode);
	});


	return Button;
}
