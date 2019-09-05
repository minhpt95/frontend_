



	var open_menu 			= document.getElementById("open_menu");
	var menu 			= document.getElementById("menu");
	var main 			= document.getElementById("main");
	open_menu.addEventListener("click", openMenu);
		var numMenu = 0;
		
		function openMenu() {
		 	if(numMenu == 0){
		 		main.style.left = "-100%";
		 		menu.style.left = "15%";
		 		numMenu = 1;
		 		console.log("1");
		 	}else{
		 		main.style.left = "0";
		 		menu.style.left = "-100%";
		 		numMenu = 0;
		 		console.log("0");
		 	}
	 	}




// // VALUE __________________________________________________________________________________________________________________
	
// 	var OpenBar 			= document.getElementById("OpenBar");
// 	var Bar 				= document.getElementById("Bar");
// 	var Icon 				= document.getElementById("Icon");
// 	var Index 				= document.getElementById("index");
// 	var OPEN_MULTI 			= document.getElementById("OPEN_MULTI");
// 	var ICON 				= document.getElementById("ICON");
// 	var ListItem 			= document.getElementById("Listitem");
// 	var multiSelect 		= document.getElementById("multiSelect");
// 	var AddBanner 			= document.getElementById("AddBanner");
// 	var PanelAddBanner 		= document.getElementById("PanelAddBanner");
// 	var AddPannerButton 	= document.getElementById("AddPannerButton");
// 	var CloseAddBanner 		= document.getElementById("CloseAddBanner");

// 	var EDIT 				= document.getElementsByClassName("EDIT");
// 	var EDIT_BUTTON 		= document.getElementsByClassName("EDIT_BUTTON");
// 	var EDIT_FRAME 			= document.getElementsByClassName("EDIT_FRAME");
// 	var CloseEditFrame 		= document.getElementsByClassName("CloseEditFrame");
// 	var bigsizeID 			= document.getElementsByClassName("bigsizeID");

// 	var EDITsm 				= document.getElementById("EDITsm");
// 	var EDIT_BUTTONsm 		= document.getElementById("EDIT_BUTTONsm");
// 	var EDIT_FRAMEsm 		= document.getElementById("EDIT_FRAMEsm");
// 	var CloseEditFramesm 	= document.getElementById("CloseEditFramesm");



	


// // ALL SIZE ________________________________________________________________________________________________________________


// 		// OPEN ADD BANNER
// 		var Panelhover = 0;
// 		var Panelclick = 0;

// 		AddPannerButton.onmouseover = function(){
// 			Panelhover = 1;

// 			// if (Panelhover == 1 && Panelclick == 0) {
// 			// 	PanelAddBanner.style.display = 'block';
// 			// }
// 			// if (Panelhover == 0 && Panelclick == 0) {
// 			// 	PanelAddBanner.style.display = 'none';
// 			// }
// 			// if (Panelhover == 1 && Panelclick == 1) {
// 			// 	PanelAddBanner.style.display = 'block';
// 			// }
// 		};

// 		AddPannerButton.onmouseout = function(){
// 			Panelhover = 0;
// 			// if (Panelclick == 0) {
// 			// 	PanelAddBanner.style.display = 'none';
// 			// }
// 		};

// 		AddBanner.onmouseover = function(){
// 			if (Panelhover == 1 && Panelclick == 0) {
// 				PanelAddBanner.style.display = 'block';
// 			}
// 			if (Panelhover == 0 && Panelclick == 0) {
// 				PanelAddBanner.style.display = 'none';
// 			}
// 			if (Panelhover == 1 && Panelclick == 1) {
// 				PanelAddBanner.style.display = 'block';
// 			}
// 		}
// 		AddBanner.onmouseout = function(){
// 			if (Panelclick == 0) {
// 				PanelAddBanner.style.display = 'none';
// 			}
// 		};

// 		AddPannerButton.addEventListener("click", OpenPanelAdd);
// 		CloseAddBanner.addEventListener("click", ClosePanelAdd);
// 		var numPanel = 0;
// 		function OpenPanelAdd() {
// 			Panelclick = 1;
// 			// if (Panelhover == 1 && Panelclick == 1) {
// 		 	if(numPanel == 0){
// 		    	PanelAddBanner.style.top = '40px';
// 		    	PanelAddBanner.style.opacity = '1';
// 		    	numPanel = 1;
// 		 	}
// 		 	// }
// 		}
// 		function ClosePanelAdd() {
// 			Panelclick = 0;
// 		 	if(numPanel == 1){
// 	 			PanelAddBanner.style.top = '70px';
// 		    	PanelAddBanner.style.opacity = '0';
// 		    	numPanel = 0;
// 		    	// PanelAddBanner.style.display = 'none';
// 		 	}
// 		}


// 		// OPEN EDIT

