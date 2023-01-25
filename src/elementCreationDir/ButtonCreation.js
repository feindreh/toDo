import Logic from "../objectDir/Logic";
import { projectFactory } from "../objectDir/LogicFuntions";
import { getValues,resetValues,hide,show} from "../domFunctions/promptFunctions";
import { displaychildren } from "../domFunctions/toDoFunctions";

export function createNewToDoButton(){
	const Button = document.createElement("button");
	Button.innerText = "make new toDo";
	return Button;
}

export function createNewProjectbutton(){
	const Button = document.createElement("button");
	Button.innerText = "new Project";

	Button.addEventListener("click",()=>{
		show(document.querySelector("#blackBox"));
		show(document.querySelector("#projectPrompt"));
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

export function createCloseButton(id){
	const Button = document.createElement("button");
	Button.setAttribute("id",`${id}`);
	Button.innerText = "add this to Do";


	Button.addEventListener("click",()=>{
		//hide prompt
		hide(document.querySelector("#blackBox"));
		hide(document.querySelector("#projectPrompt"));
		//get values
		//make Object
		//push Object
		//reset values
	});


	return Button;
}




// Button.addEventListener("click",()=>{
// 	// hide prompt
// 	hide(projectPrompt);
// 	hide(blackBox);
// 	// get inputs ==> make object ==> push it to Projects
// 	Logic.Projects.push(projectFactory(getValues(projectPrompt)));
// 	// reset inputs
// 	resetValues(projectPrompt);
// 	// display projects
// 	displaychildren(Logic.Projects,document.querySelector("#PostIt"));
// });