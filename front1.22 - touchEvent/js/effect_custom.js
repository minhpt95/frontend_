



	var body 			= document.getElementById("body");
	var tab1 			= document.getElementById("tab1");
	var tab2 			= document.getElementById("tab2");
	var tab3 			= document.getElementById("tab3");

	// body.ontouchmove = myScript;
	// body.addEventListener("click", openMenu);
	body.addEventListener("touchmove", Touch);
	body.addEventListener("touchstart", StartTouch);
	body.addEventListener("touchend", EndTouch);
	// var numMenu = 0;
	var screen1 = true;
	var screen2 = false;
	var screen3 = false;

	var ScreenX = 0;
	var ScreenY = 0;
	var delta = 0;


	var x1 = 0;
	var x2 = (screen.width)*1;
	var x3 = (screen.width)*2;
 	function StartTouch(e){
		ScreenX = e.touches[0].clientX;
		console.log(screen1);
		console.log(screen2);
		console.log(screen3);
 	}

	function Touch(e) {
		x = e.touches[0].clientX;
  		delta = ScreenX - x;

  		if (screen1) {
  			if (delta > 0) {
  				tab1.style.left = x1 - delta + "px";
  				tab2.style.left = x2 - delta + "px";
  				tab3.style.left = x3 - delta + "px";
  			}
  		}else if (screen2) {
  				tab1.style.left = x1 - delta + "px";
  				tab2.style.left = x2 - delta + "px";
  				tab3.style.left = x3 - delta + "px";
  		}else if (screen3) {
  			if (delta < 0) {
  				// console.log(x3);
  				tab1.style.left = x1 - delta + "px";
  				tab2.style.left = x2 - delta + "px";
  				tab3.style.left = x3 - delta + "px";
  			}
  		}
		// console.log('move');
  		// tab2.style.left = delta + "px";
 	}
 	function EndTouch(){
 		if (screen1) {
 			if (delta > 0) {
 				if(Math.abs(delta) > screen.width/10){
	  				tab1.style.left = -(screen.width)*1 + "px";
	  				tab2.style.left = 0;
	  				tab3.style.left = (screen.width)*1 + "px";
	  				screen1 = false;
	  				screen2 = true;
	  				screen3 = false;
	  				x1 = -(screen.width)*1;
	  				x2 = 0;
	  				x3 = (screen.width)*1;
	  				// tab1.style.zIndex = 1;
	  				// tab2.style.zIndex = 2;
	  				// tab3.style.zIndex = 1;
	  			}else{
	  				tab1.style.left = 0;
	  				tab2.style.left = (screen.width)*1 + "px";
	  				tab2.style.left = (screen.width)*2 + "px";
	  				screen1 = true;
	  				screen2 = false;
	  				screen3 = false;
	  			}
 			}
 			
  		}else if (screen2) {
  			if(Math.abs(delta) > screen.width/10 && delta < 0){
  				tab1.style.left = 0;
  				tab2.style.left = (screen.width)*1 + "px";
  				tab3.style.left = (screen.width)*2 + "px";
  				screen1 = true;
  				screen2 = false;
  				screen3 = false;
  				x1 = 0;
  				x2 = (screen.width)*1;
  				x3 = (screen.width)*2;
	  				// tab1.style.zIndex = 2;
	  				// tab2.style.zIndex = 1;
	  				// tab3.style.zIndex = 1;
  			}else if (Math.abs(delta) > screen.width/10 && delta > 0) {
  				tab1.style.left = -(screen.width)*2 + "px";
  				tab2.style.left = -(screen.width)*1 + "px";
  				tab3.style.left = 0;
	  			screen1 = false;
  				screen2 = false;
  				screen3 = true;
  				x1 = -(screen.width)*2;
  				x2 = -(screen.width)*1;
  				x3 = 0;
	  				// tab1.style.zIndex = 1;
	  				// tab2.style.zIndex = 1;
	  				// tab3.style.zIndex = 2;
  			}else{
  				tab1.style.left = -(screen.width)*1 + "px";
  				tab2.style.left = 0;
  				tab3.style.left = (screen.width)*1 + "px";
  				screen1 = false;
  				screen2 = true;
  				screen3 = false;
  			}
  		}else if (screen3) {
  				// console.log(delta);
 			if (delta < 0) {
 				if(Math.abs(delta) > screen.width/10){
	  				tab1.style.left = -(screen.width)*1 + "px";
	  				tab2.style.left = 0;
	  				tab3.style.left = (screen.width)*1 + "px";
	  				screen1 = false;
	  				screen2 = true;
  					screen3 = false;
	  				x1 = -(screen.width)*1;
	  				x2 = 0;
	  				x3 = (screen.width)*1;
	  				// tab1.style.zIndex = 1;
	  				// tab2.style.zIndex = 2;
	  				// tab3.style.zIndex = 1;
	  			}else{
	  				tab1.style.left = -(screen.width)*2 + "px";
	  				tab2.style.left = -(screen.width)*1 + "px";
	  				tab3.style.left = 0;
	  				screen1 = false;
	  				screen2 = false;
  					screen3 = true;
	  			}
 			}
  		}
 		delta = 0;
		// console.log('end');
 	}



