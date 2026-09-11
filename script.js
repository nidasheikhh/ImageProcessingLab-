// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================= PRACTICAL SEARCH =================

const searchInput = document.getElementById("practicalSearch");
const practicalCards = document.querySelectorAll(".practical-card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        practicalCards.forEach(card => {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ================= CARD ANIMATION =================

const cards = document.querySelectorAll(".practical-card");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";

    observer.observe(card);

});


// ================= CONSOLE MESSAGE =================

console.log(
    "IMAGE LAB - Image Processing Techniques loaded successfully."
);