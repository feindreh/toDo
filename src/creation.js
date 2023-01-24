export default function divID(id){
	const div = document.createElement("div");
	div.setAttribute("id",`${id}`);
	return div;

}
