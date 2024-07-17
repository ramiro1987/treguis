document.getElementById("whatsapp-button").addEventListener("click", function() {
    var dropdownContent = document.getElementById("dropdown-content");
    var whatsappIcon = document.getElementById("whatsapp-icon");
    var closeIcon = document.getElementById("close-icon");

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        whatsappIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
        whatsappIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
});

// Cierra el dropdown si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.icon-always-info-container') && !event.target.matches('.fa-whatsapp') && !event.target.matches('.fa-times')) {
        var dropdownContent = document.getElementById("dropdown-content");
        var whatsappIcon = document.getElementById("whatsapp-icon");
        var closeIcon = document.getElementById("close-icon");

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            whatsappIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    }
}
