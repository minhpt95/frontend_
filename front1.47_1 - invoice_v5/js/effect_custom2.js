
// ONTOP            : khối cao nhất, không thay đổi, dùng để tính toán tọa độ khi move
// custom_canvas    : khối chứa tất cả các khối con của canvas
// top_canvas       : khối trên cùng 
// middle_canvas    : khối ở giữa để lưu tọa độ các rect
// bound_canvas     : khôi để cài đặt canvas

// kích thước canvas
var width_canvas = 0;
var height_canvas = 0;

// tọa độ canvas thực /////////////////////////
var XCanvas = 0;
var YCanvas = 0;
// tọa độ canvas tạm thời /////////////////////////
var XCanvas_ = 0;
var YCanvas_ = 0;

// tọa độ top canvas /////////////////////////
var XTopCanvas = 0;
var YTopCanvas = 0;


// tọa độ mouse khi click
var Xmouse = 0;
var Ymouse = 0;


// deltarect
var delta_rect_ = false;
// rect khi kéo chuột
var XRect = 0;
var YRect = 0;
var WidthRect = 0;
var HeightRect = 0;

// các rect
var allrect = false;
var rect1 = false;
var Xrect1 = 0;
var Yrect1 = 0;
var Wrect1 = 0;
var Hrect1 = 0;
var scale1 = 0;

var rect2 = false;
var Xrect2 = 0;
var Yrect2 = 0;
var Wrect2 = 0;
var Hrect2 = 0;
var scale2 = 0;

var rect3 = false;
var Xrect3 = 0;
var Yrect3 = 0;
var Wrect3 = 0;
var Hrect3 = 0;
var scale3 = 0;

var rect4 = false;
var Xrect4 = 0;
var Yrect4 = 0;
var Wrect4 = 0;
var Hrect4 = 0;
var scale4 = 0;

var rect5 = false;
var Xrect5 = 0;
var Yrect5 = 0;
var Wrect5 = 0;
var Hrect5 = 0;
var scale5 = 0;

// tọa độ tạm thời
// var XMoveMouse = 0;
// var YMoveMouse = 0;


// tỉ lệ zoom
var scale = 1;
// tỉ lễ mỗi lần lăn chuột
var alphaScale = 0.125;
// tỉ lệ bù trừ thực tế
var actScale = 1;
var scareR1 = 1;


// load tiff image  
document.querySelector("input").onchange = function() {
    var fileReader = new FileReader();
    fileReader.onload = function() {    
        var tiff = new Tiff({buffer: this.result});   

        var canvas = tiff.toCanvas();   
        canvas.id = 'Main_canvas';   
        canvas.className = 'canvas_';  
        document.getElementById("bound_canvas").appendChild(canvas);

        width_canvas = $('#Main_canvas').attr('width');
        height_canvas = $('#Main_canvas').attr('height');
        console.log(width_canvas)
        $('#top_canvas').css({"width" : width_canvas + "px", "height": height_canvas + "px"});
        $('#middle_canvas').css({"width" : width_canvas + "px", "height": height_canvas + "px"});
        $('#bound_canvas').css({"width" : width_canvas + "px", "height": height_canvas + "px"});
        // $('#custom_canvas').css({"width" : width_canvas + "px", "height": height_canvas + "px"});
    };
    fileReader.readAsArrayBuffer(this.files[0]); 
};


var bool_move = false; 
$("#output").mousedown(function(){
    if (!allrect) {
        resetDeltaRect();
        bool_move = true;

        // khởi tạo tọa độ tạm thời
        Xmouse = event.offsetX;
        Ymouse = event.offsetY;
        XCanvas_ = XCanvas;
        YCanvas_ = YCanvas;
    }else{
        delta_rect_ = true;
        resetDeltaRect();

        Xmouse = event.offsetX;
        Ymouse = event.offsetY;

    }
    
});
$("#output").mouseup(function(){
    bool_move = false;
    delta_rect_ = false;
    // if (checkAllrect()) {

    // }
    resetDeltaRect();
    if (rect1) {setupRect1();button1();}
    if (rect2) {setupRect2();button2();}
    if (rect3) {setupRect3();button3();}
    if (rect4) {setupRect4();button4();}
    if (rect5) {setupRect5();button5();}
    drawAllRect();
});


