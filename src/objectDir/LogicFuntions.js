import { display } from "../domFunctions/toDoFunctions";
import { Logic } from "./Logic";

//make object
export function projectFactory(values){
	let type = "project";
	let id = `${count}`;
	let Projects = [];
	let title = values.title;
	let description = values.description;
	let dueDate = values.dueDate;
	let priority = 0;
	let proxTime = values.proxTime;
	count++;
	return {title,description,dueDate,priority,proxTime,type,Projects,id};
}

let count = 0;

export function toDoFactory(values){
	let type = "toDo";
	let title = values.title;
	let description = values.description;
	let dueDate = values.dueDate;
	let priority = 0;
	let proxTime = values.proxTime;
	return {title,description,dueDate,priority,proxTime,type};
}

export function goBack(){
	const queue = Logic.queue;
	//check if root
	if(queue[queue.length - 1] === "PostIt"){return true;}

	const buildQueue = Array.from(queue);
	buildQueue.pop();
	buildQueue.shift();

	let buildObject = find(Logic,buildQueue);
	Logic.queue.pop();
	display(buildObject);
}
 
function find(object,restQueue){

	if(restQueue.length === 0){return object;}

	const search = restQueue.shift();

	for(let i = 0; i< object.Projects.length; i++){

		let newObj = object.Projects[i];
		if(newObj.id === search){
			return find(newObj,restQueue);
		}
	}
	
}
