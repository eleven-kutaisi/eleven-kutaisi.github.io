var phone = "+995 599 30 40 55";
var address = "3rd lane, 11 Lado Asatiani Street, Kutaisi 4600, Georgia";
var wpLink = "https://wa.me/995571718271";
var email = "elevenkutaisi@gmail.com";
var copyright = "© 2024 Eleven Guesthouse. All Rights Reserved | Designed By Friends from India &#10084";




var phoneElements = document.getElementsByClassName("phone");
var addressElements = document.getElementsByClassName("address");
var wpLinkElements = document.getElementsByClassName("wpLink");
var emailElements = document.getElementsByClassName("email")
var copyrightElements = document.getElementsByClassName("copyright");



Array.prototype.forEach.call(phoneElements, function(element) {
    element.innerHTML = phone;
});
Array.prototype.forEach.call(addressElements, function(element) {
    element.innerHTML = address;
});
Array.prototype.forEach.call(wpLinkElements, function(element) {
    element.innerHTML = wpLink;
});
Array.prototype.forEach.call(emailElements, function(element) {
    element.innerHTML = email;
});
Array.prototype.forEach.call(copyrightElements, function(element) {
    element.innerHTML = copyright;
});



