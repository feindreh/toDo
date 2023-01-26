import {Logic} from "../objectDir/Logic";
import { getValues, hide,show} from "../domFunctions/promptFunctions";
import { createPrompt } from "./promptElement";
import {deleteChildren, display, showPath} from "../domFunctions/toDoFunctions";
import { goBack, projectFactory, toDoFactory } from "../objectDir/LogicFuntions";



export function createNewProjectbutton(parentNode,type){
	const Button = document.createElement("button");
	Button.innerText = `new ${type}`;

	Button.addEventListener("click",()=>{
		show(document.querySelector("#blackBox"));
		document.querySelector("#PostIt").append(createPrompt(parentNode,type));
	});

	return Button;
}

export function escapeProjectButton(){
	const Button = document.createElement("button");
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

		let values = getValues(parentNode);
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