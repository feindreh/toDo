const projectFactory = (values) => {
	let type = "project";
	let projects = [];
	let title = values.title;
	let description = values.description;
	let dueDate = values.dueDate;
	let priority = 0;
	let proxTime = values.proxTime;
	return {title,description,dueDate,priority,proxTime,type,projects};
};

export default projectFactory;