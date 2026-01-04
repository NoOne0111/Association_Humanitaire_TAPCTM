var donationUrl = "https://www.paypal.com/donate/?hosted_button_id=VYR4JZ9CBN7XU";

function loadHeader() {
    fetch('../../src/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            var donationlink = document.getElementById("donationbutton");
            if (donationlink) {
                donationlink.setAttribute("href", donationUrl);
            }
        });
}

// Fonction pour charger le contenu du footer
function loadFooter() {
    fetch('../../src/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            
            var donationlink = document.getElementById("donationbutton");
            if (donationlink) {
                donationlink.setAttribute("href", donationUrl);
            }
        });
}
