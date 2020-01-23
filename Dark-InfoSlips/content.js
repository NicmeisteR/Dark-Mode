// content.js

// document.getElementById("runReports").style.display = "none";
// var x = document.getElementById("runReports").parentNode.nodeName;
// console.log(x);
// var first = document.createElement("button", "id:test");
// var text = document.createTextNode("Test");
// // var test = document.create
// first.appendChild(text);

var version = document.getElementsByClassName("version")[0];
var asisNavBar = document.getElementsByClassName("mainNavigation")[0];
var asisHelpContent = document.getElementsByClassName("helpContent")[0];

// document.getElementsByClassName("version")[0].appendChild(first);
// // version.innerText = '<div id="two">two</div>';
function test(){
    alert("Works");
}

$(version).append( "<button class='sun' id='mode'><i class='fas fa-sun'></i></button>" );
$("#mode").click(function() {
    alert("Clicked");
});

// $(asisNavBar).replaceWith( 
//     `<div class="container"><nav class="navbar navbar-expand-lg navbar-light bg-light">
// <a class="navbar-brand" href="#">Navbar</a>
// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <span class="navbar-toggler-icon"></span>
// </button>

// <div class="collapse navbar-collapse" id="navbarSupportedContent">
//   <ul class="navbar-nav mr-auto">
//     <li class="nav-item active">
//       <a class="nav-link" href="/Services/services.aspx">Services home <span class="sr-only">(current)</span></a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="/Services/infoslipstrialrun/rundata.aspx">Perform runs</a>
//     </li>
//     <li class="nav-item">
//     <a class="nav-link" href="/Services/helpdesk/recipients.aspx">Recipient management</a>
//   </li>
//   <li class="nav-item">
//   <a class="nav-link" href="/Services/systemadmin/customertemplates.aspx">Edit templates</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="/Services/systemadmin/communicationtemplatescreate.aspx">Edit email templates</a>
// </li>
//   </ul>
// </div>
// </nav></div>`
//     );
// $("#mode").click(function() {
//     alert("Clicked");
// });

// $(asisHelpContent).replaceWith( "<br/>" );
// $("#mode").click(function() {
//     alert("Clicked");
// });

// var mainHeader = document.getElementsByClassName("mainHeader")[0];
// var servicesHeading = document.getElementsByClassName("servicesHeading")[0];;

// $(mainHeader).replaceWith( "" );
// $("#mode").click(function() {
//     alert("Clicked");
// });

// $(servicesHeading).replaceWith( "" );
// $("#mode").click(function() {
//     alert("Clicked");
// });

