alert("Version 4!");

var $header = $(("<nav class='navbar bg-dark navbar-dark navbar-expand-sm'>" +
    "<div class='container-fluid'>" +
        "<div class='navbar-header'>" +
            "<a href='index.html'><img class='logo navbar-brand' src='images/logo/logo-white.svg'></a>" +
        "</div>" +
    "</div>" +
    "<div class='container-fluid' style='width: 100vw;'>" +
        "<div class='navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0'>" +
            "<a class='nav-item nav-link' href='#'>Home</a>" +
            "<a class='nav-item nav-link' href='#'>Java</a>" +
            "<a class='nav-item nav-link' href='#'>Web</a>" +
            "<a class='nav-item nav-link' href='#'>Unity</a>" +
            "<a class='nav-item nav-link' href='#'>Gaming</a>" +
            "<a class='nav-item nav-link' href='#'>Music</a>" +
        "</div><!-- navbar-nav -->" +
    "</div><!-- container-fluid -->" +
"</nav><!-- nav-bar -->"));
$header.insertAfter("header");
// var $name = $("header").html();
// alert($name);

/**
<nav class="navbar bg-dark navbar-dark navbar-expand-sm">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="index.html"><img class="logo navbar-brand" src="images/logo/logo-white.svg"></a>
        </div>
    </div>
    <div class="container-fluid" style="width: 100vw;">
        <div class="navbar-nav justify-content-end ml-auto mr-auto ml-sm-auto mr-sm-0">
            <a class="nav-item nav-link" href="#">Home</a>
            <a class="nav-item nav-link" href="#">Java</a>
            <a class="nav-item nav-link" href="#">Web</a>
            <a class="nav-item nav-link" href="#">Unity</a>
            <a class="nav-item nav-link" href="#">Gaming</a>
            <a class="nav-item nav-link" href="#">Music</a>
        </div><!-- navbar-nav -->
    </div><!-- container-fluid -->
</nav><!-- nav-bar -->

*/
