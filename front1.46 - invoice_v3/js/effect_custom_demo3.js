
// load tiff image  
document.querySelector("input").onchange = function() {
    var fileReader = new FileReader();
    fileReader.onload = function() {      

        var tiff = new Tiff({buffer: this.result});   

        var canvas = tiff.toCanvas();   
        canvas.id = 'Main_canvas';   
        canvas.className = 'canvas_';  

        document.getElementById("zoom").appendChild(canvas);
    };
    fileReader.readAsArrayBuffer(this.files[0]); 
};

// tỉ lệ zoom
var scale = 1;

var active = false;
var click = false;
var bool_zoom = false; 

// tọa độ hiện tại
var X1 = 0;     
var Y1 = 0;
// tọa độ tạm thời
var deltaX = 0;
var deltaY = 0;
// tọa độ click chuột
var cliX = 0;
var cliY = 0;

// rect khi kéo chuột
var XRect = 0;
var YRect = 0;
var WidthRect = 0;
var HeightRect = 0;

var Xrect1 = 0;
var Yrect1 = 0;
var Wrect1 = 0;
var Hrect1 = 0;

// tọa độ tạm thời của rect 1 khi scroll
var XR1 = 0;
var YR1 = 0;


$("#output").mousedown(function(){
    bool_zoom = true;
    cliX = event.offsetX;
    cliY = event.offsetY;
    deltaX = X1;
    deltaY = Y1;

    if (active) {
        click = true;
        resetDeltaRect();
        resetRect1();
        // $( "#rect1" ).css({"top" : YRect + "px", "left": XRect + "px", "width" : WidthRect + "px", "height": HeightRect + "px"});
    }else{

    }
});
$("#output").mouseup(function(){
    bool_zoom = false;
    if (active) {
        click = false;
        createRect(XRect, YRect, WidthRect, HeightRect);

        resetDeltaRect();

        // console.log(Xrect1);
    }else{
        Xrect1 = XR1;
        Yrect1 = YR1;
    }
});


$( "#output" ).mousemove(function() {
    if (bool_zoom && !active) {
        var deltaCliX = event.offsetX;
        var deltaCliY = event.offsetY;

        var X = deltaX - (cliX - deltaCliX);
        var Y = deltaY - (cliY - deltaCliY);
        // console.log(cliY - deltaCliY);
        $( "#Main_canvas" ).css({"top" : Y + "px", "left": X + "px"});

        XR1 = Xrect1 - (cliX - deltaCliX);
        YR1 = Yrect1 - (cliY - deltaCliY);
        // console.log(XR1)

        $( "#rect1" ).css({"top" : YR1 + "px", "left": XR1 + "px"});

        X1 = X;
        Y1 = Y;
    }
    if (active && click) {
        // console.log(1);
        // console.log("true");
        var CliX2 = event.offsetX;
        var CliY2 = event.offsetY;
        var deltaCliX = event.offsetX;
        var deltaCliY = event.offsetY;


        if (deltaCliX > cliX && deltaCliY > cliY ) {
            var deltaCliX = CliX2 - cliX;
            var deltaCliY = CliY2 - cliY;
            $( "#delta_rect" ).css({"top" : cliY + "px", "left": cliX + "px",
            "width" : deltaCliX - 5 + "px", "height":  deltaCliY - 5 + "px"});

            XRect = cliX;
            YRect = cliY;
            WidthRect = deltaCliX;
            HeightRect = deltaCliY;

        }else if(deltaCliX < cliX && deltaCliY > cliY){
            var deltaCliX = CliX2 - cliX;
            var deltaCliY = CliY2 - cliY;
            $( "#delta_rect" ).css({"top" : cliY + "px", "left": cliX + deltaCliX + 5  + "px",
            "width" : -deltaCliX + "px", "height":  deltaCliY - 5 + "px"});

            XRect = cliX + deltaCliX;
            YRect =  cliY;
            WidthRect = -deltaCliX;
            HeightRect = deltaCliY;

        }else if(deltaCliX > cliX && deltaCliY < cliY){
            var deltaCliX = CliX2 - cliX;
            var deltaCliY = CliY2 - cliY;
            $( "#delta_rect" ).css({"top" : cliY + deltaCliY + 5 + "px", "left": cliX  + "px",
            "width" : deltaCliX - 5 + "px", "height":  -deltaCliY + "px"});

            XRect = cliX;
            YRect = cliY + deltaCliY;
            WidthRect = deltaCliX;
            HeightRect = -deltaCliY;

        }else if(deltaCliX < cliX && deltaCliY < cliY){
            var deltaCliX = CliX2 - cliX;
            var deltaCliY = CliY2 - cliY;
            $( "#delta_rect" ).css({"top" : cliY + deltaCliY + 5 + "px", "left": cliX + deltaCliX + 5  + "px",
            "width" : -deltaCliX + "px", "height":  -deltaCliY + "px"});

            XRect = cliX + deltaCliX;
            YRect = cliY + deltaCliY;
            WidthRect = -deltaCliX;
            HeightRect = -deltaCliY;
        }
    }
});

