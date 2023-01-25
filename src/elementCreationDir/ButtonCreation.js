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
	const Button = document.createElement("button");
	Button.setAttribute("id","closeItBaby");
	Button.innerText = "add this to Do";


	Button.addEventListener("click",()=>{

		let values = getValues("projectPrompt");

		let obj = projectFactory(values);


		parentNode.Projects.push(obj);

		deleteChildren();
		hide(document.querySelector("#blackBox"));
		display(parentNode);
	});


	return Button;
}
