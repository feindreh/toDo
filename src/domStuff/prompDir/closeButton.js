export default function createCloseButton(){
	const closeButton = document.createElement("button");
	closeButton.setAttribute("id","closeButton");
	closeButton.innerText = "add this to Do";
	return closeButton;
}