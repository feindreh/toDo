export default function createCloseButton(id){
	const closeButton = document.createElement("button");
	closeButton.setAttribute("id",`${id}`);
	closeButton.innerText = "add this to Do";
	return closeButton;
}