// 		var EDIT2	= this.document.getElementsByClassName("EDIT_FRAME");
// 		var btn2	= this.document.getElementsByClassName("EDIT_BUTTON");
// 		var Item	= this.document.getElementsByClassName("Item");

// 		function echo(){
// 			for (var i = 0; i < btn2.length; i++) {
// 				btn2[i].classList.remove("mystyle");
// 			}
// 		}
// 		var vt = -1;
// 		function over(){
// 			for (var i = 0; i < EDIT_FRAME.length; i++) {
// 					// console.log(Item);
// 				Item[i].onmouseover = function(){
// 					console.log(i);
// 				}
// 				// Item[0].onmouseover = function(){
// 				// 	console.log('0');
// 				// }
// 				// Item[1].onmouseover = function(){
// 				// 	console.log('1');
// 				// }
// 			}
// 		}

		



// // BIG SIZE __________________________________________________________________________________________________________________
// 	// OPEN MULTI FOR BIGSIZE
// 	if (screen.width > 890) {
// 		// OPEN BAR
// 		Bar.onmouseover = function(){
// 			multiSelect.style.display = 'block';
// 		};

// 		Bar.onmouseout = function(){
// 			multiSelect.style.display = 'none';
// 		};


// 	}



// // SMALL SIZE __________________________________________________________________________________________________________________
// 	// OPEN NAVIGATION

// 	if (screen.width < 1024) {
// 		OpenBar.addEventListener("click", OpenNav);

// 		var numNAV = 0;
// 		function OpenNav() {
// 		 	if(numNAV == 0){
// 		    	Bar.style.left = '0px';
// 		    	Icon.classList.remove("fa-bars");
// 		    	Icon.classList.add("fa-times");
// 			    Index.style.display = 'none';
// 		    	numNAV = 1;
// 		 	}else{
// 	 			Bar.style.left = '-100%';
// 		    	Icon.classList.remove("fa-times");
// 		    	Icon.classList.add("fa-bars");
// 				Index.style.display = 'block';
// 		    	numNAV = 0;
// 		 	}
// 		}

// 		// OPEN MULTI FOR SMALLSIZE
// 		var numMULTI = 0;
// 		OPEN_MULTI.addEventListener("click", OpenMulti);

// 		function OpenMulti() {
// 		 	if(numMULTI == 0){
// 		    	ListItem.style.height = '184px';
// 		    	ICON.style.transform = 'rotate(90deg)';
// 		    	multiSelect.style.zIndex = '1';
// 		    	numMULTI = 1;
// 		 	}else{
// 		    	ListItem.style.height = '46px';
// 		    	ICON.style.transform = 'rotate(0)';
// 		    	multiSelect.style.zIndex = '0';
// 		    	numMULTI = 0;
// 		 	}
// 	 	}

// 	 	// OPEN EDIT
// 		var Edithoversm = 0;
// 		var Editclicksm = 0;
// 		EDIT_BUTTONsm.onmouseover = function(){
// 			Edithoversm = 1;
// 		};

// 		EDIT_BUTTONsm.onmouseout = function(){
// 			Edithoversm = 0;
// 		};

// 		EDITsm.onmouseover = function(){
// 			Edithoversm = 1;
// 			if (Edithoversm == 1 && Editclicksm == 0) {
// 				EDIT_FRAMEsm.style.display = 'block';
// 			}
// 			if (Edithoversm == 0 && Editclicksm == 0) {
// 				EDIT_FRAMEsm.style.display = 'none';
// 			}
// 			if (Edithoversm == 1 && Editclicksm == 1) {
// 				EDIT_FRAMEsm.style.display = 'block';
// 			}
// 		}
// 		EDITsm.onmouseout = function(){
// 			if (Editclicksm == 0) {
// 				EDIT_FRAMEsm.style.display = 'none';
// 			}
// 		};
// 		EDIT_BUTTONsm.addEventListener("click", OpenPanelEditsm);
// 		CloseEditFramesm.addEventListener("click", ClosePanelEditsm);
// 		var numPanelEdit = 0;
// 		function OpenPanelEditsm() {
// 			Editclicksm = 1;
// 		    console.log(numPanelEdit);
// 		 	if(numPanelEdit == 0){
// 		    	EDIT_FRAMEsm.style.left = '-100px';
// 		    	EDIT_FRAMEsm.style.top 	= '50px';
// 		    	EDIT_FRAMEsm.style.opacity = '1';
// 		    	numPanelEdit = 1;
// 		 	}
// 		}
// 		function ClosePanelEditsm() {
// 			Editclicksm = 0;
// 		 	if(numPanelEdit == 1){
// 		    	EDIT_FRAMEsm.style.left = '-100px';
// 		    	EDIT_FRAMEsm.style.top 	= '70px';
// 		    	EDIT_FRAMEsm.style.opacity = '0';
// 		    	numPanelEdit = 0;
// 		 	}
// 		}
// 	}