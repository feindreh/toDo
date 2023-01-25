import "./style.css";
import {getValues,resetValues,hide,show} from "./domFunctions/promptFunctions";
import toDoFactory from "./objectDir/toDoFactory";
import header from "./elementCreationDir/header";
import content from "./elementCreationDir/content";
import { displayToDos } from "./domFunctions/toDoFunctions";
import {createToDoPrompt,createProjectPrompt} from "./elementCreationDir/promptElement";
import makeBlackBox from "./elementCreationDir/blackBox";
import projectFactory from "./objectDir/projectFactory";
import Logic from "./objectDir/Logic";


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
	Logic.Projects.push(projectFactory(getValues(projectPrompt)));
	// reset inputs
	resetValues(projectPrompt);
	// display projects
	displayToDos(Logic.Projects,document.querySelector("#PostIt"));
});




// test stuff 




