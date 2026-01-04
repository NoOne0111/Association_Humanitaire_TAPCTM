// Appeler les fonctions loadHeader et loadFooter lorsque la page est chargée
window.onload = function() {
    loadHeader();
    loadFooter();
    var paypal = document.getElementById("paypal");
    if (paypal) {
        var paypalUrl = "https://www.paypal.com/donate/?hosted_button_id=VYR4JZ9CBN7XU";
        paypal.setAttribute("href", paypalUrl);
    }
};
