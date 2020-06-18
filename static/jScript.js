let elem = document.getElementsByClassName('menuItem');
for (let i=0; i<elem.length; i++) {
	elem[i].addEventListener('click', showSub, false);
	// elem[i].addEventListener('mouseenter', showSub, false);
	// elem[i].addEventListener('mouseleave', hideSub, false);
}
// let subMenu = document.getElementsByClassName('submenu');
// let images = new Array();
// let i = 0;

function showSub() {
	if(this.children.length>1) {
		this.children[1].style.height = "auto";
		this.children[1].style.opacity = "1";
		this.children[1].style.display = "flex";
	} else {
		return false; 
	}
}

// function hideSub() {
// 	if(this.children.length>1) {
// 		this.children[1].style.height = "0";
// 		this.children[1].style.opacity = "0";
// 		this.children[1].style.display = "none";
// 	} else {
// 		return false; 
// 	}
// }