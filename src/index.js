import "./style.css";
import toDoFactory from "./toDoFactory";


//toDoFactory (title,description,dueDate,proxTime,priority,notes,checklist)
const toDos = [];
toDos.push(toDoFactory("top","toDo list fertig machen", "heute","2h",undefined,"mindestens die funktionen"));
console.log(toDos);