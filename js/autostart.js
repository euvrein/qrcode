$(document).ready(function(){
    generateQRCodes("");
    $('#btn-download-qr-code').prop('disabled', true);
    $("#btn-generate-via-API").prop('disabled', true);
    display_navbar();
    display_footer();
});