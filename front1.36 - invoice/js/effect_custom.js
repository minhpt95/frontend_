
var input = document.querySelector('#LoadImage');
var preview = document.querySelector('.list_image');
input.style.opacity = 0;
input.addEventListener('change', updateImageDisplay);

var list;
var percentX = 1; // số nhân
var delta = 1;      // hệ số nhân
var index = null;
setup();
function setup(){
    list = document.createElement('ul');
    preview.appendChild(list);
}
function updateImageDisplay() {
    // while (preview.firstChild) {
    //     preview.removeChild(preview.firstChild);
    // }
    var curFiles = input.files;
    for (var i = 0; i < curFiles.length; i++) {
        var listItem = document.createElement('li');
        listItem.className = "listItem";
        if (validFileType(curFiles[i])) {
            var image = document.createElement('img');
            image.className = "images_choice";
            image.src = window.URL.createObjectURL(curFiles[i]);
            listItem.appendChild(image);
        } else {}
        list.appendChild(listItem);
    }
    
    // Home_Image      khung của ảnh
    // images_choice   list chọn ảnh
    // Value_Image     đường dẫn của ảnh
    // count           tổng số ảnh
    // location        vị trí ảnh hiện tại

    //  console.log($('.images_choice')[0].src);                lấy src vị trí thứ 0
    //  $('#Home_Image').attr("src", $(this).attr('src'));      tạo src


    $(document).ready(function() {
        $("#count").attr("value", $('.images_choice').length);

        $("#location").attr("value", 1);
        $('#Home_Image').attr("src", $('.images_choice')[0].src);
            $('.listItem:eq(0)').css("background-color", "red");

        $('.images_choice').click(function() {
            $('#Home_Image').attr("src", $(this).attr('src'));
            index = 0;
        });
        $('.listItem').click(function() {
            $('.listItem').css("background-color", "rgba(0,0,0,0)");
            $(this).css("background-color", "red");
            $("#location").attr("value", $(this).index() + 1);
            index = $(this).index();
        });


        $('#allback').click(function() {
            $("#location").attr("value", 1);
            // $('#Home_Image').attr("src", $('.images_choice')[0].src); // hoạt động
            $('#Home_Image').attr("src", $('.images_choice:eq(0)').attr('src'));

            $('.listItem').css("background-color", "rgba(0,0,0,0)");
            $('.listItem:eq(0)').css("background-color", "red");
            index = 0;
        });

        $('#back').click(function() {
            if(index-1 >= 0){
                index = index - 1;
                $("#location").attr("value", index+1);
                // $('#Home_Image').attr("src", $('.images_choice')[0].src); // hoạt động
                $('#Home_Image').attr("src", $('.images_choice:eq('+ index +')').attr('src'));

                $('.listItem').css("background-color", "rgba(0,0,0,0)");
                $('.listItem:eq('+ index +')').css("background-color", "red");
            }
        });
        $('#next').click(function() {
            if(index+1 < $('.images_choice').length){
                index = index + 1;
                $("#location").attr("value", index + 1);
                // $('#Home_Image').attr("src", $('.images_choice')[0].src); // hoạt động
                $('#Home_Image').attr("src", $('.images_choice:eq('+ index +')').attr('src'));

                $('.listItem').css("background-color", "rgba(0,0,0,0)");
                $('.listItem:eq('+ index +')').css("background-color", "red");
            }
        });
        $('#allnext').click(function() {
            $("#location").attr("value", $('.images_choice').length);
            $('#Home_Image').attr("src", $('.images_choice')[$('.images_choice').length-1].src);

            $('.listItem').css("background-color", "rgba(0,0,0,0)");
            $('.listItem:eq(' + ($('.images_choice').length-1) + ')' ).css("background-color", "red");
            index = $('.images_choice').length-1;
        });
        

    })
}

var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]

function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            return true;
        }
    }
    return false;
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    } else if (number >= 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    } else if (number >= 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
}