import { Logic } from "./Logic";








export function loadLocalStorage(){
	Logic.Projects = JSON.parse(localStorage.getItem("Logic")).Projects;
}

export function saveLocalStorage(){
	localStorage.setItem("Logic", JSON.stringify(Logic));
}