$( "#output" ).mousemove(function() {
    $("#numberX").html(" X " + event.offsetX)
    $("#numberY").html(" Y " + event.offsetY)
    if (!allrect) {
        if (bool_move) {
            // khoảng cách chuột di chuyển
            var deltaXmouse = event.offsetX;
            var deltaYmouse = event.offsetY;

            // tọa độ canvas khi di chuyển 
            var X = XCanvas_ - (Xmouse - deltaXmouse);
            var Y = YCanvas_ - (Ymouse - deltaYmouse);

            // di chuyển khối canvas
            $('#top_canvas').css({"left" : X + "px", "top": Y + "px"});
            $('#middle_canvas').css({"left" : X + "px", "top": Y + "px"});
            $('#bound_canvas').css({"left" : X + "px", "top": Y + "px"});
            // $('#custom_canvas').css({"left" : X + "px", "top": Y + "px"});

            // setup lại tọa độ canvas
            XCanvas = X;
            YCanvas = Y;

        }
    }else{
        if (delta_rect_) {
            var CliX2 = event.offsetX;
            var CliY2 = event.offsetY;
            var deltaCliX = event.offsetX;
            var deltaCliY = event.offsetY;


            if (deltaCliX > Xmouse && deltaCliY > Ymouse ) {
                var deltaCliX = CliX2 - Xmouse;
                var deltaCliY = CliY2 - Ymouse;
                $( "#delta_rect" ).css({"top" : Ymouse + "px", "left": Xmouse + "px",
                "width" : deltaCliX - 5 + "px", "height":  deltaCliY - 5 + "px"});

                XRect = Xmouse;
                YRect = Ymouse;
                WidthRect = deltaCliX;
                HeightRect = deltaCliY;

                ConfigAllRect()

            }else if(deltaCliX < Xmouse && deltaCliY > Ymouse){
                var deltaCliX = CliX2 - Xmouse;
                var deltaCliY = CliY2 - Ymouse;
                $( "#delta_rect" ).css({"top" : Ymouse + "px", "left": Xmouse + deltaCliX + 5  + "px",
                "width" : -deltaCliX + "px", "height":  deltaCliY - 5 + "px"});

                XRect = Xmouse + deltaCliX;
                YRect =  Ymouse;
                WidthRect = -deltaCliX;
                HeightRect = deltaCliY;

                ConfigAllRect()

            }else if(deltaCliX > Xmouse && deltaCliY < Ymouse){
                var deltaCliX = CliX2 - Xmouse;
                var deltaCliY = CliY2 - Ymouse;
                $( "#delta_rect" ).css({"top" : Ymouse + deltaCliY + 5 + "px", "left": Xmouse  + "px",
                "width" : deltaCliX - 5 + "px", "height":  -deltaCliY + "px"});

                XRect = Xmouse;
                YRect = Ymouse + deltaCliY;
                WidthRect = deltaCliX;
                HeightRect = -deltaCliY;

                ConfigAllRect()

            }else if(deltaCliX < Xmouse && deltaCliY < Ymouse){
                var deltaCliX = CliX2 - Xmouse;
                var deltaCliY = CliY2 - Ymouse;
                $( "#delta_rect" ).css({"top" : Ymouse + deltaCliY + 5 + "px", "left": Xmouse + deltaCliX + 5  + "px",
                "width" : -deltaCliX + "px", "height":  -deltaCliY + "px"});

                XRect = Xmouse + deltaCliX;
                YRect = Ymouse + deltaCliY;
                WidthRect = -deltaCliX;
                HeightRect = -deltaCliY;

                ConfigAllRect();
            }
        }
    }
});

