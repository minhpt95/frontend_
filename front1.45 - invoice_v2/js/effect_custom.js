
// load tiff image  
document.querySelector("input").onchange = function() {
        var fileReader = new FileReader();
        fileReader.onload = function() {       
            setupClass();          
            var tiff = new Tiff({buffer: this.result});   
            try{
                $('.canvas_bound').find('.canvas').remove();
            }catch(ex){ }
            // console.log($('.canvas_bound').find('.canvas'));
            $('.zoom2').each(function(){        
                var canvas = tiff.toCanvas();      
                // console.log(canvas.toDataURL());
                canvas.className = 'canvas';  

                $(this).append(canvas);
                
                // var temporaryDownloadLink = document.createElement("a");
                // temporaryDownloadLink.style.display = 'none'
                // document.body.appendChild( temporaryDownloadLink );
                // // for( var n = 0; n < __TOTAL_PAGES; n++ ) {
                //     temporaryDownloadLink.setAttribute( 'href',  canvas.toDataURL() );
                //     temporaryDownloadLink.setAttribute( 'download', 'image.tif' );
                //     temporaryDownloadLink.click();
                // // }
                // document.body.removeChild( temporaryDownloadLink );

            });
            var canvas = tiff.toCanvas();   
            canvas.id = 'Main_canvas';  
            try{
                $('#Main_canvas').remove();
            }catch(ex){ }
            document.getElementById("zoom").appendChild(canvas);
        };
        fileReader.readAsArrayBuffer(this.files[0]);
    


    // var fileReader = new FileReader();
    // fileReader.onload = function() {                     
    //     var tiff = new Tiff({buffer: this.result});       
    //     var canvas = tiff.toCanvas();    
    //     // var canvas2 = tiff.toCanvas();  
    //     // var canvas3 = tiff.toCanvas();    
    //     canvas.className = 'canvas';  
    //     document.getElementById("zoom").appendChild(canvas); 
    //     // document.getElementById("zoom2").appendChild(canvas2); 
    //     // document.getElementById("zoom3").appendChild(canvas3); 

    //     var ZOOM = document.getElementsByClassName("zoom2");
    //     for (var i = 0; i < ZOOM.length; i++) {
    //         var canvas = tiff.toCanvas();      
    //         canvas.className = 'canvas';  
    //         ZOOM[i].appendChild(canvas); 
    //     }
    // };
    // fileReader.readAsArrayBuffer(this.files[0]);        
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



