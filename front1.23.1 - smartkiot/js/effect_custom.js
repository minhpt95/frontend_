
var Nav 			= document.getElementById("Nav");
var Bar 			= document.getElementById("Bar");
var Main 			= document.getElementById("Main");
var Control_Nav 	= document.getElementById("Control_Nav");
var NAME 			= document.getElementById("NAME");

var Control_Nav_Responsive 		= document.getElementById("Control_Nav_Responsive");


Control_Nav.addEventListener("click", ControlNav);
// CloseEditFramesm.addEventListener("click", ClosePanelEditsm);
var numControlNav = 0;
function ControlNav() {
	if(numControlNav == 0){
    	Nav.style.width = '70px';
    	// Bar.style.width = 'calc(100% - 70px)';
    	Control_Nav.style.transform = 'rotate(180deg)';
    	NAME.style.display 			= 'none';
    	Bar.style.paddingLeft 		= '70px';
    	Main.style.left 			= '70px';
		Main.style.width 			= 'calc(100% - 70px)';
    	numControlNav = 1;
 	}else{
    	Nav.style.width = '250px';
    	// Bar.style.width = 'calc(100% - 250px)';
    	Control_Nav.style.transform = 'rotate(0)';
    	NAME.style.display 			= 'block';
    	Bar.style.paddingLeft 		= '250px';
    	Main.style.left 			= '250px';
		Main.style.width 			= 'calc(100% - 250px)';
    	numControlNav = 0;
 	}
}

Control_Nav_Responsive.addEventListener("click", ControlNavRespon);
// CloseEditFramesm.addEventListener("click", ClosePanelEditsm);
var numControlNavRespon = 0;
function ControlNavRespon() {
	if(numControlNavRespon == 0){
    	Nav.style.left 			= '0';
        Main.style.transform      = 'scaleX(0)';
		// Main.style.width 			= 'calc(100% - 70px)';
    	numControlNavRespon = 1;
 	}else{
    	Nav.style.left 			= '-100%';
        // Main.style.transform      = 'block';
        Main.style.transform      = 'scaleX(1)';
		// Main.style.width 			= 'calc(100% - 250px)';
    	numControlNavRespon = 0;
 	}
}