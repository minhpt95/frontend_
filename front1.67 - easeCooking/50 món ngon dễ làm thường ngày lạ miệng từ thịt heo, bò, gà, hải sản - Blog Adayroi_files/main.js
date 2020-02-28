// $(function(){
//     $('.sadr-train-slide').owlCarousel({
//             items:1,
//             nav:false, 
//             loop:false,
//             smartSpeed:350,
//             fluidSpeed:200,
//              autoplay:true,
//              rewind:true,
//              autoplayHoverPause:true
//           });

//         var i = 1;
//         $('.sadr-train-slide .owl-dot').each(function(){
//           $(this).find('span').text(i);
//           i++;
//         });
// });

// $(function(){

//     $('.sadr-head-slide').owlCarousel({
//             items:1,
//             nav:false, 
//             loop:false,
//             smartSpeed:100,
//             fluidSpeed:100,
//              autoplay:false,
//              dots:true,
//              mouseDrag:false,
//              animateOut: 'fadeOut',
//              animateIn: 'fadeIn',
//              autoplayHoverPause:true,
//           });
//         var i = 1;
//         $('.sadr-head-slide .owl-dot').each(function(){
//           $(this).find('span').text(i);
//           i++;
//         });

// });

$(function() {

    $('#sadr_class_slide').owlCarousel({
        items: 3,
        nav: true,
        loop: false,
        smartSpeed: 150,
        fluidSpeed: 100,
        autoplay: true,
        rewind: true,
        autoplayHoverPause: true,
        dots: false

    });

});
var owl = $('#pop1').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    autoplay: false,
    rewind: true,
    autoplayHoverPause: true,
    dots: true,
    startPosition: 0
});
$('.reg-card .item1').on('click', function() {

    owl.trigger('to.owl.carousel', 0);
});
$('.reg-card .item2').on('click', function() {
    owl.trigger('to.owl.carousel', 1);
});
$('.reg-card .item3').on('click', function() {
    owl.trigger('to.owl.carousel', 2);
});
$('.reg-card .item4').on('click', function() {
    owl.trigger('to.owl.carousel', 3);
});



$(document).on('click', '.menu-promotion', function(event) {
    event.preventDefault();
    $(".menu ul li a").removeClass('active');
    $(".menu-promotion").addClass('active');

    $('html, body').animate({
        scrollTop: $('.promotion').offset().top
    }, 500);
});
$(document).on('click', '.menu-card', function(event) {
    event.preventDefault();
    $(".menu ul li a").removeClass('active');
    $('.menu-card').addClass('active');
    $('html, body').animate({
        scrollTop: $('.reg-card').offset().top
    }, 500);

});


// $(function(){

//    $(".head-slide-item" ).each(function() {
//         var owl=$(this).find('.sadr-course-content-textslide');
//         owl.owlCarousel({
//             items:1,
//             nav:true, 
//             loop:true,
//             dots:false,
//             smartSpeed:350,
//             fluidSpeed:500,
//             autoplay:true,
//             autoplayTimeout:8000,
//             autoplayHoverPause:true,
//             mouseDrag:true
//           });
//         // $(this).find(".sadr-icon-next").click(function(){
//         //     owl.trigger('next.owl.carousel');
//         // });
//         // $(this).find(".sadr-icon-prev").click(function(){
//         //     owl.trigger('prev.owl.carousel');
//         // });

//     });


// });
// $(function(){
//     $(".sadr-fancybox").fancybox({
//             openEffect  : 'none',
//             closeEffect : 'none'
//     });
// });

$(document).on('click', '#search-btn', function (event) {
    event.preventDefault();
    var keysearch = "";
    
    $("input[name=q]").each(function () {
        if ($(this).val() != '') {
            keysearch = $("input[name=q]").eq(0).val();
        }
        if (isMobile()) {
            if ($("input[name=q]").eq(1) != undefined && $("input[name=q]").eq(1).val() != '') {
                keysearch = $("input[name=q]").eq(1).val();
            }
        }
        

    });

    if (!validateInputNotAllowHtmlTags(keysearch)) {
        alert("Từ khóa không được chứa các ký tự html (< hoặc >).");
        return false;
    }
    window.location.href = "/tim-kiem?keysearch=" + keysearch;
});

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

$(document).ready(function () {
    $("input[name=q]").keyup(function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            $("#search-btn").click();
        }
    });

    $('input:radio[name=searchByType]').change(function () {
        var url = window.location.href;
        if (this.value == '1') {
            if (url.indexOf("isByTag") != -1) {
                url = url.replace("isByTag=0", "isByTag=1");
            }
            else
                url += "&isByTag=1";
            
        }
        else if (this.value == '0') {
            if (url.indexOf("isByTag") != -1) {
                url = url.replace("isByTag=1", "isByTag=0");
            }
            else
                url += "&isByTag=0";
        }
        window.location.href = url;    
    });
    var isByTag = getUrlParameter("isByTag");
    if (isByTag == 1) {
        $('input:radio[id="byKeyword"]').removeAttr('checked');
        $('input:radio[id="byTag"]').attr('checked', 'checked');
    }else if (isByTag == 0) {
        $('input:radio[id="byKeyword"]').attr('checked', 'checked');
        $('input:radio[id="byTag"]').removeAttr('checked');
    }
    if ($('.head-category .cate-header h2 strong').html() != undefined) {
        $('.box-search').val($('.head-category .cate-header h2 strong').html());
    } else if ($('.main-blog .blog-list .content h2 strong').html() != undefined) {
        var title = $('.main-blog .blog-list .content h2 strong').html().replace("“", "").replace("”", ""); 
        $('.box-search').val(title);
    }
        
});


$("#menu_toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
$(".menu-mobile-toggle").click(function(e) { 
    $(this).parent().toggleClass("open");
});
$(".adr-page-blog-home").on('click', '.toggled::before', function(e) {
    alert('ob');
    $("#wrapper").toggleClass("toggled");
});

//check mobile and fix image
 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

     $('.adr-page-blog-home img').each(function() {
         var link = $(this).attr('src');
         var newlink = link.replace("160_100", "570_360");
         $(this).attr('src', newlink);
     });
     $('.adr-page-blog-list img').each(function() {
         var link = $(this).attr('src');
         //console.log(link);
         if (link) {
             var newlink = link.replace("270_170", "570_360");
             $(this).attr('src', newlink);
         }
     });

}

function isMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        return true;
    }
    return false;
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

