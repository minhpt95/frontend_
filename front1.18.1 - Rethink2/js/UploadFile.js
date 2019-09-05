var dropZone = document.getElementById('dropZone');

// Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    dropZone.style.color = '#336cdf';
});

// Get file data on drop
dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files; // Array of all files

    for (var i=0, file; file=files[i]; i++) {
        if (file.type.match(/image.*/)) {
            var reader = new FileReader();

            reader.onload = function(e2) {
                // finished reading file data.
                var img = document.createElement('img');
                img.src= e2.target.result;
                // dropZone.style.backgroundImage: = img;
                // dropZone.body.appendChild(img);
                console.log(img);
            }

            reader.readAsDataURL(file); // start reading the file data.

        }
    }
    dropZone.style.color = 'green';
});
// dropZone.ondragover = function(){
//     dropZone.style.color = 'red';
// };
// dropZone.ondrop  = function(){
//     dropZone.style.color = 'yellow';
// };
// dropZone.onmouseenter = function(){
//     dropZone.style.color = 'red';
//     console.log("1");
// };
// dropZone.onmouseout = function(){
//     dropZone.style.color = 'red';
//     console.log("1");
// };
// dropZone.onmousedown = function(){
//     dropZone.style.color = 'red';
//     console.log("1");
// };
// dropZone.onmouseup = function(){
//     dropZone.style.color = 'red';
//     console.log("1");
// };
// dropZone.onmouseover = function(){
//     dropZone.style.color = 'red';
//     console.log("1");
// };
// dropZone.onmouseleave = function(){
//     dropZone.style.color = 'red';
//     console.log("1");
// };
// dropZone.onmousemove = function(){
//     dropZone.style.color = 'red';
//     console.log("1");
// };