import "./style.css";
import header from "./elementCreationDir/header";
import content from "./elementCreationDir/content";
import {displaychildren } from "./domFunctions/toDoFunctions";
import {createToDoPrompt,createProjectPrompt} from "./elementCreationDir/promptElement";
import makeBlackBox from "./elementCreationDir/blackBox";
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



displaychildren(Logic.Projects,document.querySelector("#PostIt"));


// test stuff 




