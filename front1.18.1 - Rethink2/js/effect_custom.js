






// VALUE __________________________________________________________________________________________________________________
	
	var OpenBar 			= document.getElementById("OpenBar");
	var Bar 				= document.getElementById("Bar");
	var Icon 				= document.getElementById("Icon");
	var Index 				= document.getElementById("index");
	var OPEN_MULTI 			= document.getElementById("OPEN_MULTI");
	var ICON 				= document.getElementById("ICON");
	var ListItem 			= document.getElementById("Listitem");
	var multiSelect 		= document.getElementById("multiSelect");
	var AddBanner 			= document.getElementById("AddBanner");
	var PanelAddBanner 		= document.getElementById("PanelAddBanner");
	var AddPannerButton 	= document.getElementById("AddPannerButton");
	var CloseAddBanner 		= document.getElementById("CloseAddBanner");

	var EDIT 				= document.getElementsByClassName("EDIT");
	var EDIT_BUTTON 		= document.getElementsByClassName("EDIT_BUTTON");
	var EDIT_FRAME 			= document.getElementsByClassName("EDIT_FRAME");
	var CloseEditFrame 		= document.getElementsByClassName("CloseEditFrame");
	var bigsizeID 			= document.getElementsByClassName("bigsizeID");

	var EDITsm 				= document.getElementById("EDITsm");
	var EDIT_BUTTONsm 		= document.getElementById("EDIT_BUTTONsm");
	var EDIT_FRAMEsm 		= document.getElementById("EDIT_FRAMEsm");
	var CloseEditFramesm 	= document.getElementById("CloseEditFramesm");



	


