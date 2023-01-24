export default function createCloseButton(){
	const closeButton = document.createElement("button");
	closeButton.setAttribute("id","closeButton");
	closeButton.innerText = "... finishing this to Do!";
	return closeButton;
}