const toDoFactory = (title,description,dueDate,proxTime,priority = "0") => {
	return {title,description,dueDate,priority,proxTime};
};

export default toDoFactory;