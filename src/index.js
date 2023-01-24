import "./style.css";
import {getValues,resetValues,hide,show} from "./headerDir/promptFunctions";
import toDoFactory from "./toDoDir/toDoFactory";
import header from "./headerDir/header";
import content from "./contentDir/content";
import { displayToDos } from "./toDoDir/displayToDos";


const container = document.querySelector("#container");
container.append(header());
container.append(content());

const newButton = document.querySelector("#newButton");
const closeButton = document.querySelector("#closeButton");
const prompt = document.querySelector("#newPrompt");


newButton.addEventListener(("click"), () => {
	// show prompt
	show(prompt);
	show(closeButton);
});

closeButton.addEventListener(("click"), () => {
	// hide prompt
	hide(prompt);
	hide(closeButton);

	// get inputs ==> make object ==> push it to Projects
	Projects.push(toDoFactory(getValues(prompt)));

	// reset inputs
	resetValues(prompt);

	// display toDos
	displayToDos(Projects,document.querySelector("#content"));
});

const Projects = [];


//setup to test better

function setValues(title,description,dueDate,proxTime){
	return{title, description, dueDate, proxTime};
}

Projects.push(toDoFactory(setValues(1,1,1,1)));
Projects.push(toDoFactory(setValues(2,2,2,2)));
//Projects.push(toDoFactory(setValues(3,3,3,3)));
//Projects.push(toDoFactory(setValues(4,4,4,4)));

displayToDos(Projects,document.querySelector("#content"));