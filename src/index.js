import "./style.css";
import header from "./elementCreationDir/header";
import content from "./elementCreationDir/content";
import makeBlackBox from "./elementCreationDir/blackBox";
import { display } from "./domFunctions/toDoFunctions";
import {Logic}from "./objectDir/Logic";



const container = document.querySelector("#container");


//append prompts
const blackBox = makeBlackBox();
container.append(blackBox);

//append actual content
container.append(header());
container.append(content());

Logic.queue.push("PostIt");
display(Logic);

