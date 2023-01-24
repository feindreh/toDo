const toDoFactory = (title,description,dueDate,proxTime,priority = "0",notes,checklist) => {
	return {title,description,dueDate,priority,proxTime,notes,checklist};
};

export default toDoFactory;