export default function createNewButton(){
	const newButton = document.createElement("button");
	newButton.setAttribute("id","newButton");
	newButton.innerText = "I should work on ...";
	return newButton;
}