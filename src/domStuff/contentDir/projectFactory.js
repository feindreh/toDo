const projectFactory = (values) => {
	let type = "project";
	let id = `${count}`;
	let toDos = [];
	let title = values.title;
	let description = values.description;
	let dueDate = values.dueDate;
	let priority = 0;
	let proxTime = values.proxTime;
	count++;
	return {title,description,dueDate,priority,proxTime,type,toDos,id};
};

let count = 0;

export default projectFactory;