$("#output").mouseout(function(){
    bool_zoom = false;
});


$( ".active" ).click(function() {
    $( this ).toggleClass("color");
    appendImage(this);
});

function appendImage( item ){
    active = !active;
    console.log(active);
    // console.log(item.id);
}
function createRect(XRect, YRect, WidthRect, HeightRect){
    // console.log(123);
    Xrect1 = XRect;
    Yrect1 = YRect;
    Wrect1 = WidthRect;
    Hrect1 = HeightRect;
    $( "#rect1" ).css({"top" : Yrect1 + "px", "left": Xrect1 + "px","width" : Wrect1 + "px", "height": Hrect1 + "px"});
}
$( "#border_canvas" ).mouseout(function() {

});
$( "#border_canvas" ).mouseover(function() {

});

function resetDeltaRect(){
    XRect = 0;
    YRect = 0;
    WidthRect = 0;
    HeightRect = 0;
    $( "#delta_rect" ).css({"top" : YRect + "px", "left": XRect + "px","width" : WidthRect + "px", "height": HeightRect + "px"});
    // $( "#delta_rect" ).css({"transform" : 'scale(' + scale + ')'});
}
function resetRect1(){  
    $( "#rect1" ).css({"top" : 0 + "px", "left": 0 + "px","width" : 0 + "px", "height": 0 + "px"});
}

function zoom(event) {
    console.log(1);
    event.preventDefault();
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })
    (!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;
    var isChromium = /chrome/i.test( navigator.userAgent );
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isBlink = (isChrome || isOpera) && !!window.CSS;


    var output = 'Detecting browsers by ducktyping:<hr>';
    output += 'isFirefox: ' + isFirefox + '<br>';
    output += 'isChrome: ' + isChrome + '<br>';
    output += 'isChromium: ' + isChromium + '<br>';
    output += 'isSafari: ' + isSafari + '<br>';
    output += 'isOpera: ' + isOpera + '<br>';
    output += 'isIE: ' + isIE + '<br>';
    output += 'isEdge: ' + isEdge + '<br>';
    output += 'isBlink: ' + isBlink + '<br>';
    console.log(output);

    if (isFirefox) {
        scale += event.deltaY * -0.01;
    }if (isChromium) {
        scale += event.deltaY * -0.001;
    }else{
        scale += event.deltaY * -0.001;
    }
    
    

    scale = Math.min(Math.max(.125, scale), 8);
    // el.style.transform = 'scale(' + scale + ')';
    $('#zoom').css({"transform" : 'scale(' + scale + ')'});
    $('#rect1').css({"transform" : 'scale(' + scale + ')'});
    // insert anything if want zoooooooooooooooooom
    // $('.zoom2').css({"transform" : 'scale(' + scale + ')'});
}
const el = document.getElementById('output');
el.onwheel = zoom;

