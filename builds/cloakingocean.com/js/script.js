// Writes the header for a given page

var links = [
    {url: "../index.html", name: "Home"},
    {url: "../java.html", name: "Java"},
    {url: "../web.html", name: "Web"},
    {url: "../unity.html", name: "Unity"},
    {url: "../gaming.html", name: "Gaming"},
    {url: "../music", name: "Music"},
];

var currentIndex = $("header").data("id");

writeHeader();

function writeHeader() {
    let $headerString = "" +
    "<nav class='navbar bg-dark navbar-dark navbar-expand-sm'>" +
        "<div class='container-fluid'>" +
            "<div class='navbar-header'>" +
                "<a href='index.html'><img class='logo navbar-brand' src='images/logo/logo-white.svg'></a>" +
            "</div>" +
        "</div>" +
        "<div class='container-fluid' style='width: 100vw;'>" +
            "<div class='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>";

    $headerString += addLinksForEachPage() +

            "</div><!-- navbar-nav -->"
        "</div><!-- container-fluid -->" +
    "</nav><!-- nav-bar -->"

    let $header = $($headerString);
    $("header").html($header);
}

function addLinksForEachPage() {
    let $string = "";
    for (let i = 0; i < links.length; i++) {
        let url = links[i].url;
        let name = links[i].name;

        if (i == currentIndex) {
            $string += "<a class='nav-item nav-link disabled' href='#'>" + name +  "</a>";
        } else {
            $string += "<a class='nav-item nav-link' href='" + url + "'>" + name +  "</a>";
        }
    }
    return $string;
}

// On Hover Add Active Class to Navbar Elements

$(".navbar a").on({
    mouseover: function(ev) {
        $(ev.target).addClass("active");
    },

    mouseout: function(ev) {
        $(ev.target).removeClass("active");
    }
});
