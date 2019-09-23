

var bang2 = document.querySelector('#bang2');
var bang3 = document.querySelector('#bang3');

var open_bang             = document.getElementById('open');
var open_bang2             = document.getElementById('open2');

open_bang.addEventListener("click", openMenu);
open2.addEventListener("click", openMenu2);
var numMenu = 0;
function openMenu() {
    if(numMenu == 0){
        bang2.style.display = "block";
        numMenu = 1;
    }else{
        bang2.style.display = "none";
        numMenu = 0;
    }
}
var num2 = 0;
function openMenu2() {
    if(num2 == 0){
        bang3.style.display = "block";
        num2 = 1;
    }else{
        bang3.style.display = "none";
        num2 = 0;
    }
}


// $('#open').on('click', function() {
// 	// console.log("click open");
// 	var thead = document.createElement('thead');

// 	var tr = document.createElement('tr');
// 	var th = document.createElement('th');
// 	th.scope = "col";
// 	th.innerHTML = "col";
// 	var th2 = document.createElement('th');
// 	th2.scope = "col";
// 	tr.appendChild(th);
// 	tr.appendChild(th2);
// 	thead.appendChild(tr);

// 	// var a = document.createElement('a');
// 	// a.className = "ref";
// 	// 	var listItem = document.createElement('canvas');
// 	// listItem.className = "canvas";
// 	// listItem.width = "1200";
//  //    a.appendChild(listItem);

//     bang2.appendChild(thead);
// });