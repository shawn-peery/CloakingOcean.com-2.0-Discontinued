// Writes the header for a given page

var links = [
    {url: "../index.html", name: "Home"},
    {url: "../java.html", name: "Java"},
    {url: "../unity.html", name: "Unity"},
    {url: "../web.html", name: "Web"},
    {url: "../gaming.html", name: "Gaming"},
    {url: "../music", name: "Music"},
];

var currentIndex = $("header").data("id")

function writeHeader() {
    let $headerString = "" +
    "<nav class='navbar bg-dark navbar-dark navbar-expand'>" +
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

writeHeader();

function addSpaces($source) {
    var searchWord = ' ';
    var regEx = new RegExp("(" + searchWord + ")(?!([^<]+)?>)", "gi");
    var output = $source.replace(regEx, "&nbsp;");
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


//DEBUGGING FUNCTIONS
function writeBreakpoint() {
    let $breakpointString = "" +
    "<h1 id='breakpoint'>BreakPoint " +
        "<span class='xs d-sm-none d-md-none d-lg-none d-xl-none'>Extra Small</span>" +
        "<span class='sm d-sm-inline d-none d-md-none d-lg-none d-xl-none'>Small</span>" +
        "<span class='md d-md-inline d-none d-sm-none d-lg-none d-xl-none'>Medium</span>" +
        "<span class='lg d-lg-inline d-none d-sm-none d-md-none d-xl-none'>Large</span>" +
        "<span class='xl d-xl-inline d-none d-sm-none d-md-none d-l-none'>Extra Large</span>" +
    "</h1>";

    $(document.body).prepend($breakpointString);

    addSpaces($breakpointString);
}

writeBreakpoint();
