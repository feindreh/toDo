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

//push it to Projects

export function addToProjects(Object,target){
	console.log(Object,target);
}