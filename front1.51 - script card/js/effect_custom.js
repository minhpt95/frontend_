$("#input").keyup(function(){
    // console.log($("#input").val());
    // console.log($("#o1").text());
    // console.log($("#o1").text($("#input").val()));
    $("#o1").text($("#input").val())
})

var menu = document.querySelector('.menu');
var menu1 = document.createElement("div");
menu1.setAttribute( 'class',  'menu1' );
var menu2 = document.createElement("div");
menu2.setAttribute( 'class',  'menu2' );
var menu3 = document.createElement("div");
menu3.setAttribute( 'class',  'menu3' );
menu.appendChild( menu1 );
menu.appendChild( menu2 );
menu.appendChild( menu3 );