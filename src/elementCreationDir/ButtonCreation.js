import {Logic} from "../objectDir/Logic";
import { getValues, hide,show} from "../domFunctions/promptFunctions";
import { createInputPrompt,createEditPrompt } from "./promptElement";
import {deleteChildren, display, showPath} from "../domFunctions/toDoFunctions";
import { goBack, projectFactory, toDoFactory } from "../objectDir/LogicFuntions";
import { refresh } from "../objectDir/LogicFuntions";


export function createNewProjectbutton(parentNode,type){
	const Button = document.createElement("button");
	Button.innerText = `new ${type}`;

	Button.addEventListener("click",()=>{
		show(document.querySelector("#blackBox"));
		document.querySelector("#PostIt").append(createInputPrompt(parentNode,type));
	});

	return Button;
}

export function escapeProjectButton(){
	const Button = document.createElement("button");
	Button.setAttribute("id","escapeButton");
	Button.innerText = "go back";
	Button.addEventListener("click",()=>{
		let rootCheck = goBack();
		if(rootCheck){alert("already in the root");}
		showPath();
	});
	return Button;
}

export function createCloseButton(parentNode,type){
	const Button = document.createElement("button");
	Button.setAttribute("id","closeItBaby");
	Button.innerText = "add it";


	Button.addEventListener("click",()=>{

		let values = getValues();
		let obj;
		if(type==="toDo"){obj = toDoFactory(values);}
		if(type==="root"||type==="project"){obj= projectFactory(values);}

		parentNode.Projects.push(obj);

		deleteChildren(document.querySelector("#PostIt"));
		hide(document.querySelector("#blackBox"));
		display(parentNode);
		showPath();
	});


	return Button;
}

export function createDiveButton(parentNode){
	//logix
	const Button = document.createElement("button");
	Button.innerText = "dive into project";
	Button.addEventListener("click",()=>{
		Logic.queue.push(parentNode.id);
		display(parentNode);
	});
	return Button;
}

export function createClosePromptButton(){
	const Button = document.createElement("button");
	Button.innerText = "close";

	Button.addEventListener("click", () => {
		deleteChildren(document.querySelector("#PostIt"));
		hide(document.querySelector("#blackBox"));
		refresh();
	});

	return Button;
}

export function createEditButton(parentNode){
	const Button = document.createElement("button");
	Button.innerText = "Edit";
	Button.addEventListener("click", () => {
		show(document.querySelector("#blackBox"));

		//create empty prompt (to fill it with the values of the obj the edit is called on)
		document.querySelector("#PostIt").append(createEditPrompt(parentNode));
		
		//get the input nodes and set value to the value of parentNode (the obj the edit is called on)
		let inputs = document.querySelector("#projectPrompt").querySelectorAll("input");
		inputs.forEach(input => {input.value = parentNode[input.id];});
	});
	return Button;
}

export function createConfirmEditButton(parentNode){

	const confirmEditButton = document.createElement("button");
	confirmEditButton.innerText = "set new Values";

	confirmEditButton.addEventListener("click",()=>{
		//parentNode takes getValue Values
		let values = getValues();
		for(let key in values){
			parentNode[key] = values[key];
		}
		deleteChildren(document.querySelector("#PostIt"));
		hide(document.querySelector("#blackBox"));
		refresh();
		showPath();
	});

	return confirmEditButton;
}