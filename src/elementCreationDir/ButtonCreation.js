import Logic from "../objectDir/Logic";

export function createNewToDoButton(){
	const Button = document.createElement("button");
	Button.setAttribute("id","newButton");
	Button.innerText = "make new toDo";
	return Button;
}

export function createNewProjectbutton(){
	const Button = document.createElement("button");
	Button.setAttribute("id","newProjectButton");
	Button.innerText = "new Project";
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
		console.log(Logic.Projects);
	});
	return logButton;
}