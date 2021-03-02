$(document).ready(function() {
    $('.js-example-basic-single').select2();
});
const PhoneCode = new myPhoneCode('#country-list');
const output = document.getElementById("country-code");
$('#country-list').on('change', function(){
	output.value = '+ ' + $(this).val();
});