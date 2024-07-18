document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(navLink => navLink.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});
