const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active'); 
    }
});

const feedbackForm = document.getElementById('feedback-form');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        validateForm();
    });
}

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (message.length < 10) {
        if (messageError) messageError.textContent = "Message is too short.";
        isValid = false;
    } else if (messageError) {
        messageError.textContent = "";
    }

    if (isValid) {
        alert("Thank you " + name + "! Your feedback has been sent.");
        localStorage.setItem('lastFeedbackUser', name);
        feedbackForm.reset();
    }
}

const toTop = document.querySelector(".to-top-circle");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add("visible");
    } else {
        toTop.classList.remove("visible");
    }
});

const searchInput = document.getElementById("monumentSearch");
const cards = document.querySelectorAll(".thumb");

if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
        const term = e.target.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector("h2").textContent.toLocaleLowerCase();
            card.style.display = title.includes(term) ? "grid": "none";
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop();
    const allLinks = document.querySelectorAll('.nav-links a, .footer-links a');

    allLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (currentPath === linkPath) {
            link.classList.add('active');
        }
        
        if ((currentPath === "" || currentPath === "index.html") && linkPath === "index.html") {
            link.classList.add('active');
        }
    });
});