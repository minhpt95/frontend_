
// var loadfile = document.querySelector('#loadfile');
// loadfile.addEventListener('change', loadingggg);
// var data = document.getElementById("data");

// function loadingggg() {
// 	// window.onload = function() {

// 	  	var img = document.createElement('img');
//         img.src = window.URL.createObjectURL(loadfile.files[0]);
//         img.id = 'dataImage';
//         img.className = "hidden";
//         data.appendChild(img);

// 	  	var canvas = document.getElementById("canvas_Image");
// 	  	var ctx = canvas.getContext("2d");
// 		var output = document.getElementById("dataImage");
		
// 	    canvas.width = output.width;
// 	    canvas.height = output.height;
// 	  	ctx.drawImage(output, 0, 0);

// 	// }
// }
var imageLoader = document.getElementById('loadfile');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('canvas_Image');
var ctx = canvas.getContext('2d');


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            // canvas.width = img.width;
            // canvas.height = img.height;
            canvas.width =  img.width;
            canvas.height = 100;
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
}
$("#hienthi").click(function(){
    $("#datafile").val('width = ' +  $("#item").width() + ' ' + 'height = ' +  $("#item").height()
     + ' ' + 'top = ' +  $("#item").css("top") + ' ' + 'left = ' +  $("#item").css("left"));
    // $("#datafile").val('height = ' +  $("#item").height());
    // $("#datafile").val('top = ' +  $("#item").top());
    // $("#datafile").val('left = ' +  $("#item").left());
});

$("#item").hover(function(){
	console.log("hover");
});
// $("#loadfile").change(function(e) {
// 	var URL = window.URL;
// 	var url = URL.createObjectURL(e.target.files[0]);
// 	img.src = url;

// 	img.onload = function() {
// 	    var canvas = document.getElementById("myCanvas");
// 	    var ctx = canvas.getContext("2d");        

// 	    ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	    ctx.drawImage(img, 0, 0, 500, 500);
// 	}}
// );