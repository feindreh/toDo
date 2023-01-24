export function divID(id){
	const div = document.createElement("div");
	div.setAttribute("id",`${id}`);
	return div;

}

export function divClass(classs){
	const div = document.createElement("div");
	div.setAttribute("class",`${classs}`);
	return div;
}

