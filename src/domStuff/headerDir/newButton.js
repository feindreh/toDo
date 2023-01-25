export function createNewToDoButton(){
	const newButton = document.createElement("button");
	newButton.setAttribute("id","newButton");
	newButton.innerText = "make new toDo";
	return newButton;
}

export function createNewProjectbutton(){
	const projectButton = document.createElement("button");
	projectButton.setAttribute("id","newProjectButton");
	projectButton.innerText = "new Project";
	return projectButton;
}