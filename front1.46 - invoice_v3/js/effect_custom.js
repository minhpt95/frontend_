
// function press(){
//     console.log("true");
// }
// function release(){
//     console.log("false");
// }
function keyupHandler(evt)  {
    move_canvas_ = false;
    $("#border_canvas").css('cursor', 'context-menu');
}
 
function keypressHandler(evt)  {
    move_canvas_ = true;
    $("#border_canvas").css('cursor', 'move');
}
// load tiff image  
document.querySelector("input").onchange = function() {
    var fileReader = new FileReader();
    fileReader.onload = function() {       
        setupClass();          
        var tiff = new Tiff({buffer: this.result});   
        try{
            $('.canvas_bound').find('.canvas').remove();
        }catch(ex){ }
        $('.zoom2').each(function(){        
            var canvas = tiff.toCanvas();      
            canvas.className = 'canvas';  
            $(this).append(canvas);
        });
        var canvas = tiff.toCanvas();   
        canvas.id = 'Main_canvas';  
        try{
            $('#Main_canvas').remove();
        }catch(ex){ }
        document.getElementById("zoom").appendChild(canvas);
    };
    fileReader.readAsArrayBuffer(this.files[0]); 
};


// setup lại thuộc tính sau khi thay đổi ảnh
function setupClass(){
    if (!$("#zoom2").hasClass("zoom2")) {
        $("#zoom2").toggleClass("zoom2");
        $("#bound_output1").toggleClass("bound_output1");
        $('#close2').toggleClass("red");
    }
    if (!$("#zoom3").hasClass("zoom2")) {
        $("#zoom3").toggleClass("zoom2");
        $("#bound_output2").toggleClass("bound_output1");
        $('#close3').toggleClass("red");
    }
    if (!$("#zoom4").hasClass("zoom2")) {
        $("#zoom4").toggleClass("zoom2");
        $("#bound_output3").toggleClass("bound_output1");
        $('#close4').toggleClass("red");
    }
    if (!$("#zoom5").hasClass("zoom2")) {
        $("#zoom5").toggleClass("zoom2");
        $("#bound_output4").toggleClass("bound_output1");
        $('#close5').toggleClass("red");
    }
    if (!$("#zoom6").hasClass("zoom2")) {
        $("#zoom6").toggleClass("zoom2");
        $("#bound_output5").toggleClass("bound_output1");
        $('#close6').toggleClass("red");
    }
    
    $( ".bound_output1" ).css({ "width" : WIDTH + "px", "height" : HEIGHT + "px"});
}

$("#close2").click(function(){
    $("#zoom2").toggleClass("zoom2");
    $("#bound_output1").toggleClass("bound_output1");
    $(this).toggleClass("red");
});
$("#close3").click(function(){
    $("#zoom3").toggleClass("zoom2");
    $("#bound_output2").toggleClass("bound_output1");
    $(this).toggleClass("red");
});

$("#close4").click(function(){
    $("#zoom4").toggleClass("zoom2");
    $("#bound_output3").toggleClass("bound_output1");
    $(this).toggleClass("red");
});
$("#close5").click(function(){
    $("#zoom5").toggleClass("zoom2");
    $("#bound_output4").toggleClass("bound_output1");
    $(this).toggleClass("red");
});
$("#close6").click(function(){
    $("#zoom6").toggleClass("zoom2");
    $("#bound_output5").toggleClass("bound_output1");
    $(this).toggleClass("red");
});



