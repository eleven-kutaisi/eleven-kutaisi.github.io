var data = {
    phone: "+995 599 30 40 55",
    address: "3rd lane, 11 Lado Asatiani Street, Kutaisi 4600, Georgia",
    wpLink: "https://wa.me/995571718271",
    email: "elevenkutaisi@gmail.com",
    copyright: "© 2024 Eleven Guesthouse. All Rights Reserved | Designed By Friends from India &#10084"
};

function updateElements(className, content) {
    var elements = document.getElementsByClassName(className);
    Array.prototype.forEach.call(elements, function(element) {
        element.innerHTML = content;
    });
}

updateElements("phone", data.phone);
updateElements("address", data.address);
updateElements("wpLink", data.wpLink);
updateElements("email", data.email);
updateElements("copyright", data.copyright);
