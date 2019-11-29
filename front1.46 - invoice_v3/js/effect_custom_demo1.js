
// load tiff image  
document.querySelector("input").onchange = function() {
    var fileReader = new FileReader();
    fileReader.onload = function() {      

        var tiff = new Tiff({buffer: this.result});   

        var canvas = tiff.toCanvas();   
        canvas.id = 'Main_canvas';  

        document.getElementById("output").appendChild(canvas);
    };
    fileReader.readAsArrayBuffer(this.files[0]); 
};
var active = true;

var bool_zoom = false; 
var X2 = 0;
var Y2 = 0;

var XRect = 0;
var YRect = 0;
var WidthRect = 0;
var HeightRect = 0;

var DOWN = false;

$("#output").mousedown(function(){
    if (active) {
        var x = event.clientX;
        var y = event.clientY;
        var deltaX = X2;
        var deltaY = Y2;

        var deltaXRect = XRect;
        var deltaYRect = YRect;

        // console.log(event.offsetX);
        // console.log(event.clientX);
        bool_zoom = true;
        $("#border_canvas").css('cursor', 'grabbing');
        $( "#border_canvas" ).mousemove(function(){
            if(bool_zoom){
                $( "#Main_canvas" ).css({"top" : deltaY + event.clientY - y + "px", "left": deltaX +  event.clientX - x + "px"});
                Y2 = deltaY + event.clientY - y;
                X2 = deltaX + event.clientX - x;
                $("#border_canvas").css('cursor', 'grabbing');

                $( "#rect" ).css({"top" : deltaYRect + event.clientY - y + "px", "left":  deltaXRect +  event.clientX - x + "px"});
                XRect = deltaXRect + event.clientX - x;
                YRect = deltaYRect + event.clientY - y;
            }
        });
    }else{

        XRect = 0;
        YRect = 0;
        WidthRect = 0;
        HeightRect = 0;
        $( "#rect" ).css({"top" : YRect + "px", "left": XRect + "px","width" : WidthRect + "px", "height": HeightRect + "px"});

        $("#border_canvas").css('cursor', 'crosshair');
        XRect = event.offsetX;
        YRect = event.offsetY;
        $( "#rect" ).css({"top" : YRect + Y2 + "px", "left": XRect + X2 + "px"});

        DOWN = true;

    }
});
$("#output").mouseup(function(){
    if (active) {
        bool_zoom = false;
        $("#border_canvas").css('cursor', 'grab');
    }else{

        $("#border_canvas").css('cursor', 'crosshair');

        $( "#rect" ).css({"width" : WidthRect + "px", "height": HeightRect + "px"});
        DOWN = false;

    }
});

$( "#border_canvas" ).mousemove(function() {
    if (active) {
        $("#border_canvas").css('cursor', 'grab');
    }else{

        $("#border_canvas").css('cursor', 'crosshair');
        if (DOWN) {
            if (event.offsetX > XRect && event.offsetY > YRect) {
                WidthRect = event.offsetX - XRect;
                HeightRect = event.offsetY - YRect;
                $( "#rect" ).css({"width" : WidthRect - 5 + "px", 
                                "height": HeightRect - 5 + "px"});
            }
            if (event.offsetX < XRect && event.offsetY < YRect) {
                var deltaXRect = event.offsetX;
                var deltaYRect = event.offsetY;
                WidthRect =  XRect - event.offsetX;
                HeightRect = YRect - event.offsetY;
                $( "#rect" ).css({"top" : deltaYRect + 5 + "px", 
                                "left": deltaXRect + 5 + "px", 
                                "width" : WidthRect + "px", 
                                "height": HeightRect + "px"});
            }
            if (event.offsetX < XRect && event.offsetY > YRect) {
                console.log(1);
                var deltaXRect = event.offsetX;
                var deltaYRect = event.offsetY;
                WidthRect =  XRect - event.offsetX;
                HeightRect = event.offsetY - YRect;
                $( "#rect" ).css({"left" : deltaXRect + 5 + "px", "width" : WidthRect + "px", "height": HeightRect - 5 + "px"});
            }
            if (event.offsetX > XRect && event.offsetY < YRect) {
                console.log(1);
                var deltaXRect = event.offsetX;
                var deltaYRect = event.offsetY;
                WidthRect =  event.offsetX - XRect;
                HeightRect = YRect - event.offsetY;
                $( "#rect" ).css({"top" : deltaYRect + 5 + "px", "width" : WidthRect - 5 + "px", "height": HeightRect + "px"});
            }
        }

    }
});


$( "#border_canvas" ).mouseout(function() {
    if (active) {
        bool_zoom = false;
        $("#border_canvas").css('cursor', 'grab');
    }else{
        $("#border_canvas").css('cursor', 'crosshair');
    }
});
$( "#border_canvas" ).mouseover(function() {
    if (active) {
        $("#border_canvas").css('cursor', 'grab');
    }else{
        $("#border_canvas").css('cursor', 'crosshair');
    }
});


$("#setup1").click(function(){
    $("#setup1").toggleClass("color");
    active = !active;
    console.log(active);
})


