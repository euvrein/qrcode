function display_navbar() {
    $("#navbar_div").html("\
        <nav class='navbar navbar-expand-sm bg-dark navbar-dark'>\
            <div class='container-fluid'>\
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapsibleNavbar'>\
                <span class='navbar-toggler-icon'></span>\
                </button>\
                <div class='collapse navbar-collapse' id='collapsibleNavbar'>\
                    <ul class='navbar-nav'>\
                        <li class='nav-item'>\
                            <a class='nav-link' href='./basic.html'>Basic</a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link disabled' href='./link.html'>Link</a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link disabled' href='./wifi.html'>WiFi</a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link disabled' href='./phone.html'>Phone</a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link disabled' href='./sms.html'>SMS</a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link disabled' href='./email.html'>Email</a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link disabled' href='./vcard.html'>VCard</a>\
                        </li>\
                        <li class='nav-item'>\
                            <a class='nav-link disabled' href='./vcard.html'></a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
    ");
}