function zoom(event) {
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


    if (event.deltaY > 0) {
        if (scale > 0.125) {
            scale -= 0.125;
            scareR1 = scale;
        }
    }else{
        if (scale < 8) {
            scale += 0.125;
            scareR1 = scale;
        }
        
    }

    /*  đoạn code giúp scale nhưng vẫn sẽ giữ tọa độ ban đầu, không bị thay dổi khi scale     */

    // lưu lại vị trí cũ
    var deltawhelX = XCanvas;
    var deltawhelY = YCanvas;

    // tạo vị trí mới
    XCanvas = - ((width_canvas  - width_canvas  * scale) / 2);
    YCanvas = - ((height_canvas - height_canvas * scale) / 2);

    // setup vị trí mới
    $('#Main_canvas').css({"transform" : 'scale(' + scale + ')',"top" : YCanvas + "px", "left": XCanvas + "px"});
    setupAllCanvas(width_canvas * scale, height_canvas * scale);
    drawAllRect();
    // lấy lại vị trí cũ
    XCanvas = deltawhelX;
    YCanvas = deltawhelY;

    actScale = 1 / scale;

}
const el = document.getElementById('output');
el.onwheel = zoom;

// cài đặt tọa độ cho tất cả thuộc tính trong khung canvas
function setupAllCanvas(width, height){
    $('#top_canvas').css({"width" : width + "px", "height": height + "px"});
    $('#middle_canvas').css({"width" : width + "px", "height": height + "px"});
    $('#bound_canvas').css({"width" : width + "px", "height": height + "px"});

}
function setupAllRect_Scale(scale){

    $('#rect1').css({"top" :  + Yrect1 + "px", "left":  + Xrect1 + "px",
     "width" :  + Wrect1 + "px", "height":  + Hrect1 + "px"});
    $('#rect2').css({"top" : Yrect2 * (1 + scale - scale2) + "px", "left": Xrect2 * (1 + scale - scale2) + "px",
     "width" : Wrect2 * scale + "px", "height": Hrect2 * scale + "px"});
    $('#rect3').css({"top" : Yrect3 * (1 + scale - scale3) + "px", "left": Xrect3 * (1 + scale - scale3) + "px",
     "width" : Wrect3 * scale + "px", "height": Hrect3 * scale + "px"});
    $('#rect4').css({"top" : Yrect4 * (1 + scale - scale4) + "px", "left": Xrect4 * (1 + scale - scale4) + "px",
     "width" : Wrect4 * scale + "px", "height": Hrect4 * scale + "px"});
    $('#rect5').css({"top" : Yrect5 * (1 + scale - scale5) + "px", "left": Xrect5 * (1 + scale - scale5) + "px",
     "width" : Wrect5 * scale + "px", "height": Hrect5 * scale + "px"});
}
function setupRect1(){  
    Yrect1 =  Yrect1 * actScale;
    Xrect1 =  Xrect1 * actScale;
    Wrect1 =  Wrect1 * actScale;
    Hrect1 =  Hrect1 * actScale;
}
function setupRect2(){  
    Yrect2 =  Yrect2 * actScale;
    Xrect2 =  Xrect2 * actScale;
    Wrect2 =  Wrect2 * actScale;
    Hrect2 =  Hrect2 * actScale;
}
function setupRect3(){  
    Yrect3 =  Yrect3 * actScale;
    Xrect3 =  Xrect3 * actScale;
    Wrect3 =  Wrect3 * actScale;
    Hrect3 =  Hrect3 * actScale;
}
function setupRect4(){  
    Yrect4 =  Yrect4 * actScale;
    Xrect4 =  Xrect4 * actScale;
    Wrect4 =  Wrect4 * actScale;
    Hrect4 =  Hrect4 * actScale;
}
function setupRect5(){  
    Yrect5 =  Yrect5 * actScale;
    Xrect5 =  Xrect5 * actScale;
    Wrect5 =  Wrect5 * actScale;
    Hrect5 =  Hrect5 * actScale;
}

