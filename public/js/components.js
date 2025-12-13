// Fonction pour charger le contenu du header
function loadHeader() {
    fetch('../../src/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
}
