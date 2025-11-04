function generateQRCode(){
    let data = "";
    let text = $("#txtText").val();

    data = text;

    generateQRviaLocalJS(data);
    generateQRviaAPI(data);
}

function generateQRviaLocalJS(data){
    qrcode.makeCode(data);
}

function generateQRviaAPI(data){
    let size = '1000x1000';
    let baseURL = 'http://api.qrserver.com/v1/create-qr-code/';

    let url = `${baseURL}?data=${data}&size=${size}`;

    $("#qrcodeapi").attr("src",url);
}

$("#qrcode-form").submit(function(e){
    e.preventDefault();
});

$("#btn-download-qr-code").click(function() {
    downloadQRCode();
});