// ALL SIZE ________________________________________________________________________________________________________________


		// OPEN ADD BANNER
		var Panelhover = 0;
		var Panelclick = 0;

		AddPannerButton.onmouseover = function(){
			Panelhover = 1;

			// if (Panelhover == 1 && Panelclick == 0) {
			// 	PanelAddBanner.style.display = 'block';
			// }
			// if (Panelhover == 0 && Panelclick == 0) {
			// 	PanelAddBanner.style.display = 'none';
			// }
			// if (Panelhover == 1 && Panelclick == 1) {
			// 	PanelAddBanner.style.display = 'block';
			// }
		};

		AddPannerButton.onmouseout = function(){
			Panelhover = 0;
			// if (Panelclick == 0) {
			// 	PanelAddBanner.style.display = 'none';
			// }
		};

		AddBanner.onmouseover = function(){
			if (Panelhover == 1 && Panelclick == 0) {
				PanelAddBanner.style.display = 'block';
			}
			if (Panelhover == 0 && Panelclick == 0) {
				PanelAddBanner.style.display = 'none';
			}
			if (Panelhover == 1 && Panelclick == 1) {
				PanelAddBanner.style.display = 'block';
			}
		}
		AddBanner.onmouseout = function(){
			if (Panelclick == 0) {
				PanelAddBanner.style.display = 'none';
			}
		};

		AddPannerButton.addEventListener("click", OpenPanelAdd);
		CloseAddBanner.addEventListener("click", ClosePanelAdd);
		var numPanel = 0;
		function OpenPanelAdd() {
			Panelclick = 1;
			// if (Panelhover == 1 && Panelclick == 1) {
		 	if(numPanel == 0){
		    	PanelAddBanner.style.top = '40px';
		    	PanelAddBanner.style.opacity = '1';
		    	numPanel = 1;
		 	}
		 	// }
		}
		function ClosePanelAdd() {
			Panelclick = 0;
		 	if(numPanel == 1){
	 			PanelAddBanner.style.top = '70px';
		    	PanelAddBanner.style.opacity = '0';
		    	numPanel = 0;
		    	// PanelAddBanner.style.display = 'none';
		 	}
		}


		// OPEN EDIT

		var EDIT2	= this.document.getElementsByClassName("EDIT_FRAME");
		var btn2	= this.document.getElementsByClassName("EDIT_BUTTON");
		var Item	= this.document.getElementsByClassName("Item");

		function echo(){
			for (var i = 0; i < btn2.length; i++) {
				btn2[i].classList.remove("mystyle");
			}
		}
		var vt = -1;
		function over(){
			for (var i = 0; i < EDIT_FRAME.length; i++) {
					// console.log(Item);
				Item[i].onmouseover = function(){
					console.log(i);
				}
				// Item[0].onmouseover = function(){
				// 	console.log('0');
				// }
				// Item[1].onmouseover = function(){
				// 	console.log('1');
				// }
			}
		}

		// function echo(){
		// 	for (var i = 0; i < btn2.length; i++) {
		// 		// this.onclick = function(){
		// 			console.log(i);
		// 			console.log(btn2[i]);

		// 		// }
		// 		// btn2[1].onclick = function(){
		// 		// 	console.log('hello2');
		// 		// }
		// 		// console.log(i);
		// 	}
		// 	// console.log('hello');
		// 	// for (var i = 0; i < EDIT2.length; i++) {
		// 	// 	// console.log(EDIT2[i]);	
		// 	// 	// console.log(i);	
		// 	// 	btn2[i].onclick = function(){
		// 	// 		console.log(i);
		// 	// 	}
		// 	// }
		// 	 // var div = document.getElementById("mydiv");
		// 	// for (var i = 0; i < EDIT2.length; i++) {
		// 	// 	EDIT2[i].mouseIsOver = false;
		// 	// }
		// 	// for (var i = 0; i < EDIT2.length; i++) {
		// 		// console.log(EDIT2[i]);
		// 		// EDIT2[i].onmouseover = function(){
		// 			// console.log(EDIT2);
		// 			// INDEX_OF_COLUMN = i;
		// 			// console.log(EDIT2[i]);
		// 			// console.log(EDIT2[i]);
		// 		// };
		// 	// }
		// 	// for (var i = 0; i < EDIT2.length; i++) {
		// 	// 	// console.log(EDIT2);
		// 	// 	// var EDIT3;
		// 	// 	if (EDIT2[i].onmouseover()) {
		// 	// 		console.log('true');
		// 	// 	}
		// 	// 	// EDIT2[i].onmouseover = function(){
		// 	// 	// 	console.log(EDIT2[i]);
		// 	// 	// 	// EDIT3	= EDIT2[i];
		// 	// 	// }
				
		// 	// 	// EDIT2[i].onmouseout = function(){
		// 	// 	// 	EDIT3	= null;
		// 	// 	// }
		// 	// }
		// 	// console.log(EDIT3);
		// }
		// function iShover(){
		// 	console.log(this);
		// }

		// var INDEX_OF_COLUMN = 0;
		// index.onmouseover = function(){
		// 	// for (var i = 0; i < bigsizeID.length; i++) {
		// 		bigsizeID[i].onmouseover = function(){
		// 			INDEX_OF_COLUMN = i;
		// 			console.log(INDEX_OF_COLUMN);
		// 		};
		// 	// }
		// }
		
		// for (var i = 0; i < EDIT.length; i++) {
			
		// 	var Edithover = 0;
		// 	var Editclick = 0;
		// 	EDIT_BUTTON[i].onmouseover = function(){
		// 		Edithover = 1;
		// 		console.log(EDIT.length);
		// 		// EDIT_FRAME.style.display = 'block';
		// 	};

		// 	EDIT_BUTTON[i].onmouseout = function(){
		// 		Edithover = 0;
		// 		// EDIT_FRAME.style.display = 'none';
		// 	};

		// 	EDIT[i].onmouseover = function(){
		// 		Edithover = 1;
		// 		if (Edithover == 1 && Editclick == 0) {
		// 			EDIT_FRAME[i].style.display = 'block';
		// 			// EDIT_FRAME.style.transform = 'scale(1)';
		// 		}
		// 		if (Edithover == 0 && Editclick == 0) {
		// 			EDIT_FRAME[i].style.display = 'none';
		// 			// EDIT_FRAME.style.transform = 'scale(0';
		// 		}
		// 		if (Edithover == 1 && Editclick == 1) {
		// 			EDIT_FRAME[i].style.display = 'block';
		// 			// EDIT_FRAME.style.transform = 'scale(1)';
		// 		}
		// 	}
		// 	EDIT[i].onmouseout = function(){
		// 		// Edithover = 0;
		// 		if (Editclick == 0) {
		// 			EDIT_FRAME[i].style.display = 'none';
		// 			// EDIT_FRAME.style.transform = 'scale(0)';
		// 		}
		// 	};
		// 	EDIT_BUTTON[i].addEventListener("click", OpenPanelEdit);
		// 	// CloseEditFrame[i].addEventListener("click", ClosePanelEdit);
		// 	var numPanelEdit = 0;
		// 	function OpenPanelEdit() {
		// 		Editclick = 1;
		// 	    // console.log(numPanelEdit);
		// 		// if (Panelhover == 1 && Panelclick == 1) {
		// 	 	if(numPanelEdit == 0){
		// 	    	EDIT_FRAME[i].style.left = '-285px';
		// 	    	EDIT_FRAME[i].style.opacity = '1';
		// 	    	numPanelEdit = 1;
		// 	 	}
		// 	 	// }
		// 	}
		// 	function ClosePanelEdit() {
		// 		Editclick = 0;
		// 	 	if(numPanelEdit == 1){
		// 	    	// console.log(numPanelEdit);
		// 	    	EDIT_FRAME[i].style.left = '-310px';
		// 	    	// console.log(numPanelEdit);
		// 	    	EDIT_FRAME[i].style.opacity = '0';
		// 	    	// console.log(numPanelEdit);
		// 	    	numPanelEdit = 0;
		// 	    	// console.log(numPanelEdit);
		// 	    	// PanelAddBanner.style.display = 'none';
		// 	 	}
		// 	}
		// }




