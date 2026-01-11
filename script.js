// get all sections
const sections = document.querySelectorAll(".section");

// get all nav links
const navLinks = document.querySelectorAll("nav a");

// detect scroll event
window.addEventListener("scroll", () => {
    let current = "";

    // check which section is visible
    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 200) {
            current = section.getAttribute("id");
        }
    });

    // update active link
    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
