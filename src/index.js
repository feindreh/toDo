import "./style.css";
import {getValues,resetValues,hide,show} from "./domStuff/headerDir/promptFunctions";
import toDoFactory from "./domStuff/contentDir/toDoFactory";
import header from "./domStuff/headerDir/header";
import content from "./domStuff/content";
import { displayToDos } from "./domStuff/contentDir/toDoFunctions";
import createPrompt from "./domStuff/prompDir/createPrompt";


const container = document.querySelector("#container");

//append prompts
const prompt = createPrompt();
container.append(prompt);

//append actual content
container.append(header());
container.append(content());


const newButton = document.querySelector("#newButton");
const closeButton = document.querySelector("#closeButton");


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
	displayToDos(Projects,document.querySelector("#PostIt"));
});

const Projects = [];


//setup to test better

function setValues(title,description,dueDate,proxTime){
	return{title, description, dueDate, proxTime};
}

// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));
// Projects.push(toDoFactory(setValues("Überleben","Ich sollte versuchen den Tag zu überleben","bis morgen","2h")));
// Projects.push(toDoFactory(setValues("Nach Hause fahren","mit dem zu nach FT fahren","bis morgen","6h")));


displayToDos(Projects,document.querySelector("#PostIt"));