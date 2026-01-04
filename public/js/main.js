// Appeler les fonctions loadHeader et loadFooter lorsque la page est chargée
window.onload = function() {
    loadHeader();
    loadFooter();

    var paypal = document.getElementById("paypal");
    if (paypal) {
        paypal.setAttribute("href", paypalUrl);
    }
};
