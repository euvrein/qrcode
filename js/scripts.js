var qrcodelocal = $("#qrcodelocal")[0];
var qrcode = new QRCode(qrcodelocal, {
    width : 220,
    height : 220
});

function generateQRviaLocalJS(data){
    qrcode.makeCode(data);
}

function generateQRviaAPI(data){
    let size = '1000x1000';
    let baseURL = 'http://api.qrserver.com/v1/create-qr-code/';

    let url = `${baseURL}?data=${data}&size=${size}`;

    $("#qrcodeapi").attr("src",url);
}

function downloadQRCode() {
    var qrcodecard = document.getElementById('qrcode');

    domtoimage.toPng(qrcodecard)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            downloadURI(dataUrl, "qrcode.png")
        })
        .catch(function (error) {
            console.error('Error!', error);
        });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
