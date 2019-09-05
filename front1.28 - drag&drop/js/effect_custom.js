
var O_USD 		    = document.getElementById("O_USD");
var O_History       = document.getElementById("O_History");
var O_Map           = document.getElementById("O_Map");
var O_Order_Book    = document.getElementById("O_Order_Book");
var O_Pay           = document.getElementById("O_Pay");


var USD             = document.getElementById("USD");
var History         = document.getElementById("History");
var Maps            = document.getElementById("Maps");
var Order_Book      = document.getElementById("Order_Book");
var Pay             = document.getElementById("Pay");


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
        USD.style.display = 'block';
        O_USD.style.color = '#17b25b';
        C_USD = 1;
    }else{
        USD.style.display = 'none';
        O_USD.style.color = '#fff';
        C_USD = 0;
    }
}
function Open_USD_History(){
    if(C_History == 0){
        History.style.display = 'block';
        O_History.style.color = '#17b25b';
        C_History = 1;
    }else{
        History.style.display = 'none';
        O_History.style.color = '#fff';
        C_History = 0;
    }
}
function Open_Map(){
    if(C_Maps == 0){
        Maps.style.display = 'block';
        O_Map.style.color = '#17b25b';
        C_Maps = 1;
    }else{
        Maps.style.display = 'none';
        O_Map.style.color = '#fff';
        C_Maps = 0;
    }
}
function Open_Order_Book(){
    if(C_Order_Book == 0){
        Order_Book.style.display = 'block';
        O_Order_Book.style.color = '#17b25b';
        C_Order_Book = 1;
    }else{
        Order_Book.style.display = 'none';
        O_Order_Book.style.color = '#fff';
        C_Order_Book = 0;
    }
}
function Open_Pay(){
    if(C_Pay == 0){
        Pay.style.display = 'block';
        O_Pay.style.color = '#17b25b';
        C_Pay = 1;
    }else{
        Pay.style.display = 'none';
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