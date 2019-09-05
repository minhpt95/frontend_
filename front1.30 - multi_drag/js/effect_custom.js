$(function() {
    $(".draggable").resizable().draggable();
});

var drag = document.getElementsByClassName("draggable");

    var arrID = new Array();

    update(arrID);

    function update(arrID) {
        // tạo ID
        var max = drag.length;
        for (var i = 0; i < drag.length; i++) {
            drag[i].setAttribute("id", "drag_" + i);
            drag[i].style.zIndex = i;
        }
        // tạo mảng chứa danh sách ID
        for (var i = 0; i < drag.length; i++) {
            arrID.push(drag[i]);
        }
    }

    // body.addEventListener("touchmove", Touch);
    // body.addEventListener("touchstart", StartTouch);
    // body.addEventListener("touchend", EndTouch);
    // $('.draggable').on("tap",function(){
    //     RefreshZ_Index($(this).attr('id'),arrID)
    //   });  
    // var click = false;
    // $('.draggable').on("touchstart",function(){
    //     click = true;
    //     RefreshZ_Index($(this).attr('id'),arrID)
    // });  
    // $('.draggable').on("touchend",function(){
    //     click = false;
        
    // });   
    // $('.draggable').on("touchmove",function(){
    //     // if (click) {
    //         RefreshZ_Index($(this).attr('id'),arrID);
    //     // }
        
    // }); 

    // $('.draggable').click(function(e) {
    //     RefreshZ_Index($(this).attr('id'),arrID)
    // });
    $('.draggable').mouseup(function() {
        click = false;
        RefreshZ_Index($(this).attr('id'),arrID)

    });  
    $('.draggable').mousedown(function() {
        click = true;
        RefreshZ_Index($(this).attr('id'),arrID)
        
    });   
    $('.draggable').mousemove(function() {
        // if (click) {
            // RefreshZ_Index($(this).attr('id'),arrID)
        // }
    });  
    function RefreshZ_Index(id,arrID){
        var ID             = document.getElementById(id);

        for (var i = 0; i < arrID.length; i++) {
            if (arrID[i].style.zIndex == ID.style.zIndex) {
                var NOW = i;
            }
        }

        // tạo lại mảng
        var delta = ID;
        for (var i = NOW+1; i < arrID.length; i++) {
            arrID[i-1] = arrID[i];
        }
        arrID[arrID.length - 1] = delta;

        // // config lại z-index
        for (var i = 0; i < arrID.length; i++) {
            arrID[i].style.zIndex = i;
        }
        // console.log(click);
       
    }







    
var O_USD           = document.getElementById("O_USD");
var O_History       = document.getElementById("O_History");
var O_Map           = document.getElementById("O_Map");
var O_Order_Book    = document.getElementById("O_Order_Book");
var O_Pay           = document.getElementById("O_Pay");


var USD             = document.getElementById("drag_0");
var History         = document.getElementById("drag_3");
var Maps            = document.getElementById("drag_1");
var Order_Book      = document.getElementById("drag_2");
var Pay             = document.getElementById("drag_4");



var C_USD           = 1;
var C_Maps          = 1;
var C_History       = 1;
var C_Order_Book    = 1;
var C_Pay           = 1;


O_USD.addEventListener("click", Open_USD);
O_History.addEventListener("click", Open_USD_History);
O_Map.addEventListener("click", Open_Map);
O_Order_Book.addEventListener("click", Open_Order_Book);
O_Pay.addEventListener("click", Open_Pay);


O_USD.addEventListener("mouseover", Hover_USD);
O_History.addEventListener("mouseover", Hover_History);
O_Map.addEventListener("mouseover", Hover_Maps);
O_Order_Book.addEventListener("mouseover", Hover_Order_Book);
O_Pay.addEventListener("mouseover", Hover_Pay);

O_USD.addEventListener("mouseout", Out_USD);
O_History.addEventListener("mouseout", Out_History);
O_Map.addEventListener("mouseout", Out_Maps);
O_Order_Book.addEventListener("mouseout", Out_Order_Book);
O_Pay.addEventListener("mouseout", Out_Pay);


function Open_USD(){
    if(C_USD == 0){
        // USD.style.display = 'block';
        USD.style.top = '200px';
        USD.style.left = (screen.width - 400)/2 + "px";
        // USD.style.left = "200px";
        USD.style.zIndex = 1000;
        O_USD.style.color = '#17b25b';
        C_USD = 1;
    }else{
        USD.style.top = '-10000px';
        USD.style.left = '-10000px';
        // USD.style.display = 'none';
        O_USD.style.color = '#fff';
        C_USD = 0;
    }
}
function Open_USD_History(){
    if(C_History == 0){
        History.style.top = '200px';
        History.style.left = (screen.width - 400)/2 + "px";
        // History.style.left = "200px";
        History.style.zIndex = 1000;
        O_History.style.color = '#17b25b';
        C_History = 1;
    }else{
        History.style.top = '-10000px';
        History.style.left = '-10000px';
        O_History.style.color = '#fff';
        C_History = 0;
    }
}
function Open_Map(){
    if(C_Maps == 0){
        Maps.style.top = '200px';
        Maps.style.left = (screen.width - 400)/2 + "px";
        // Maps.style.left = "200px";
        Maps.style.zIndex = 1000;
        O_Map.style.color = '#17b25b';
        C_Maps = 1;
    }else{
        Maps.style.top = '-10000px';
        Maps.style.left = '-10000px';
        O_Map.style.color = '#fff';
        C_Maps = 0;
    }
}
function Open_Order_Book(){
    if(C_Order_Book == 0){
        Order_Book.style.top = '200px';
        Order_Book.style.left = (screen.width - 400)/2 + "px";
        // Order_Book.style.left = "200px";
        Order_Book.style.zIndex = 1000;
        O_Order_Book.style.color = '#17b25b';
        C_Order_Book = 1;
    }else{
        Order_Book.style.top = '-10000px';
        Order_Book.style.left = '-10000px';
        O_Order_Book.style.color = '#fff';
        C_Order_Book = 0;
    }
}
function Open_Pay(){
    if(C_Pay == 0){
        Pay.style.top = '200px';
        Pay.style.left = (screen.width - 400)/2 + "px";
        // Pay.style.left = "200px";
        Pay.style.zIndex = 1000;
        O_Pay.style.color = '#17b25b';
        C_Pay = 1;
    }else{
        Pay.style.top = '-10000px';
        Pay.style.left = '-10000px';
        O_Pay.style.color = '#fff';
        C_Pay = 0;
    }
}


function Hover_USD(){
    USD.style.backgroundColor = 'white';
}
function Out_USD(){
    USD.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

function Hover_History(){
    History.style.backgroundColor = 'white';
}
function Out_History(){
    History.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

function Hover_Maps(){
    Maps.style.backgroundColor = 'white';
}
function Out_Maps(){
    Maps.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

function Hover_Order_Book(){
    Order_Book.style.backgroundColor = 'white';
}
function Out_Order_Book(){
    Order_Book.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

function Hover_Pay(){
    Pay.style.backgroundColor = 'white';
}
function Out_Pay(){
    Pay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}