// BIG SIZE __________________________________________________________________________________________________________________
	// OPEN MULTI FOR BIGSIZE
	if (screen.width > 890) {
		// OPEN BAR
		Bar.onmouseover = function(){
			multiSelect.style.display = 'block';
		};

		Bar.onmouseout = function(){
			multiSelect.style.display = 'none';
		};


	}



// SMALL SIZE __________________________________________________________________________________________________________________
	// OPEN NAVIGATION

	if (screen.width < 1024) {
		OpenBar.addEventListener("click", OpenNav);

		var numNAV = 0;
		function OpenNav() {
		 	if(numNAV == 0){
		    	Bar.style.left = '0px';
		    	Icon.classList.remove("fa-bars");
		    	Icon.classList.add("fa-times");
			    Index.style.display = 'none';
		    	numNAV = 1;
		 	}else{
	 			Bar.style.left = '-100%';
		    	Icon.classList.remove("fa-times");
		    	Icon.classList.add("fa-bars");
				Index.style.display = 'block';
		    	numNAV = 0;
		 	}
		}

		// OPEN MULTI FOR SMALLSIZE
		var numMULTI = 0;
		OPEN_MULTI.addEventListener("click", OpenMulti);

		function OpenMulti() {
		 	if(numMULTI == 0){
		    	ListItem.style.height = '184px';
		    	ICON.style.transform = 'rotate(90deg)';
		    	multiSelect.style.zIndex = '1';
		    	numMULTI = 1;
		 	}else{
		    	ListItem.style.height = '46px';
		    	ICON.style.transform = 'rotate(0)';
		    	multiSelect.style.zIndex = '0';
		    	numMULTI = 0;
		 	}
	 	}

	 	// OPEN EDIT
		var Edithoversm = 0;
		var Editclicksm = 0;
		EDIT_BUTTONsm.onmouseover = function(){
			Edithoversm = 1;
		};

		EDIT_BUTTONsm.onmouseout = function(){
			Edithoversm = 0;
		};

		EDITsm.onmouseover = function(){
			Edithoversm = 1;
			if (Edithoversm == 1 && Editclicksm == 0) {
				EDIT_FRAMEsm.style.display = 'block';
			}
			if (Edithoversm == 0 && Editclicksm == 0) {
				EDIT_FRAMEsm.style.display = 'none';
			}
			if (Edithoversm == 1 && Editclicksm == 1) {
				EDIT_FRAMEsm.style.display = 'block';
			}
		}
		EDITsm.onmouseout = function(){
			if (Editclicksm == 0) {
				EDIT_FRAMEsm.style.display = 'none';
			}
		};
		EDIT_BUTTONsm.addEventListener("click", OpenPanelEditsm);
		CloseEditFramesm.addEventListener("click", ClosePanelEditsm);
		var numPanelEdit = 0;
		function OpenPanelEditsm() {
			Editclicksm = 1;
		    console.log(numPanelEdit);
		 	if(numPanelEdit == 0){
		    	EDIT_FRAMEsm.style.left = '-100px';
		    	EDIT_FRAMEsm.style.top 	= '50px';
		    	EDIT_FRAMEsm.style.opacity = '1';
		    	numPanelEdit = 1;
		 	}
		}
		function ClosePanelEditsm() {
			Editclicksm = 0;
		 	if(numPanelEdit == 1){
		    	EDIT_FRAMEsm.style.left = '-100px';
		    	EDIT_FRAMEsm.style.top 	= '70px';
		    	EDIT_FRAMEsm.style.opacity = '0';
		    	numPanelEdit = 0;
		 	}
		}
	}