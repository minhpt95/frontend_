
var Nav 			= document.getElementById("Nav");
var Bar 			= document.getElementById("Bar");
var Bar_Item        = document.getElementById("Bar_Item");
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
        Bar.style.backgroundColor =  'rgba(255, 255, 255, .0)';
        // Bar_Item.style.opacity =  '0';
        Bar_Item.style.display =  'none';
    	numControlNavRespon = 1;
 	}else{
    	Nav.style.left 			= '-100%';
        // Main.style.transform      = 'block';
        Main.style.transform      = 'scaleX(1)';
		// Main.style.width 			= 'calc(100% - 250px)';
        Bar.style.backgroundColor =  'rgba(255, 255, 255, .9)';
        // Bar_Item.style.opacity =  '1';
        Bar_Item.style.display =  'block';
    	numControlNavRespon = 0;
 	}
}