let imgBox = document.getElementById("imgBox");
let qr_image = document.getElementById("qr_image");
let input_text = document.getElementById("input_text");


function generateQr(){
    qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  input_text.value;
}