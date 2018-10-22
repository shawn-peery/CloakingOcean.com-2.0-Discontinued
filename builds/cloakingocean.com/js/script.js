var links = [
    {url: "../index.html", name: "Home"},
    {url: "../java.html", name: "Java"},
    {url: "../web.html", name: "Web"},
    {url: "../unity.html", name: "Unity"},
    {url: "../gaming.html", name: "Gaming"},
    {url: "../Music", name: "Music"},
];

var currentIndex = $("header").data("id");

writeHeader();
alert("test");
function writeHeader() {
    var $headerString = "<nav class='navbar bg-dark navbar-dark navbar-expand-sm'>" +
                        "<div class='container-fluid'>" +
                            "<div class='navbar-header'>" +
                                "<a href='index.html'><img class='logo navbar-brand' src='images/logo/logo-white.svg'></a>" +
                            "</div>" +
                        "</div>" +
                        "<div class='container-fluid' style='width: 100vw;'>" +
                            "<div class='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>";
    for (let i = 0; i < links.length; i++) {
        let url = links[i].url;
        let name = links[i].name;

        if (i == currentIndex) {
            $headerString += "<a class='nav-item nav-link disabled' href='#'>" + name +  "</a>";
        } else {
            $headerString += "<a class='nav-item nav-link' href='" + url + "'>" + name +  "</a>";
        }
    }

    $headerString +=        "</div><!-- navbar-nav -->" +
                        "</div><!-- container-fluid -->" +
                    "</nav><!-- nav-bar -->"

    var $header = $($headerString);
    $header.insertAfter("header");
}
