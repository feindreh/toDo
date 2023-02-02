import { divClass } from "../elementCreationDir/creation";




export function nextPath(parentNode){
	const path = document.querySelector("#path");
	const step = divClass("path");
	if(parentNode.title === ""){
		step.innerText = "Unnamed Project";
	}else{
		step.innerText = `${parentNode.title}`;
	}
	path.append(step);
}

export function previousPath(){
	const path = document.querySelector("#path");
	path.lastChild.remove();
}