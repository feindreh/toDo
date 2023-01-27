

let Logic = {
	Projects:[],
	id:"PostIt",
	type:"root",
	queue:[],
	ids:[],
};

export {Logic};

export function getNewID(){

	let NewID;

	for(let i = 0; i <= Logic.ids.length;i++){
		//search free id spot
		if(Logic.ids[i] === undefined){NewID = i; break;}
		if(Logic.ids[i] === ""){NewID = i; break;}
	}

	Logic.ids[NewID] = NewID;
	return NewID;
}

export function deleteOldID(oldID){
	//delete Old ID
	for(let i = 0;i<Logic.ids.length;i++){
		if(Logic.ids[i]===oldID){Logic.ids.splice(i,1);return;}
	}
}

export function loadLocalStorage(){
	Logic = JSON.parse(localStorage.getItem("Logic"));
	Logic.queue = [];
}

export function saveLocalStorage(){
	localStorage.setItem("Logic", JSON.stringify(Logic));
}

export function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch (e) {
		return e instanceof DOMException && (
		// everything except Firefox
			e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
	}
}