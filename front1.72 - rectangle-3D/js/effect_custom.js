var box = document.querySelector('.box');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  box.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );


$('.scene').on('mouseover',function(){
	$('.box').removeClass('show-front');
	$('.box').addClass('show-bottom');
})
$('.scene').on('mouseout',function(){
	$('.box').addClass('show-front');
	$('.box').removeClass('show-bottom');
})















































