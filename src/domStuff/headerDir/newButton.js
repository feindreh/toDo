export default function createNewButton(){
	const newButton = document.createElement("button");
	newButton.setAttribute("id","newButton");
	newButton.innerText = "make new toDo";
	return newButton;
}