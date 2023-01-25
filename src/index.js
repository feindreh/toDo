import "./style.css";
import {getValues,resetValues,hide,show} from "./domStuff/headerDir/promptFunctions";
import toDoFactory from "./domStuff/contentDir/toDoFactory";
import header from "./domStuff/headerDir/header";
import content from "./domStuff/contentDir/content";
import { displayToDos } from "./domStuff/contentDir/toDoFunctions";
import {createToDoPrompt,createProjectPrompt} from "./domStuff/prompDir/promptElement";
import makeBlackBox from "./domStuff/prompDir/blackBox";
import projectFactory from "./domStuff/contentDir/projectFactory";
import Projects from "./Projects";


const container = document.querySelector("#container");


//append prompts
const projectPrompt = createProjectPrompt();
const prompt = createToDoPrompt();
const blackBox = makeBlackBox();

container.append(prompt,projectPrompt,blackBox);

//append actual content
container.append(header());
container.append(content());




const newProject = document.querySelector("#newProjectButton");
newProject.addEventListener("click",()=>{
	//show prompt
	show(projectPrompt),
	show(blackBox);
});

const addNewProjectButton = document.querySelector("#projectButton");
addNewProjectButton.addEventListener("click",()=>{
	// hide prompt
	hide(projectPrompt);
	hide(blackBox);
	// get inputs ==> make object ==> push it to Projects
	Projects.push(projectFactory(getValues(projectPrompt)));
	// reset inputs
	resetValues(projectPrompt);
	// display projects
	displayToDos(Projects,document.querySelector("#PostIt"));
});




// test stuff 




