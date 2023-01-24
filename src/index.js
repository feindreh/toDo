import "./style.css";
import {getValues,resetValues,hide,show} from "./headerDir/promptFunctions";
import toDoFactory from "./toDoDir/toDoFactory";
import header from "./headerDir/header";
import content from "./contentDir/content";
import { displayToDos } from "./toDoDir/toDoFunctions";


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

Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","")));
Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","")));
Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","")));
Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","")));
Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));


displayToDos(Projects,document.querySelector("#content"));