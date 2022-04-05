const searchInput = document.getElementById("search-input");
const allNamesInDOM = document.getElementsByClassName("name");

searchInput.addEventListener("keyup",function(event){
	const searchQuery = event.target.value.toLowerCase();
	console.log(searchQuery);
	for(let i = 0; i < allNamesInDOM.length; i++){
		const currentName = allNamesInDOM[i].textContent.toLowerCase();
		console.log(currentName);
		if(currentName.includes(searchQuery)) {
			allNamesInDOM[i].style.display = "block";
		} else {
			allNamesInDOM[i].style.display = "none";
		}
	}
});