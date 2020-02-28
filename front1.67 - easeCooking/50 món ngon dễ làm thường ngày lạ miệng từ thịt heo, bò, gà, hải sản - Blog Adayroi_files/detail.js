$(document).ready(function () {
    if (categoryADRId != '' && eval(categoryADRId) > 0 && postId != '' && eval(postId) > 0) {
        $.ajax({
            type: 'GET',
            //url: '/detail/getproductadr?categoryId=' + categoryADRId,
            url: '/getproductadr/' + categoryADRId + '/' + postId,
            dataType: 'json',
            success: function (response) {
                if (response.Status == 1) {
                    templateProductAdr(response.Data);
                    $("#divCateAdrTitle").removeClass("hidden");
                }
                else {
                    $("#divCateAdrTitle").addClass("hidden");
                }
            }
        });

        function templateProductAdr(response) {
            var data = response.ProductData;
            var strVar = "";
            var col = 12;
            if (data.length > 0) {
                col = Math.round(12 / data.length);
            }
            for (i = 0; i < data.length; i++) {
                var productName = data[i].ProductName;
                var productUrl = data[i].ProductUrl;
                var productImage = data[i].ProductImage;
                strVar += "<div class=\"col-md-" + col + " product-item__wrapper\">";
                strVar += "	<div class=\"product-item\">";
                strVar += "		<div class=\"product-item__container\">";
                strVar += "			<a class=\"product-item__thumbnail \" href='" + productUrl + "' target='_bank'>";
                strVar += "				<img src='" + productImage + "' alt='" + productName + "' title='" + productName + "' />";
                if (data[i].ProductStopperRight !== null && data[i].ProductStopperRight !== '') {
                    strVar += "         <img class='product-item__overlay stopper-right' src='" + data[i].ProductStopperRight + "' />";
                }
                if (data[i].ProductStopperLeft !== null && data[i].ProductStopperLeft != '') {
                    strVar += "         <img class='product-item__overlay stopper-left' src='" + data[i].ProductStopperLeft + "' />";
                }
                if (data[i].ProductStopperBottom !== null && data[i].ProductStopperBottom != '') {
                    strVar += "         <img class='product-item__overlay stopper-bottom' src='" + data[i].ProductStopperBottom + "' width='100%' height='auto'/>";
                }
                strVar += "			<\/a>";
                strVar += "			<div class=\"product-item__info \">";
                strVar += "				<a class=\"product-item__info-title\" href='" + productUrl + "' title='" + productName + "' target='_bank'> " + productName + "<\/a>";
                if (data[i].IsShowPriceADR) {
                    strVar += "				<div class=\"product-item__info-price\">";
                    strVar += "					<span class=\"product-item__info-price-sale\">" + data[i].SalePrice + "<\/span>";
                    if (data[i].Discount !== null && data[i].Discount !== '') {
                        strVar += "			    <span class=\"product-item__info-price-original\">" + data[i].SellPrice + "<\/span>";
                    }
                    strVar += "				<\/div>";
                    if (data[i].Discount !== null && data[i].Discount !== '') {
                        strVar += "				<div class=\"product-item__info-discount\">" + data[i].Discount + "<\/div>";
                    }
                }
                if (data[i].VinIdDiscount !== null && data[i].VinIdDiscount !== '') {
                    strVar += "				<div class=\"product-item__info-vinid\">";
                    strVar += "					Tích thêm";
                    strVar += "					<span>2%<\/span> vào thẻ VinID";
                    strVar += "				<\/div>";
                }
                strVar += "			<\/div>";
                strVar += "		<\/div>";
                strVar += "	<\/div>";
                strVar += "<\/div>";
            }
            if (strVar !== '') {
                strVar += "<div class=\"col-md-12 text-center\">";
                strVar += "	<a href='" + response.CategoryUrl + "' id=\"aMore\" target='_blank'>";
                strVar += "		Xem thêm";
                strVar += "	<\/a>";
                strVar += "<\/div>";
            }
            $(".product-adr").html(strVar);
        }
    }

    $(".ShortCodeGetProduct").each(function () {
        var element = $(this);
        var value = $(element).attr("value");
        var id = $(element).attr("id");

        var urlRewrite = '', urlId = '';
        try {
            debugger;
            var str = window.location.href.split('/')[window.location.href.split('/').length - 1];
            var res = str.match('\-[d][0-9]*$')[0];

            urlRewrite = str.replace(res, '');
            urlId = res.substring(2);
        } catch (e) {

        }



        $.ajax({
            type: 'get',
            url: '/getproductbyshortcode',
            data: { shortCodeGetProduct: value, idElement: id, postId: urlId, postRewrite: urlRewrite },
            dataType: 'json',
            success: function (response) {
                if (response.Status == 1) {
                    $(element).html(response.Data);
                    var $lazyImg = $("img.plp-lazy");
                    $lazyImg.lazyload({
                        threshold: 50,
                        skip_invisible: false,
                        effect: "fadeIn"
                    });
                    InitSwapSlider(id);
                }
            }
        });
    });


    function InitSwapSlider(idElement) {
        var swiper = new Swiper('.js-swiper-carousel-' + idElement, {
            slidesPerView: 3,
            spaceBetween: 8,
            loop: true,
            navigation: {
                nextEl: '.' + idElement + '-swiper-button-next',
                prevEl: '.' + idElement + '-swiper-button-prev',
            },
            nextButton: '.' + idElement + '-swiper-button-next',
            prevButton: '.' + idElement + '-swiper-button-prev',
            pagination: false,
            lazy: true,
            preloadImages: false,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                }
            }
        });
    }


});