function drawAllRect(){  

    $('#rect1').css({"top" : Yrect1 * scale + "px", "left": Xrect1 * scale  + "px",
                 "width" : Wrect1 * scale  + "px", "height": Hrect1 * scale  + "px"});
    // console.log()
    $('#rect2').css({"top" : Yrect2 * scale + "px", "left": Xrect2 * scale + "px",
                 "width" : Wrect2 * scale + "px", "height": Hrect2 * scale + "px"});
    $('#rect3').css({"top" : Yrect3 * scale + "px", "left": Xrect3 * scale + "px",
                 "width" : Wrect3 * scale + "px", "height": Hrect3 * scale + "px"});
    $('#rect4').css({"top" : Yrect4 * scale + "px", "left": Xrect4 * scale + "px",
                 "width" : Wrect4 * scale + "px", "height": Hrect4 * scale + "px"});
    $('#rect5').css({"top" : Yrect5 * scale + "px", "left": Xrect5 * scale + "px",
                 "width" : Wrect5 * scale + "px", "height": Hrect5 * scale + "px"});
}



function resetDeltaRect(){
    XRect = 0;
    YRect = 0;
    WidthRect = 0;
    HeightRect = 0;
    $( "#delta_rect" ).css({"top" : YRect + "px", "left": XRect + "px","width" : WidthRect + "px", "height": HeightRect + "px"});
    
}

//  kiểm tra rect nào đang active
function ConfigAllRect(){
    if (rect1) {

        Xrect1 = XRect - XCanvas;
        Yrect1 = YRect - YCanvas;
        Wrect1 = WidthRect;
        Hrect1 = HeightRect;
        scale1 = scale;
    }
    if (rect2) {

        Xrect2 = XRect - XCanvas;
        Yrect2 = YRect - YCanvas;
        Wrect2 = WidthRect;
        Hrect2 = HeightRect;
        scale2 = scale;
    }
    if (rect3) {

        Xrect3 = XRect - XCanvas;
        Yrect3 = YRect - YCanvas;
        Wrect3 = WidthRect;
        Hrect3 = HeightRect;
        scale3 = scale;
    }
    if (rect4) {

        Xrect4 = XRect - XCanvas;
        Yrect4 = YRect - YCanvas;
        Wrect4 = WidthRect;
        Hrect4 = HeightRect;
        scale4 = scale;
    }
    if (rect5) {

        Xrect5 = XRect - XCanvas;
        Yrect5 = YRect - YCanvas;
        Wrect5 = WidthRect;
        Hrect5 = HeightRect;
        scale5 = scale;
    }
}

// kiểm tra có rect nào đang active không

function checkAllrect(){
    if (rect1 || rect2 || rect3 || rect4 || rect5) {
        allrect = true;
    }else{
        allrect = false;
    }
}




$( "#button1" ).click(function() {
    button1();
});
function button1(){
    $( "#button1" ).toggleClass("color");
    rect1 = !rect1;
    checkAllrect();
}
$( "#button2" ).click(function() {
    button2();
});

function button2(){
    $( "#button2" ).toggleClass("color");
    rect2 = !rect2;
    checkAllrect();
}
$( "#button3" ).click(function() {
    button3();
});
function button3(){
    $( "#button3" ).toggleClass("color");
    rect3 = !rect3;
    checkAllrect();
}

$( "#button4" ).click(function() {
    button4();
});
function button4(){
    $( "#button4" ).toggleClass("color");
    rect4 = !rect4;
    checkAllrect();
}

$( "#button5" ).click(function() {
    button5();
});
function button5(){
    $( "#button5" ).toggleClass("color");
    rect5 = !rect5;
    checkAllrect();
}





















