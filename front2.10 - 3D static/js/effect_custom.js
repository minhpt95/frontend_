var x = 0;
var y = 0;
var z = 0;
$('#myRange1').on('input', function(){
    x = $(this).val()
    update()
})
$('#myRange2').on('input', function(){
    y = $(this).val()
    update()
})
$('#myRange3').on('input', function(){
    z = $(this).val()
    update()
})

function update(){
    $('.image_invoice').css({
        'transform': 'rotateX('+x+'deg) rotateY('+y+'deg) rotateZ('+z+'deg)'
    })
}







