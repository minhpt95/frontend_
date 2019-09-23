var __PDF_DOC,__TOTAL_PAGES = 0;
var data = document.querySelector('#ul');

function showPDF(pdf_url) {
	$("#pdf-loader").show();
	PDFJS.getDocument({ url: pdf_url }).then(function(pdf_doc) {
		__PDF_DOC = pdf_doc;
		__TOTAL_PAGES = __PDF_DOC.numPages;
		console.log(__TOTAL_PAGES);
		for (var i = 0; i < __TOTAL_PAGES; i++) {

       		var a = document.createElement('a');
        	a.className = "ref";
       		var listItem = document.createElement('canvas');
        	listItem.className = "canvas";
        	listItem.width = "1200";
		    a.appendChild(listItem);
		    data.appendChild(a);

			var __CANVAS = $('.canvas').get(i);
			var __CANVAS_CTX = __CANVAS.getContext('2d');
			showPage(i+1, __CANVAS, __CANVAS_CTX);

		}

	}).catch(function(error) {
		alert(error.message);
	});;
}

function showPage(page_no, __CANVAS, __CANVAS_CTX) {
	__PAGE_RENDERING_IN_PROGRESS = 1;
	__CURRENT_PAGE = page_no;

	__PDF_DOC.getPage(page_no).then(function(page) {

		var scale_required = __CANVAS.width / page.getViewport(1).width;

		var viewport = page.getViewport(scale_required);

		__CANVAS.height = viewport.height;

		var renderContext = {
			canvasContext: __CANVAS_CTX,
			viewport: viewport
		};

		page.render(renderContext).then(function() {
			__PAGE_RENDERING_IN_PROGRESS = 0;
		});
	});


	$('.ref').on('click', function() {
		$('.ref:eq('+ (page_no-1) +')').attr('href', __CANVAS.toDataURL()).attr('download', 'page.png');
	});
}

$("#file-to-upload").on('change', function() {

    if(['application/pdf'].indexOf($("#file-to-upload").get(0).files[0].type) == -1) {
        alert('Error : Not a PDF');
        return;
    }

	$("#upload-button").hide();


	showPDF(URL.createObjectURL($("#file-to-upload").get(0).files[0]));
});
